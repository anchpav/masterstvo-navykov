@echo off
REM Navigate to the project folder
cd /d "D:\site\habits-workshop"

REM Stage all changes
git add .

REM Commit with the current date and time
git commit -m "Site update %date% %time%"

REM Push to the main branch
git push origin main

echo Update has been sent to GitHub!
pause
