@echo off
break>%UserProfile%/Desktop/SMC.url
set zero=^^^0
echo [InternetShortcut]>> %UserProfile%/Desktop/SMC.url
echo URL=%cd%\index.html>> %UserProfile%/Desktop/SMC.url
echo IDList=>> %UserProfile%/Desktop/SMC.url
echo IconFile=%cd%\icons.dll>> %UserProfile%/Desktop/SMC.url
echo IconIndex=%zero%>> %UserProfile%/Desktop/SMC.url
echo HotKey=%zero%>> %UserProfile%/Desktop/SMC.url
echo Shortcut successfully created
pause