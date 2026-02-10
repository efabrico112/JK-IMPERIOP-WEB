@echo off
mkdir Sitio_Web_Listo
copy index.html Sitio_Web_Listo\
copy catalogo.html Sitio_Web_Listo\
copy contact.html Sitio_Web_Listo\
mkdir Sitio_Web_Listo\styles
copy styles\main.css Sitio_Web_Listo\styles\
mkdir Sitio_Web_Listo\scripts
copy scripts\main.js Sitio_Web_Listo\scripts\
echo -----------------------------------------------
echo CARPETA "Sitio_Web_Listo" CREADA CON EXITO!
echo Sube el contenido de esa carpeta a GitHub.
echo -----------------------------------------------
pause
