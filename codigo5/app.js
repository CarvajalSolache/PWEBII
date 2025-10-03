let tareas = [];

function mostrarMenu(){
    return parseInt(prompt(`
        Elige una opción.
        Opciones Disponibles:
        1.- Agregar Tarea.
        2.- Mostrar La Tareas.
        3.- Marcar Tarea Completada.
        4.- Eliminar Tarea.
        5.- Salir.
        `));
}

function agregarTareas(){
    let nombre = prompt("Introduce el nombre de la tarea.");
    if (nombre){
        let tarea = {
            nombre: nombre,
            completado: false
        };
        tareas.push(tarea);
        alert("Tarea agregada exitosamente.")
    } else {
        alert("El nombre de la tarea no puede estar vacio.")
    }
}

function verTareas(){
    if(tareas.length === 0){
        alert("No hay tareas en la lista.")
    } else {
        let mensaje = "Lista de Tareas:\n";
        tareas.forEach((tarea, index) => {
            mensaje += `${index + 1}.- ${tarea.nombre} [${tarea.completado ? "Completada" : "Pendiente"}]\n`;
        });
        alert(mensaje);
    }
}

function marcarCompleta(){
    let tarea = parseInt(prompt("Que numero de tarea has completado."));
    if (isNaN(tarea) || tarea > tareas.length || tarea < 0){
        alert("No existe ninguna tarea con ese numero.");
    } else {
        tareas[tarea - 1].completado =  true;
        alert(`La tarea: ${tareas[tarea - 1].nombre}, se ha marcado como completa.`);
    }
}

function eliminarTarea(){
    let tarea = parseInt(prompt("Que numero de tarea quieres eliminar."));
    if (isNaN(tarea) || tarea > tareas.length || tarea < 0){
        alert("No existe ninguna tarea con ese numero.");
    } else {
        tareas.splice(tarea - 1, 1);
        alert(`La tarea ha sido eliminada.`);
    }
}

function iniciarPrograma(){
    let continuar = true;
    while (continuar){
        let opcion = mostrarMenu();
        switch(opcion){
            case 1:
                agregarTareas();
                break;
            case 2:
                verTareas();
                break;
            case 3:
                marcarCompleta();
                break;
            case 4:
                eliminarTarea();
                break;
            case 5:
                alert("Saliendo Del Programa.")
                continuar = false;
                break;
            default:
                alert("Opcion no valida.")
        };
    }
}

iniciarPrograma();