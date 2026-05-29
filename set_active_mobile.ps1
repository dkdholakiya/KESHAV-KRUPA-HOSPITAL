Set-Location "d:\KP"
$htmlFiles = Get-ChildItem -Filter *.html

foreach ($file in $htmlFiles) {
    $content = Get-Content -Path $file.FullName -Raw
    $filename = $file.Name
    
    # Check if we already added active, if not add it
    $targetString = "href=`"$filename`" class=`"mobile-link`""
    $replaceString = "href=`"$filename`" class=`"mobile-link active`""
    
    if ($content -match $targetString) {
        $newContent = $content -replace $targetString, $replaceString
        [IO.File]::WriteAllText($file.FullName, $newContent)
        Write-Host "Set active mobile link in $filename"
    }
}
