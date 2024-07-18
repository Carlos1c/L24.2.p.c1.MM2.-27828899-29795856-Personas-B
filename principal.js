/*Sea el nombre y la edad de varias personas. Se necesita un programa que lea estos datos y
* reporte al final la edad promedio y la edad mayor entre las mujeres.
* Se tienen las siguientes personas: Luis (15), Ana (19), José (21), Carmen (17), Rosa (18),
* José (22), María (17), Luz (19), Rafael (23), Liz (15), Marcos (20) y Leo (16); la salida requerida
* presenta el siguiente formato:
* Edad promedio: 18.50
* Edad mayor entre las mujeres: 19
*/

import CL_personas from "./CL_personas.js";
import CL_progpersonas from "./CL_progpersonas.js";

let pers1 = new CL_personas("Luis", 15, "M");
let pers2 = new CL_personas("Ana", 19, "F");
let pers3 = new CL_personas("José", 21, "M");
let pers4 = new CL_personas("Carmen", 17, "F");
let pers5 = new CL_personas("Rosa", 18, "F");
let pers6 = new CL_personas("José", 22, "M");
let pers7 = new CL_personas("Maria", 17, "F");
let pers8 = new CL_personas("Luz", 19, "F");
let pers9 = new CL_personas("Rafael", 23, "M");
let pers10 = new CL_personas("Liz", 15, "F");
let pers11 = new CL_personas("Marcos", 20, "M");
let pers12 = new CL_personas("Leo", 16, "M");
let progpersonas = new CL_progpersonas();

progpersonas.procesarPersonas(pers1);
progpersonas.procesarPersonas(pers2);
progpersonas.procesarPersonas(pers3);
progpersonas.procesarPersonas(pers4);
progpersonas.procesarPersonas(pers5);
progpersonas.procesarPersonas(pers6);
progpersonas.procesarPersonas(pers7);
progpersonas.procesarPersonas(pers8);
progpersonas.procesarPersonas(pers9);
progpersonas.procesarPersonas(pers10);
progpersonas.procesarPersonas(pers11);
progpersonas.procesarPersonas(pers12);

let salida = document.getElementById("salida");
salida.innerHTML = `
<br> Edad promedio: ${progpersonas.edadPromedio().toFixed(2)}%
<br> Edad mayor entre las mujeres: ${progpersonas.edadMayMujer()}
`