@echo off
powershell -ExecutionPolicy Bypass -File "%~dp0auto-deploy.ps1" %*
