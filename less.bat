@echo off
cd style/less
echo "Compiling less..."
lessc master.less ../css/master.css
lessc mobile.less ../css/mobile.css
cd ../..
