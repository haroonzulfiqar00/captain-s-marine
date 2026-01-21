# Script to remove Google Fonts from all HTML pages

$pagesDir = "d:\Haroon\local-work-boats\captain-marine\pages"
$files = Get-ChildItem -Path $pagesDir -Filter "*.html"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # Remove Google Fonts links
    $content = $content -replace '\s*<link rel="preconnect" href="https://fonts\.googleapis\.com">\r?\n', ''
    $content = $content -replace '\s*<link rel="preconnect" href="https://fonts\.gstatic\.com" crossorigin>\r?\n', ''
    $content = $content -replace '\s*<link href="https://fonts\.googleapis\.com/css2\?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">\r?\n', ''
    
    Set-Content -Path $file.FullName -Value $content -NoNewline
    Write-Host "Updated: $($file.Name)"
}

Write-Host "`nAll HTML files updated successfully!"
