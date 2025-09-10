const frutas = [];
while (true){
    var answer = prompt("Quieres agregar algo al carrito de compras? yes / no");
    answer.toLowerCase();
    if (answer == "no"){
        alert("Comprase estas frutas: " + frutas);
        for (let fruta of frutas){
            console.log(fruta);
        }
        break
    } else if (answer == "yes"){
        frutas.push(prompt("Que fruta quieres agregar?"));
    } else {
        alert("Opción no valida, yes / no son las dos opciones validas.")
    }
}