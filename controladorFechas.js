let moment = require('moment');
let Dates = require('./fechas');


let hasta = 10000;
let response = {};

// for (let i = 0; i < hasta; i++) {
//     let num_random = Math.floor((Math.random() * (20 - 1) + 0));
//     response[num_random] = response.hasOwnProperty(num_random) ? response[num_random] + 1 : 0;    
// }
// console.log("Mi respuesta", response);


//PUNTO 2
const productos = [
    {id:1, nombre:'Escuadra', precio: 323.45},
    {id:2, nombre:'Calculadora', precio: 234.56},
    {id:3, nombre:'Blobo terráqueo', precio: 145.67},
    {id:4, nombre:'Paleta pintura', precio: 456.78},
    {id:5, nombre:'Reloj', precio: 67.89},
    {id:6, nombre:'Agenda', precio: 78.90}
]
let productStatistics = productos.reduce((prev, obj, i)=>{
    if(i == 0){
        return {
          names: obj.nombre,
          total: obj.precio,
          minor: obj,
          major: obj
        }
    }else{
      let minor = prev.minor.precio < obj.precio ? prev.minor : obj;
      let major = prev.major.precio > obj.precio ? prev.major : obj;
        return {
          names: `${prev.names}, ${obj.nombre}`,
          total: prev.total + obj.precio,
          minor,
          major
        };
    }    
}, {});
productStatistics.promedio = (productStatistics.total / productos.length).toFixed(2);
productStatistics.total = productStatistics.total.toFixed(2);
// console.log(productStatistics);
let birthday = moment("25/01/1994", "DD/MM/YYYY")
let date = new Dates(birthday);

console.log("TODAY --- > ",date.getToday());
console.log("YEARS --- > ",date.getAllYears());
console.log("DAYS --- > ",date.getAlldays());
console.log("HOURS --- > ",date.getDifferences('hours'));