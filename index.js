const http = require('http');
let moment = require('moment');
const express = require('express');
const server = express();
const port = 8080;
let contador = 0;
server.get('/',(req,res)=>{
  res.status(200).send(`<!DOCTYPE html>
                        <html>
                          <head>
                            <meta charset="utf-8">
                            <title>Mi pagina de prueba</title>
                          </head>
                          <body>
                            <h1>Mi título</h1>
                          </body>
                        </html>`);
})

server.get('/visitas',(req,res)=>{
  contador++;
  res.status(200).send(`Total de personas que han ingresado a esta página ${contador}`);
})

server.get('/fyh',(req,res)=>{
  res.status(200).json({"fyh": moment().format("YYYY-MM-DD HH:MM:SS").toString()});
})


server.listen(port, ()=>{
  console.log(`ESCUCANDO EL SERVER DESDE EXPRESS http://localhost:${port}`);
})

server.on('error', err => console.log(`Sucedió un error en la inicialización del servidor`, err));
