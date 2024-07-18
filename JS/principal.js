//*1. PERSONAS-A
//Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea estos datos y reporte al final: el porcentaje de mujeres procesadas y si hay más hombres, más mujeres o ambos por igual.
//Se tienen las siguientes personas: Luisa, Ana, José, Carmen, Rosa, José, María, Luz, Rafael, Liz, Marcos y Leo; la salida requerida presenta el siguiente formato:
//Porcentaje de mujeres procesadas: 58.33%
//Hay más mujeres

import Cl_mayor from "./Cl_mayor.js";
import Cl_personas from "./Cl_personas.js";

let personas1 = new Cl_personas ("Luisa", "F");
let personas2 = new Cl_personas ("Ana", "F");
let personas3 = new Cl_personas ("José", "M");
let personas4 = new Cl_personas ("Carmen", "F");
let personas5 = new Cl_personas ("Rosa", "F");
let personas6 = new Cl_personas ("José", "M");
let personas7 = new Cl_personas ("María,", "F");
let personas8 = new Cl_personas ("Luz", "F");
let personas9 = new Cl_personas ("Rafael", "M");
let personas10 = new Cl_personas ("Liz", "F");
let personas11 = new Cl_personas ("Marcos", "M");
let personas12 = new Cl_personas ("Leo", "M");

// instaciar el procesar
let mayor = new Cl_mayor ();
mayor.procesarPersonas (personas1);
mayor.procesarPersonas (personas2);
mayor.procesarPersonas (personas3);
mayor.procesarPersonas (personas4);
mayor.procesarPersonas (personas5);
mayor.procesarPersonas (personas6);
mayor.procesarPersonas (personas7);
mayor.procesarPersonas (personas8);
mayor.procesarPersonas (personas9);
mayor.procesarPersonas (personas10);
mayor.procesarPersonas (personas11);
mayor.procesarPersonas (personas12);

//salida solicitada

let salida = document.getElementById ("salida");


salida.innerHTML+=" <br> Porcentaje de mujeres procesadas: "+mayor.CalPorcentajeMujeres().toFixed(2) +"%";
salida.innerHTML+=" <br> "+mayor.mayorgenero();