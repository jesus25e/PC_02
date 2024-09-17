/*
 Escribe un programa que pregunte al usuario el total de su compra y si tiene un código
 de descuento. Si el código es "DESCUENTO10", se aplicará un 10% de descuento. Si el
 código es "DESCUENTO20", se aplicará un 20% de descuento. Muestra el total después
 de aplicar el descuento, si corresponde, y un mensaje si el código no es válido. (10p)
*/

let compra = prompt("Ingrese el total de su compra: ");
let opciones = ['DESCUENTO10','DESCUENTO20'];
let descuento=prompt("Ingrese su codigo de descuento: ");
let total;
switch(descuento){
    case 'DESCUENTO10':
        descuento=0.10;
        total = compra-(compra*descuento);
        alert(`CODIGO "DESCUENTO10" VALIDO :D \nTotal: ${total}`);
        break;
    case 'DESCUENTO20':
        descuento= 0.20;
        total = compra-(compra*descuento);
        alert(`CODIGO "DESCUENTO20" VALIDO :D \nTotal: ${total}`);
        break;
    default:
        total = compra;
        alert(`CODIGO "${descuento}" INVALIDO :c \nTotal: ${total}`);
        
}
