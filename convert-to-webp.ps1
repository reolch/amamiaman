# WebP変換スクリプト
# 必要なツール: cwebp (Google WebP tools)

param(
    [string]$InputDir = "public\assets\images",
    [string]$Quality = "85"
)

# WebPツールの確認
$cwebpPath = where.exe cwebp 2>$null
if (-not $cwebpPath) {
    Write-Host "Error: cwebp not found. Please install Google WebP tools." -ForegroundColor Red
    Write-Host "Download from: https://developers.google.com/speed/webp/download" -ForegroundColor Yellow
    exit 1
}

Write-Host "Starting WebP conversion..." -ForegroundColor Green
Write-Host "Input directory: $InputDir" -ForegroundColor Yellow
Write-Host "Quality: $Quality%" -ForegroundColor Yellow

# 変換対象の拡張子
$extensions = @("*.jpg", "*.jpeg", "*.png", "*.JPG", "*.JPEG", "*.PNG")

$totalConverted = 0
$totalSkipped = 0

foreach ($ext in $extensions) {
    $files = Get-ChildItem -Path $InputDir -Filter $ext -Recurse
    
    foreach ($file in $files) {
        $webpPath = $file.FullName -replace '\.(jpg|jpeg|png|JPG|JPEG|PNG)$', '.webp'
        
        # 既にWebPファイルが存在し、元ファイルより新しい場合はスキップ
        if (Test-Path $webpPath) {
            $webpFile = Get-Item $webpPath
            if ($webpFile.LastWriteTime -gt $file.LastWriteTime) {
                Write-Host "Skipping (already converted): $($file.Name)" -ForegroundColor Gray
                $totalSkipped++
                continue
            }
        }
        
        Write-Host "Converting: $($file.Name) -> $($webpPath | Split-Path -Leaf)" -ForegroundColor Cyan
        
        # WebP変換実行
        $result = & $cwebpPath -q $Quality "$($file.FullName)" -o "$webpPath" 2>&1
        
        if ($LASTEXITCODE -eq 0) {
            $originalSize = [math]::Round($file.Length / 1KB, 2)
            $webpSize = [math]::Round((Get-Item $webpPath).Length / 1KB, 2)
            $savings = [math]::Round(($file.Length - (Get-Item $webpPath).Length) / $file.Length * 100, 1)
            
            Write-Host "  ✓ Success: $originalSize KB -> $webpSize KB (${savings}% smaller)" -ForegroundColor Green
            $totalConverted++
        } else {
            Write-Host "  ✗ Failed: $result" -ForegroundColor Red
        }
    }
}

Write-Host "`nConversion complete!" -ForegroundColor Green
Write-Host "Converted: $totalConverted files" -ForegroundColor Yellow
Write-Host "Skipped: $totalSkipped files" -ForegroundColor Yellow