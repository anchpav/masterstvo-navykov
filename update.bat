@echo off
cd /d "D:\site\habits-workshop"  :: путь к твоему проекту
git add .
git commit -m "Обновление сайта %date% %time%"
git push origin main
echo Обновление отправлено на GitHub!
pause
