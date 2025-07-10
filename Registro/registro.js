document.querySelector('#registro').addEventListener('submit', function(event) { //se manda a traer el formulario de contacto y se agrega el evento que se escuchara al dar clic en el boton
  event.preventDefault();
  
  //se obtienen los valores del formulario y el id de susu validaciones 
  const name = document.querySelector('#validationNombre').value.trim();  
  const lastName = document.querySelector('#validationApellido').value.trim();
  const email = document.querySelector('#validationEmailR').value.trim();
  const tel = document.querySelector('#validationPhoneR').value.trim();
  const password = document.querySelector('#validationPassword').value.trim();
  const passwordR = document.querySelector('#validationPasswordR').value.trim();
});