az acr login --name hendersonconsultregistry

dotnet publish -c Release -p:PublishProfile=DefaultContainer

# Build and publish the container image
dotnet publish --os linux  /t:PublishContainer -c Release

docker pull hendersonconsultregistry.azurecr.io/carinogaweb:1.1.2