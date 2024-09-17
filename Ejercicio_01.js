let peso = parseFloat(prompt("Ingrese su peso(kg):"));
let altura = parseFloat(prompt("Ingrese su altura(m):"));
let imc = (peso/(altura*altura)).toFixed(2);
let categoria;

if(imc<18.5){
    categoria = "Bajo Peso";
}else if(imc>=18.5 && imc <24.9){
    categoria="Normal";
}else if(imc>=25 && imc <29.9){
    categoria="Sobrepeso";
}else{  
    categoria="Obesidad";
}
alert(`Tu IMC es: ${imc} \nCategoria: ${categoria}`);