let num1 = 0;
let num2 = 1;
let r;
let limite = parseInt(prompt("Ingrese el limite para la sucesión"))

while(num1<=limite){
    r = num1+num2;
    console.log(num1);
    
    num1=num2;
    num2=r;
}