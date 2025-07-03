const mainContainer = document.querySelector(".container");


// Lista inicial con 10 objetos de muestra
const productosReposteria = [{ 
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
    console.log(JSON.stringify(productosReposteria, null, 2));
}

// Función para agregar un nuevo producto
function agregarProducto(producto) {
    productosReposteria.push(producto);
    console.log(`Producto agregado: ${producto.nombre}`);
}

// Función para modificar un producto por ID
function modificarProducto(id, nuevosDatos) {
    let index = productosReposteria.findIndex(p => p.id === id);
    if (index !== -1) {
        productosReposteria[index] = { ...productosReposteria[index], ...nuevosDatos };
        console.log(`Producto con ID ${id} modificado.`);
    } else {
        console.log(`Producto con ID ${id} no encontrado.`);
    }
}

// Función para eliminar un producto por ID
function eliminarProducto(id) {
    let index = productosReposteria.findIndex(p => p.id === id);
    if (index !== -1) {
        console.log(`Producto eliminado: ${productosReposteria[index].nombre}`);
        productosReposteria.splice(index, 1);
    } else {
        console.log(`Producto con ID ${id} no encontrado.`);
    }
}

// Función para borrar toda la lista
function borrarLista() {
    productosReposteria = [];
    console.log("Lista de productos eliminada.");
}


//Render de los productos (array de objetos)
const renderProductos = async (productObject) => {
  const data = await productObject;
  console.log(data);
  const cardProducto = `
  <div class="card" style="width: 18rem;">
  <img src="${data.imagen}" class="card-img-top" alt="${data.descripcion}">
  <div class="card-body">
    <h5 class="card-title">${data.nombre}</h5>
    <div class="tooltip">${data.descripcion}</div>

    <a href="#" class="btn btn-primary">Carrito</a>
  </div>
</div>
`;
mainContainer.insertAdjacentHTML("afterbegin", cardProducto)
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


