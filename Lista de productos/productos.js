// Lista inicial con 10 objetos de muestra
let reposteria = [{ 
  id: 1, 
  nombre: "Pastel de chocolate", 
  imagen: "",
  precio: 300, 
  descripcion: "",
  disponible: true 
},
{ 
  id: 2, 
  nombre: "Pastel de chocolate", 
  imagen: "",
  precio: 300, 
  descripcion: "",
  disponible: true 
},
{ 
  id: 3, 
  nombre: "Pastel de chocolate", 
  imagen: "",
  precio: 300, 
  descripcion: "",
  disponible: true 
},
{ 
  id: 4, 
  nombre: "Pastel de chocolate", 
  imagen: "",
  precio: 300, 
  descripcion: "",
  disponible: true 
},
{ 
  id: 5, 
  nombre: "Pastel de chocolate", 
  imagen: "",
  precio: 300, 
  descripcion: "",
  disponible: true 
},
{ 
  id: 6, 
  nombre: "Pastel de chocolate", 
  imagen: "",
  precio: 300, 
  descripcion: "",
  disponible: true 
},
{ 
  id: 7, 
  nombre: "Pastel de chocolate", 
  imagen: "",
  precio: 300, 
  descripcion: "",
  disponible: true 
},
{ 
  id: 8, 
  nombre: "Pastel de chocolate", 
  imagen: "",
  precio: 300, 
  descripcion: "",
  disponible: true 
},
{ 
  id: 9, 
  nombre: "Pastel de chocolate", 
  imagen: "",
  precio: 300, 
  descripcion: "",
  disponible: true 
},
{ 
  id: 10, 
  nombre: "Pastel de chocolate", 
  imagen: "",
  precio: 300, 
  descripcion: "",
  disponible: true 
},

];

// Función para mostrar la lista en formato JSON
function mostrarLista() {
    console.log(JSON.stringify(reposteria, null, 2));
}

// Función para agregar un nuevo producto
function agregarProducto(producto) {
    reposteria.push(producto);
    console.log(`Producto agregado: ${producto.nombre}`);
}

// Función para modificar un producto por ID
function modificarProducto(id, nuevosDatos) {
    let index = reposteria.findIndex(p => p.id === id);
    if (index !== -1) {
        reposteria[index] = { ...reposteria[index], ...nuevosDatos };
        console.log(`Producto con ID ${id} modificado.`);
    } else {
        console.log(`Producto con ID ${id} no encontrado.`);
    }
}

// Función para eliminar un producto por ID
function eliminarProducto(id) {
    let index = reposteria.findIndex(p => p.id === id);
    if (index !== -1) {
        console.log(`Producto eliminado: ${reposteria[index].nombre}`);
        reposteria.splice(index, 1);
    } else {
        console.log(`Producto con ID ${id} no encontrado.`);
    }
}

// Función para borrar toda la lista
function borrarLista() {
    reposteria = [];
    console.log("Lista de productos eliminada.");
}

// ------- Pruebas de ejemplo -------

// Mostrar lista inicial
mostrarLista();

// Agregar un nuevo producto
agregarProducto({ id: 11, nombre: "Macarons", precio: 150, disponible: true });
mostrarLista();

// Modificar producto con ID 3
modificarProducto(3, { nombre: "Tarta de manzana", precio: 260 });
mostrarLista();

// Eliminar producto con ID 5
eliminarProducto(5);
mostrarLista();

// Borrar toda la lista
borrarLista();
mostrarLista();
