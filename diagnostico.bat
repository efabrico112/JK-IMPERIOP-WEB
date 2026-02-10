@echo off
echo ========================================== > diagnostico_log.txt
echo DIAGNOSTICO DEL SISTEMA >> diagnostico_log.txt
echo ========================================== >> diagnostico_log.txt
echo FECHA Y HORA: %DATE% %TIME% >> diagnostico_log.txt
echo. >> diagnostico_log.txt

echo [1] VERIFICANDO PYTHON... >> diagnostico_log.txt
python --version >> diagnostico_log.txt 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo Python NO encontrado con 'python'. Espere... >> diagnostico_log.txt
    py --version >> diagnostico_log.txt 2>&1
    IF %ERRORLEVEL% NEQ 0 (
        echo Python NO encontrado con 'py' tampoco. >> diagnostico_log.txt
    ) ELSE (
        echo Python encontrado con 'py'. >> diagnostico_log.txt
    )
) ELSE (
    echo Python encontrado correctamente. >> diagnostico_log.txt
)
echo. >> diagnostico_log.txt

echo [2] PROCESOS PYTHON ACTIVOS... >> diagnostico_log.txt
tasklist /FI "IMAGENAME eq python.exe" >> diagnostico_log.txt 2>&1
echo. >> diagnostico_log.txt

echo [3] PUERTOS DE RED (8000, 8080)... >> diagnostico_log.txt
netstat -an | findstr "8000" >> diagnostico_log.txt 2>&1
netstat -an | findstr "8080" >> diagnostico_log.txt 2>&1
echo. >> diagnostico_log.txt

echo [4] DIRECTORIO ACTUAL... >> diagnostico_log.txt
echo %CD% >> diagnostico_log.txt
echo. >> diagnostico_log.txt

echo Diagnostico finalizado.
