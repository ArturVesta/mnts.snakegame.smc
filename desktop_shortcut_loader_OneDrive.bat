@echo off
break>%UserProfile%/Desktop/SMC.url
set zero=^^^0
echo [InternetShortcut]>> %UserProfile%/OneDrive/Desktop/SMC.url
echo URL=%cd%\index.html>> %UserProfile%/OneDrive/Desktop/SMC.url
echo IDList=>> %UserProfile%/OneDrive/Desktop/SMC.url
echo IconFile=%cd%\icons.dll>> %UserProfile%/OneDrive/Desktop/SMC.url
echo IconIndex=%zero%>> %UserProfile%/OneDrive/Desktop/SMC.url
echo HotKey=%zero%>> %UserProfile%/OneDrive/Desktop/SMC.url
echo Shortcut successfully created
pause