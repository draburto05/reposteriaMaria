const mainContainer = document.querySelector(".container");

// Lista inicial con 10 objetos de muestra
let productosReposteria = [{ 
  id: 1, 
  nombre: "Pastel de chocolate", 
  imagen: "Productos/Pastel_de_chocolate.jpg", 
  precio: 300, descripcion: "Delicioso pastel de chocolate", 
  disponible: true 
},
{ 
  id: 2, 
  nombre: "Cheesecake", 
  imagen: "Productos/cheesecake.webp", 
  precio: 250, 
  descripcion: "Clásico cheesecake", 
  disponible: true 
},
{ 
  id: 3, 
  nombre: "Tarta de manzana", 
  imagen: "Productos/tarta de manzana.jpg", 
  precio: 260, 
  descripcion: "Tarta fresca de manzana", 
  disponible: true 
},
{ 
  id: 4, 
  nombre: "Cupcakes", 
  imagen: "Productos/cupcakes.webp", 
  precio: 120, 
  descripcion: "Coloridos cupcakes", 
  disponible: true 
},
{ 
  id: 5, 
  nombre: "Brownies", 
  imagen: "Productos/brownies.webp", 
  precio: 150, 
  descripcion: "Brownies húmedos", 
  disponible: true 
},
{ 
  id: 6, 
  nombre: "Galletas", 
  imagen: "Productos/galletas.webp", 
  precio: 80, 
  descripcion: "Galletas variadas", 
  disponible: true 
},
{ 
  id: 7, 
  nombre: "Eclairs", 
  imagen: "Productos/eclairs.jpg", 
  precio: 200, 
  descripcion: "Eclairs rellenos", 
  disponible: true 
},
{ 
  id: 8, 
  nombre: "Donas", 
  imagen: "Productos/donas.webp", 
  precio: 90, 
  descripcion: "Donas glaseadas", 
  disponible: true 
},
{ 
  id: 9, 
  nombre: "Macarons", 
  imagen: "Productos/macarons.jpg", 
  precio: 220, 
  descripcion: "Macarons surtidos", 
  disponible: true 
},
{ 
  id: 10, 
  nombre: "Panqué de limón", 
  imagen: "Productos/panque de limon.webp", 
  precio: 180, 
  descripcion: "Panqué fresco de limón", 
  disponible: true 
},];


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


// Renderizado de los productos
const renderProductos = (producto) => {
  const cardProducto = `
    <div class="cartas m-2 tooltip-trigger" style="width: 18rem;">
    
      <img src="${producto.imagen}" class="card-img-top card-img tooltip-trigger" alt="${producto.descripcion || 'Imagen del producto'}">
      <h5 class="card-title">${producto.nombre}</h5>
      <div class="card-body tooltip-trigger">
        
        <p class="card-text">$${producto.precio}</p> <div class="tooltip-trigger"><p class="card-text tooltip-text">${producto.descripcion}</p></div>
    
      </div>
      
      <button class="add">+</button><button class="add">-</button>
        <a href="#"> <button class = "boton">Agregar al carrito</button></a>
        
      
    </div>
  `;
  mainContainer.insertAdjacentHTML("beforeend", cardProducto);
};


// ------- Pruebas -------

// Mostrar lista inicial
mostrarLista();

// Agregar un nuevo producto
agregarProducto({ id: 11, nombre: "Rosca de reyes", imagen: "Productos/rosca de reyes.webp", precio: 350, descripcion: "Tradicional rosca de reyes", disponible: true });

// Modificar producto con ID 3
modificarProducto(3, { nombre: "Tarta de frutos rojos", imagen: "Productos/tarta de frutos rojos.webp", precio: 270, descripcion: "Rica tarta de frutos rojos" });

// Eliminar producto con ID 5
eliminarProducto(5);

// Mostrar lista después de cambios
mostrarLista();


// ✅ Renderizar todos los productos finales en HTML
productosReposteria.forEach(producto => {
  renderProductos(producto);
});


// Borrar toda la lista
borrarLista();
mostrarLista();



//Añadiendo el header y el footer a la pagina productos
function includeHTML() {
  const elements = document.querySelectorAll('[data-include]');
  elements.forEach(async (el) => {
    const file = el.getAttribute('data-include');
    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error(`Error al cargar ${file}`);
      const html = await response.text();
      el.innerHTML = html;
    } catch (err) {
      el.innerHTML = `<p style="color:red;">${err.message}</p>`;
    }
  });
}

window.addEventListener('DOMContentLoaded', includeHTML);
