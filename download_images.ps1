# PowerShell Downloader Script for Keshavkrupa Hospital Images
# Run this script to download all high-resolution images offline to d:\KP\images\

$imagesDir = "d:\KP\images"
if (-not (Test-Path $imagesDir)) {
    Write-Host "Creating images directory: $imagesDir"
    New-Item -ItemType Directory -Force -Path $imagesDir | Out-Null
}

$assets = @(
    @{ Url = "https://ex-coders.com/html/rend/assets/images/banner/banner-doctor.png"; Path = "d:\KP\images\hero-doctor.png" },
    @{ Url = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80"; Path = "d:\KP\images\patient-1.jpg" },
    @{ Url = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80"; Path = "d:\KP\images\patient-2.jpg" },
    @{ Url = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80"; Path = "d:\KP\images\patient-3.jpg" },
    @{ Url = "https://images.unsplash.com/photo-1504817342594-95d227967e14?auto=format&fit=crop&w=600&q=80"; Path = "d:\KP\images\about-lobby.jpg" },
    @{ Url = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80"; Path = "d:\KP\images\doctor-1.jpg" },
    @{ Url = "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&w=600&q=80"; Path = "d:\KP\images\doctor-2.jpg" },
    @{ Url = "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80"; Path = "d:\KP\images\doctor-3.jpg" },
    @{ Url = "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&w=600&q=80"; Path = "d:\KP\images\doctor-4.jpg" },
    @{ Url = "https://images.unsplash.com/photo-1584515901367-f134706ef532?auto=format&fit=crop&w=800&q=80"; Path = "d:\KP\images\gallery-1.jpg" },
    @{ Url = "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"; Path = "d:\KP\images\gallery-2.jpg" },
    @{ Url = "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&w=800&q=80"; Path = "d:\KP\images\gallery-3.jpg" },
    @{ Url = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"; Path = "d:\KP\images\gallery-4.jpg" }
)

foreach ($asset in $assets) {
    try {
        if (Test-Path $asset.Path) {
            Write-Host "File already exists, skipping: $($asset.Path)"
            continue
        }
        Write-Host "Downloading: $($asset.Url) -> $($asset.Path)"
        Invoke-WebRequest -Uri $asset.Url -OutFile $asset.Path -TimeoutSec 15
    } catch {
        Write-Warning "Failed to download $($asset.Url): $_"
    }
}

Write-Host "All downloads complete!"
