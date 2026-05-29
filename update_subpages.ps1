$dir = "d:\KP"
$files = Get-ChildItem -Path $dir -Filter "*.html" | Where-Object { $_.Name -ne "index.html" }

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw
    if ($content.Contains('<main style="padding-top: 100px;">')) {
        $content = $content.Replace('<main style="padding-top: 100px;">', '<main class="subpage-main">')
        Set-Content -Path $file.FullName -Value $content
        Write-Host "Updated $($file.Name)"
    }
}
Write-Host "Done"
