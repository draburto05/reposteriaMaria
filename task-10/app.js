//ItemsController

class ItemsController {
  constructor(currentId = 0) {
    this.items = [];
    this.currentId = currentId;
  }

  addItem(name, flavour, description, price, imageUrl) {
    const newItem = {
      id: ++this.currentId,
      name,
      flavour,
      description,
      price: parseFloat(price),
      imageUrl,
    };
    this.items.push(newItem);
    localStorage.setItem("items", JSON.stringify(this.items));
  }
}

/// ------------------------------------------------------------


//an instance of the ItemsController class is created; save the elements
const itemsController = new ItemsController(0);

//Searches HTML for the form named newItemForm and saves it in a variable.
const newItemForm = document.querySelector('#newItemForm');

// When the form is submitted, execute this function
newItemForm.addEventListener('submit', (event) => {
    // avoid reloading the page
    event.preventDefault();

    const newItemName = document.querySelector('#newItemName');
    const newItemFlavour = document.querySelector('#newItemFlavour');
    const newItemDescription = document.querySelector('#newItemDescription');
    const newItemPrice = document.querySelector('#newItemPrice');
    const newItemImageUrl = document.querySelector('#newItemImageUrl');    

    // Get the values of the inputs
    const name = newItemName.value;
    const flavour = newItemFlavour.value;
    const description = newItemDescription.value;
    const price = newItemPrice.value;
    const imageUrl = newItemImageUrl.value;

  
   
    // Validation
    const campos = [
    { valor: name, nombre: 'El nombre' },
    { valor: flavour, nombre: 'El sabor' },
    { valor: description, nombre: 'La descripción' },
    { valor: price, nombre: 'El precio' },
    { valor: imageUrl, nombre: 'La URL de la imagen' }
    ];

    const errores = campos
    .filter(campo => campo.valor.trim() === '')
    .map(campo => `${campo.nombre} es obligatorio.`);

    if (imageUrl.trim() && !imageUrl.match(/\.(jpeg|jpg|gif|png)$/i)) {
        errores.push('La URL debe terminar en .jpg, .jpeg, .png o .gif');
    }
    if (errores.length > 0) {
        mostrarAlerta(errores);
    return;
    }



    // Add the item to the ItemsController
    itemsController.addItem(name, flavour, description, price, imageUrl);

    // Clear the form
    newItemForm.reset();
    mostrarAlerta(["Producto guardado con éxito ✅"], "success");
});

function mostrarAlerta(mensajes, tipo = "danger") {
  const alertContainer = document.getElementById("alertContainer");
  alertContainer.innerHTML = `
    <div class="alert alert-${tipo} alert-dismissible fade show mt-4" role="alert">
      <ul class="mb-0">
        ${mensajes.map((msg) => `<li>${msg}</li>`).join("")}
      </ul>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Cerrar"
      ></button>
    </div>
  `;
}