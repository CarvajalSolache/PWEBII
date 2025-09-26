var productos =[
    {nombre: 'camisa', precio: 300},
    {nombre: 'pantalon', precio: 500},
    {nombre: 'zapatos', precio: 400},
    {nombre:'sombrero', precio: 200}
];
var productos_comprados = [];
// Función para mostrar el menú de productos
function mostrarMenu() {
    var menu = "Seleccione un producto para agregar al carrito:\n";
    var indice = 1;
    for (producto of productos) {
        menu += indice++ + ". " + producto.nombre + " - $" + producto.precio + "\n";
    }
    menu += (productos.length + 1) + ". Ver Carrito y Total\n";
    menu += (productos.length + 2) + ". Eliminar Producto\n";
    menu += (productos.length + 3) + ". Salir\n";
    return menu;
}

//Función para agregar al carrito
function addProducto(index){
    productos_comprados.push(productos[index]);
}
// funcion para mostrar el carrito actual del usuario
function mostrarCarrito(){
    var total = 0;
    var str_productos = "";
    let indice = 1;
    for (producto of productos_comprados){
        str_productos += indice++ +".- " + producto.nombre + "(" + producto.precio + ")" + '\n';
        total += producto.precio;
    }
    return str_productos + "Precio Total: $" + total;
}
// funcion que realiza los comandos de admin
function ModificarInventario(accion){
    switch (accion){
        case "1": //Agregar producto a inventario
            var producto = prompt("Escribe el producto a agregar junto al precio, separados con coma.");
            var productoyprecio = producto.split(",");
            productos.push({nombre : productoyprecio[0], precio : parseInt(productoyprecio[1])});
            break
        case "2": // cambiar el precio de producto ya en inventario
            var producto = prompt("Escribe el producto a modificar junto al precio, separados con coma.");
            var productoyprecio = producto.split(",");
            for (produc of productos){
                if (produc.nombre.toLowerCase() == productoyprecio[0].toLowerCase()){
                    produc.precio = parseInt(productoyprecio[1]);
                }
            }
            break
        case "3": // mostrar productos y precio
            alert(mostrarMenuAdmin());
            break
    }
}
// mostrar menu para el admin
function mostrarMenuAdmin(){
    var indice = 1
    var menu = "Lista Prodcutos: \n"
    for (producto of productos) {
        menu += indice++ + ". " + producto.nombre + " - $" + producto.precio + "\n";
    }
    return menu;
}
// funcion para que el usuario elimine productos de su carrito
function eliminarProductoDelCarrito() {
    let opcion = prompt(mostrarCarrito() + "\n\nEscribe el número del producto que quieres eliminar, o 0 para cancelar:");
    opcion = parseInt(opcion);
    if (opcion === 0) {
        alert("Cancelado.");
        return;
    }
    if (opcion > 0 && opcion <= productos_comprados.length) {
        productos_comprados.splice(opcion - 1, 1);
        alert("Producto eliminado del carrito.");
    } else { // si opcion < 0
        alert("Opción inválida.");
    }
}
while (true){
    let menu_tipo = prompt("Seleccione un menú a acceder:\n 1.- Menu_Usuario \n 2.- Menu_Admin \n 3.- Salir Definitivamente");
    if (menu_tipo == "1") {
        while (true) {
            let opcion = prompt(mostrarMenu());
            opcion = parseInt(opcion); 
            if (opcion >= 1 && opcion <= productos.length) {
                addProducto(opcion - 1);
            } else if (opcion == productos.length + 1) {
                console.log(productos_comprados);
                alert(mostrarCarrito());
            } else if (opcion == productos.length + 2) {
                eliminarProductoDelCarrito(); 
            } else if (opcion == productos.length + 3){
                console.log(productos_comprados);
                break // salir de menu usuario
            } else {
                alert("Opción no válida.");
            }
        }
    } else if(menu_tipo == "3"){
        break
    } else if (menu_tipo == "2"){
        let accion = "0";
        while (accion != "4"){
            accion = prompt("Bienvendio al MenuAdmin, Presiona: \n 1.- Para agregar articulos. \n 2.- Cambiar Precio de Producto \n 3.- Mostrar Productos \n 4.- Salir MenuAdmin");
            ModificarInventario(accion);
        }
    }
}