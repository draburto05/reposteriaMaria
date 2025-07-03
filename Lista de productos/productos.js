const mainContainer = document.querySelector(".container");

// Lista inicial con 10 objetos de muestra
let productosReposteria = [
  { id: 1, nombre: "Pastel de chocolate", imagen: "", precio: 300, descripcion: "Delicioso pastel de chocolate", disponible: true },
  { id: 2, nombre: "Cheesecake", imagen: "", precio: 250, descripcion: "Clásico cheesecake", disponible: true },
  { id: 3, nombre: "Tarta de manzana", imagen: "", precio: 260, descripcion: "Tarta fresca de manzana", disponible: true },
  { id: 4, nombre: "Cupcakes", imagen: "", precio: 120, descripcion: "Coloridos cupcakes", disponible: true },
  { id: 5, nombre: "Brownies", imagen: "", precio: 150, descripcion: "Brownies húmedos", disponible: true },
  { id: 6, nombre: "Galletas", imagen: "", precio: 80, descripcion: "Galletas variadas", disponible: true },
  { id: 7, nombre: "Eclairs", imagen: "", precio: 200, descripcion: "Eclairs rellenos", disponible: true },
  { id: 8, nombre: "Donas", imagen: "", precio: 90, descripcion: "Donas glaseadas", disponible: true },
  { id: 9, nombre: "Macarons", imagen: "", precio: 220, descripcion: "Macarons surtidos", disponible: true },
  { id: 10, nombre: "Panqué de limón", imagen: "", precio: 180, descripcion: "Panqué fresco de limón", disponible: true },
];

// Mostrar lista en consola
function mostrarLista() {
  console.log(JSON.stringify(productosReposteria, null, 2));
}

// Agregar producto
function agregarProducto(producto) {
  productosReposteria.push(producto);
  console.log(`Producto agregado: ${producto.nombre}`);
}

// Modificar producto
function modificarProducto(id, nuevosDatos) {
  let index = productosReposteria.findIndex(p => p.id === id);
  if (index !== -1) {
    productosReposteria[index] = { ...productosReposteria[index], ...nuevosDatos };
    console.log(`Producto con ID ${id} modificado.`);
  } else {
    console.log(`Producto con ID ${id} no encontrado.`);
  }
}

// Eliminar producto
function eliminarProducto(id) {
  let index = productosReposteria.findIndex(p => p.id === id);
  if (index !== -1) {
    console.log(`Producto eliminado: ${productosReposteria[index].nombre}`);
    productosReposteria.splice(index, 1);
  } else {
    console.log(`Producto con ID ${id} no encontrado.`);
  }
}

// Borrar toda la lista
function borrarLista() {
  productosReposteria = [];
  console.log("Lista de productos eliminada.");
}

// Renderizar productos
const renderProductos = (producto) => {
  const cardProducto = `
    <div class="card m-2" style="width: 18rem;">
      <img src="${producto.imagen || 'https://via.placeholder.com/150'}" class="card-img-top" alt="${producto.descripcion || 'Imagen del producto'}">
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">$${producto.precio}</p>
        <p class="card-text">${producto.descripcion}</p>
        <a href="#" class="btn btn-primary">Agregar al carrito</a>
      </div>
    </div>
  `;
  mainContainer.insertAdjacentHTML("beforeend", cardProducto);
};

// ------- Pruebas -------

// Mostrar lista inicial
mostrarLista();

// Agregar un nuevo producto
agregarProducto({ id: 11, nombre: "Rosca de reyes", precio: 350, descripcion: "Tradicional rosca", disponible: true });

// Modificar producto con ID 3
modificarProducto(3, { nombre: "Tarta de frutos rojos", precio: 270 });

// Eliminar producto con ID 5
eliminarProducto(5);

// Mostrar lista después de cambios
mostrarLista();

// ✅ Renderizar todos los productos finales en HTML
productosReposteria.forEach(producto => {
  renderProductos(producto);
});




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


