# Bulatan Angkasa

Projek ini ialah laman pembelajaran interaktif bertema bulatan dan angkasa.

## Fail utama

- `index.html`
- `bulatan.html`
- `styles.css`
- `script.js`

## Repo baru GitHub

Folder ini sudah disediakan untuk repo baru yang bersih. Fail `Pictures/`, backup `.git` lama, dan fail deploy lama tidak akan ikut masuk ke repo baru.

### Langkah sekali sahaja

1. Buat repo kosong baru di GitHub.
2. Jangan tambah `README`, `.gitignore`, atau license dari GitHub jika mahu push terus dari folder ini.
3. Dari `cmd`, masuk ke folder projek ini:

```bat
cd /d "C:\Users\ACER\kajian pembangunan"
git remote add origin https://github.com/USERNAME/NAMA-REPO.git
git push -u origin main
```

Jika anda perlu tukar URL remote kemudian, guna:

```bat
git remote set-url origin https://github.com/USERNAME/NAMA-REPO.git
```

## Vercel baru

### Pilihan yang disyorkan

Import repo GitHub baru ini terus ke Vercel. Selepas itu, setiap kali anda `git push` ke branch `main`, Vercel akan deploy secara automatik.

### Pilihan melalui CMD

1. Pastikan `Node.js` sudah dipasang.
2. Pasang Vercel CLI:
   `npm install -g vercel`
3. Login:
   `vercel login`
4. Dari folder projek ini, cipta atau link projek Vercel:
   `vercel`

Selepas setup pertama itu, folder `.vercel/` akan diwujudkan secara automatik.

## Auto push dari CMD

Skrip berikut sudah disediakan:

- `auto-deploy.cmd`
- `auto-deploy.ps1`

Cara guna:

```bat
cd /d "C:\Users\ACER\kajian pembangunan"
auto-deploy.cmd -Message "kemas kini laman utama"
```

Pilihan tambahan:

- GitHub push sahaja tanpa deploy Vercel:
  `auto-deploy.cmd -Message "update" -SkipVercel`
- Jalan tanpa prompt pengesahan:
  `auto-deploy.cmd -Message "update" -Force`
- Push ke branch lain:
  `auto-deploy.cmd -Message "update" -Branch dev`

## Nota penting

- Skrip akan paparkan `git status` dahulu sebelum stage fail.
- Secara lalai, skrip menggunakan `git add -A`, jadi semak dahulu jika ada fail yang anda tidak mahu commit.
- Jika remote GitHub belum diset, skrip akan berhenti dan tunjuk arahan `git remote add origin ...`.
- Jika projek Vercel belum diset, skrip akan berhenti dan minta anda jalankan `vercel` sekali sahaja.
