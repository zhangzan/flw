rm index.html
rm -rf static
cp -rf ../flwweb/dist/* .
git add .
git ci 'deploy'
git ph master