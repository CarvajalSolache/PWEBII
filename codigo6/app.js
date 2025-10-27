const Jugador1 = "X"; 
const Jugador2 = "O";
let turnoActual = Jugador1; //Empezara el jugador X
let movimientos = 0; // cuando movimientos == 9, checa si hay empate

const combinacionesGanadoras = [ //todas las posibles combinaciones ganadores de las celdas de la tabla
  ["c1", "c2", "c3"],            //cada arreglo guardas los id de las combinaciones ganadoras
  ["c4", "c5", "c6"],
  ["c7", "c8", "c9"],
  ["c1", "c4", "c7"],
  ["c2", "c5", "c8"],
  ["c3", "c6", "c9"],
  ["c1", "c5", "c9"],
  ["c3", "c5", "c7"]
];
                                                //devueleve en un NodeList los elementos td, cada cuadro de la tabla.
const celdas = document.querySelectorAll("td"); //NodeList es parecido a un array.
const turnoMensaje = document.getElementById("turno");//guardamos el h2 que mostrara el turno actual o ganador
const botonReiniciar = document.getElementById("reiniciar");//guardamos el boton de reiniciar

function actualizarTurno() {//en el h2 de turno actual se muestre el str de turno actual
  turnoMensaje.innerHTML = `Turno de: <strong>${turnoActual}</strong>`;
}

function revisarGanador() {
  for (const combo of combinacionesGanadoras) { //combo == arreglo de 3 string con combinacionesGanadoras
    const a = document.getElementById(combo[0]).textContent;
    const b = document.getElementById(combo[1]).textContent;
    const c = document.getElementById(combo[2]).textContent;

    if (a !== "" && a === b && a === c) {
      return a; // Devuelve "X" o "O"
    }
  }
  return null; // Si no hay ganador
}

function manejarClick(event) {
  const celda = event.target;//guarda la celda en la que se hizo click
  if (celda.textContent !== "") return;//si ya hay un X o O en la celda no hace nada

  celda.textContent = turnoActual; //coloca el str de turno actual
  movimientos++;

  const ganador = revisarGanador();
  if (ganador) {
    turnoMensaje.innerHTML = `¡Ganó <strong>${ganador}</strong>!`;//se usa innerHTML ya que nos permite usar <strong>
    celdas.forEach(c => c.removeEventListener("click", manejarClick));//quitamos los EventListener de las celdas
    //no permitirmos seguir colocando valores en las celdas cuando se encuentra un ganador
    return;
  }

  if (movimientos === 9) {//si estamos en turno 9 y no hubo ganador, empate
    turnoMensaje.textContent = "¡Empate!";
    return;
  }

  turnoActual = turnoActual === Jugador1 ? Jugador2 : Jugador1; // if (X) -> 0 else X
  actualizarTurno();//actualizamos el h2 con el mensaje de turno actual
}

// Asignar listener a todas las celdas
celdas.forEach(celda => celda.addEventListener("click", manejarClick));

// Inicializar mensaje de turno
actualizarTurno();

// Botón de reinicio
botonReiniciar.addEventListener("click", function() {
  celdas.forEach(celda => celda.textContent = "");
  turnoActual = Jugador1;
  movimientos = 0;
  actualizarTurno();
  // Volver a activar el listener
  celdas.forEach(celda => celda.addEventListener("click", manejarClick));
});
