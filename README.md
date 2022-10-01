# Proyecto de hotel-front

Este proyecto fue desarrollado en React.

## Versión de node js

Node 16.14.2


## Instalación

1. Descarga el repositorio
2. Entrar a la carpeta desde la terminal 
3. Ejecutar `npm install` o `yarn`
4. Ejecutar `npm start` o `yarn start`
5. Si se presenta el siguiente problema: 
<img src="https://jeespoping-ecomerce.s3.us-east-2.amazonaws.com/WhatsApp+Image+2022-10-01+at+3.42.04+PM.jpeg" width="500" >
Esto es debido a que el módulo semantic en su versión actual presenta este error.
6. debe parar la ejecucion con `CTRL + C`;
7. Irse a la carpeta node_module del proyecto
8. Eliminar la carpeta cache
<img src="https://jeespoping-ecomerce.s3.us-east-2.amazonaws.com/WhatsApp+Image+2022-10-01+at+3.50.36+PM.jpeg" width="500" >
10. En la misma carpte de node_module buscar la carpeta llamada `semantic-ui-css`
11. y abrir los archivos `semantic.css` y `semantic.min.css`
<img src="https://jeespoping-ecomerce.s3.us-east-2.amazonaws.com/WhatsApp+Image+2022-10-01+at+3.53.55+PM.jpeg" width="500" >

12. Hacer una busqueda en ambos archivos de `;;` donde esten dos puntos y comas elimnar uno y dejar solo uno
<img src="https://jeespoping-ecomerce.s3.us-east-2.amazonaws.com/WhatsApp+Image+2022-10-01+at+3.56.00+PM.jpeg" width="500" >
<img src="https://jeespoping-ecomerce.s3.us-east-2.amazonaws.com/WhatsApp+Image+2022-10-01+at+3.56.33+PM.jpeg" width="500" >
13. Después de haber realizado los pasos anteriores podemos ejecutar de nuevo el proyecto
14. Para ser desplegado la aplicación se tiene que tener en cuenta que el backend ya está iniciado

## Configuraciones
1. Existe un archivo en la raiz del proyecto llamado .env, en este esta declarado la variable REACT_APP_API_URL, donde se espesifica la url base de peticiones, para este caso
la url es http://hotel-back.test/api/v1, debido a que se ejecuto con laragon y laravel

## Presentaciones
### Inicio o raiz
