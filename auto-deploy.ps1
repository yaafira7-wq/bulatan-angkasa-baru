param(
    [string]$Message = "",
    [string]$Branch = "main",
    [switch]$SkipVercel,
    [switch]$Force
)

$ErrorActionPreference = "Stop"

function Require-Command {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Name
    )

    $command = Get-Command $Name -ErrorAction SilentlyContinue
    if (-not $command) {
        throw "Arahan '$Name' tidak dijumpai. Pastikan ia telah dipasang dan ada dalam PATH."
    }

    return $command
}

function Invoke-Native {
    param(
        [Parameter(Mandatory = $true)]
        [scriptblock]$Command,
        [Parameter(Mandatory = $true)]
        [string]$Description
    )

    & $Command
    $exitCode = $LASTEXITCODE

    if ($exitCode -ne 0) {
        throw "$Description gagal. Exit code: $exitCode"
    }
}

function Get-OriginUrl {
    $originUrl = git remote get-url origin 2>$null

    if ($LASTEXITCODE -ne 0) {
        return ""
    }

    return $originUrl
}

function Get-VercelExecutable {
    $candidates = @()

    if ($env:APPDATA) {
        $appDataCommand = Join-Path $env:APPDATA "npm\vercel.cmd"
        if (Test-Path $appDataCommand) {
            $candidates += $appDataCommand
        }
    }

    $cmdCommand = Get-Command "vercel.cmd" -ErrorAction SilentlyContinue
    if ($cmdCommand -and $cmdCommand.Source -and ($cmdCommand.Source -notin $candidates)) {
        $candidates += $cmdCommand.Source
    }

    $genericCommand = Get-Command "vercel" -ErrorAction SilentlyContinue
    if ($genericCommand -and $genericCommand.CommandType -eq "Application" -and $genericCommand.Source -and ($genericCommand.Source -notin $candidates)) {
        $candidates += $genericCommand.Source
    }

    if ($candidates.Count -eq 0) {
        return ""
    }

    return $candidates[0]
}

function Ensure-NodePath {
    $nodeCommand = Get-Command "node" -ErrorAction SilentlyContinue
    if ($nodeCommand) {
        return
    }

    $candidateDirectories = @(
        "C:\Program Files\nodejs",
        "C:\Program Files (x86)\nodejs"
    )

    foreach ($directory in $candidateDirectories) {
        $nodePath = Join-Path $directory "node.exe"
        if (Test-Path $nodePath) {
            $env:Path = "$directory;$env:Path"
            return
        }
    }
}

try {
    Require-Command -Name "git" | Out-Null

    $scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
    Set-Location $scriptRoot

    $repoRoot = git rev-parse --show-toplevel 2>$null
    if (-not $repoRoot) {
        throw "Folder ini bukan git repository."
    }

    Set-Location $repoRoot

    Write-Host ""
    Write-Host "=== Git Status ===" -ForegroundColor Cyan
    $statusLines = @(git status --short)

    if ($statusLines.Count -eq 0) {
        Write-Host "Tiada perubahan untuk di-commit." -ForegroundColor Yellow
    } else {
        $statusLines | ForEach-Object { Write-Host $_ }
        Write-Host ""
        Write-Host "Skrip ini akan stage SEMUA perubahan di atas." -ForegroundColor Yellow
        Write-Host "Jika ada fail yang anda tak mahu push, tekan N dan semak dahulu." -ForegroundColor Yellow

        if (-not $Force) {
            $confirmation = Read-Host "Teruskan git add/commit/push? (Y/N)"
            if ($confirmation -notmatch "^[Yy]$") {
                Write-Host "Operasi dibatalkan." -ForegroundColor Yellow
                exit 0
            }
        }

        Write-Host ""
        Write-Host "=== Git Add ===" -ForegroundColor Cyan
        Invoke-Native -Description "Git add" -Command { git add -A }

        $stagedLines = @(git diff --cached --name-only)
        if ($stagedLines.Count -eq 0) {
            Write-Host "Tiada perubahan yang berjaya di-stage." -ForegroundColor Yellow
        } else {
            if ([string]::IsNullOrWhiteSpace($Message)) {
                $Message = "Auto deploy $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
            }

            Write-Host ""
            Write-Host "=== Git Commit ===" -ForegroundColor Cyan
            Invoke-Native -Description "Git commit" -Command { git commit -m $Message }

            $originUrl = Get-OriginUrl
            if ([string]::IsNullOrWhiteSpace($originUrl)) {
                Write-Host ""
                Write-Host "Remote GitHub belum diset untuk repo baru ini." -ForegroundColor Yellow
                Write-Host "Jalankan sekali sahaja:" -ForegroundColor Yellow
                Write-Host "  git remote add origin https://github.com/USERNAME/NAMA-REPO.git" -ForegroundColor Yellow
                Write-Host "Selepas itu, ulang semula skrip ini untuk push ke GitHub." -ForegroundColor Yellow
                exit 0
            }

            Write-Host ""
            Write-Host "=== Git Push ===" -ForegroundColor Cyan
            Invoke-Native -Description "Git push" -Command { git push origin $Branch }
        }
    }

    if ($SkipVercel) {
        Write-Host ""
        Write-Host "Vercel deploy di-skip kerana anda guna -SkipVercel." -ForegroundColor Yellow
        exit 0
    }

    Write-Host ""
    Write-Host "=== Vercel Deploy ===" -ForegroundColor Cyan

    Ensure-NodePath

    $vercelExecutable = Get-VercelExecutable
    if ([string]::IsNullOrWhiteSpace($vercelExecutable)) {
        Write-Host "Vercel CLI belum dipasang." -ForegroundColor Yellow
        Write-Host "Pasang sekali sahaja dengan: npm install -g vercel" -ForegroundColor Yellow
        exit 0
    }

    if (-not (Test-Path ".vercel\project.json")) {
        Write-Host "Projek ini belum di-link ke Vercel pada komputer ini." -ForegroundColor Yellow
        Write-Host "Jalankan sekali sahaja:" -ForegroundColor Yellow
        Write-Host "  vercel login" -ForegroundColor Yellow
        Write-Host "  vercel" -ForegroundColor Yellow
        Write-Host "atau import repo GitHub ini terus dalam dashboard Vercel." -ForegroundColor Yellow
        exit 0
    }

    Invoke-Native -Description "Vercel deploy" -Command { & $vercelExecutable --prod --yes }
} catch {
    Write-Host ""
    Write-Host $_.Exception.Message -ForegroundColor Red
    exit 1
}
