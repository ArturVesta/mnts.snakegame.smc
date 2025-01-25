@echo off
echo [InternetShortcut]>> %UserProfile%/OneDrive/Desktop/SMC.url
echo URL=%cd%\index.html>> %UserProfile%/OneDrive/Desktop/SMC.url
echo IDList=>> %UserProfile%/OneDrive/Desktop/SMC.url
echo IconFile=%cd%\icons.dll>> %UserProfile%/OneDrive/Desktop/SMC.url
echo IconIndex=0>> %UserProfile%/OneDrive/Desktop/SMC.url
echo HotKey=0>> %UserProfile%/OneDrive/Desktop/SMC.url