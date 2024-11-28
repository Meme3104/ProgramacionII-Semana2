const express = require('express')


const app = express()

app.get ('/',(req, res)=>{

    const htmlContent = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Página de Inicio</title>
        </head>
        <body>
            <h1>Bienvenido a mi pagina para la clase 5 </h1>
            <p>Esta es una página servida desde un servidor Node.js para la actividad 2</p>
        </body>
        </html>
    `;
    res.send(htmlContent); // Enviar el contenido HTML
});



const PORT = 3000
app.listen(PORT, ()=>{console.log("Escuchando en el puerto 3000")})