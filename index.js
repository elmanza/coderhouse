// const http = require('http');
const express = require("express");
let moment = require('moment');
let ngrok = require("ngrok");
const PORT = 3000;
let app = express();
let counter_page = 0;

app.get("/",(req, res)=>{
  let response = `<h1 style="color:blue;font-family:'Roboto'; font-size:60pt;">Bienvenidos al servidor express</h1>`;
  res.send(response);
})

app.get("/visitas",(req, res)=>{
  counter_page++;
  res.send(`Esta página hoy ha tenido ${counter_page} visitas`);
})


app.get("/fyh",(req, res)=>{
  res.json({"fyh": moment().format("YYYY-MM-DD HH:MM:SS").toString()});
})


app.listen(PORT, ()=>{
  console.log(`Estamos conectados a la URL http://localhost:${PORT}`)
});

// (async function() {
//   const url = await ngrok.connect(PORT);
//   console.log("Mi url", url, " -->portServer:",PORT);
// })();

app.on("error", err => console.log(`Falló nuestra conexión al servidor`, err));
