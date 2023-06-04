Set-Location .\carinoga-web

dotnet publish `
    --os linux `
    --arch x64 `
    /t:PublishContainer `
    -c Release

