/*
 Verificación de Edad y Ingresos:
 Para ser elegible para un subsidio, debes tener al menos 18 años y tus ingresos mensuales
 deben estar entre 500€ y 2000€. Escribe un programa que pregunte al usuario su edad y sus
 ingresos mensuales y muestre por pantalla si el usuario es elegible para el subsidio o no. (10p)
*/

let edad = parseInt(prompt("Ingresa tu edad:"));
let ingresos = parseFloat(prompt("Ingrese sus ingresos"));

if (edad>=18 && ingresos>=500 && ingresos<=2000){
    console.log("Eres elegible para el subsidio");
    alert("Calificas para el subsidio");
}else{
    console.log("No eres apto para el subsidio");
    alert("No calificas para el subsidio")
}