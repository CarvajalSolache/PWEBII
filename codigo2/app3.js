let numero1 = parseInt(prompt("Escribe el primer numero:"));
let numero2 = parseInt(prompt("Escribe el segundo numero:"));
let numero3 = parseInt(prompt("Escribe el tercer numero:"));

if (numero1 == numero2 && numero2 == numero3){
    console.log("Los tres numeros son iguales");
} else if ( numero1 == numero2 || numero2 == numero3 || numero3 == numero1){
    console.log("Hay dos numeros iguales");
} else{
    if (numero1 > numero2 && numero1 > numero3){
        console.log("El primer numero (" + numero1 + ") es mayor");
    } else if (numero2 > numero1 && numero2 > numero3){
        console.log("El segundo numero (" + numero2 +  ") es mayor");
    }     if (numero3 > numero2 && numero3 > numero1){
        console.log("El tercer numero (" + numero3 + ") es mayor");
    }
}