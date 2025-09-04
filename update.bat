@echo off
REM Перейти в папку проекта
cd /d "D:\site\habits-workshop"

REM Добавляем все изменения
git add .

REM Коммит с текущей датой и временем
git commit -m "Обновление сайта %date% %time%"

REM Пуш в ветку main
git push origin main

echo Обновление отправлено на GitHub!
pause
