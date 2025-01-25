@echo off
echo [InternetShortcut]>> %UserProfile%/Desktop/SMC.url
echo URL=%cd%\index.html>> %UserProfile%/Desktop/SMC.url
echo IDList=>> %UserProfile%/Desktop/SMC.url
echo IconFile=%cd%\icons.dll>> %UserProfile%/Desktop/SMC.url
echo IconIndex=0>> %UserProfile%/Desktop/SMC.url
echo HotKey=0>> %UserProfile%/Desktop/SMC.url