/*
 Lostramos del IVA en un país son los siguientes:
 Básico: 10%
 Reducido: 5%
 Superreducido: 2%
 Escribe un programa que pregunte al usuario el importe de una compra y el tipo de IVA
 aplicado (básico, reducido, superreducido) y muestre por pantalla el total con IVA incluido.
 (10p
*/

let importe= parseFloat(prompt("Ingrese el importe de la compra: "));
let opciones = ['basico','reducido','superreducido'];
let iva;

while(!opciones.includes(iva)){
    iva = prompt("Ingrese en tipo de IVA: \nBásico: 10% \nReducido: 5% \nSuperreducido: 2%");
    if(!opciones.includes(iva)){
        alert("Opcion no valida, Ingrese: basico, reducido, superreducido");
    }
}
switch(iva){
    case 'basico':
        iva = 0.10;
        break;
    case 'reducido':
        iva = 0.05;
        break;
    case 'superreducido':
        iva=0.02;
        break;
}

let total = importe + (importe * iva);
alert(`Iva: ${iva} \nEl Total es: ${total}`);