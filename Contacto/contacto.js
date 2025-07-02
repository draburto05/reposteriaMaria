


// Incluye el script de EmailJS en tu HTML antes de usarlo
// <script src="https://cdn.emailjs.com/dist/email.min.js"></script>
emailjs.init({ publicKey: "oiBY7QlJnAHEZrQkx" });
 // Reemplaza con tu User ID de EmailJS

document.querySelector('#contacto').addEventListener('submit', function(event) {
  event.preventDefault();

    const name = document.querySelector('#validationName').value;
    const lastName = document.querySelector('#validationLastName').value;
    const email  = document.querySelector('#validationEmail').value;
    const tel = document.querySelector('#validationPhone').value;
    const coment = document.querySelector('#AreaComent').value;

     const serviceID = "service_gj73m43"; // Reemplaza con tu Service ID
  const templateID = "template_zxuohuk";

  // Enviar los datos usando EmailJS
  emailjs.send('service_gj73m43', 'template_zxuohuk',{
    nombre: name,
    apellido:lastName, 
    email: email,
    tel: tel,
    mensaje: coment
  },this)
  .then(function(response) {
    alert('Correo enviado exitosamente.');
  }, function(error) {
    alert('Error al enviar el correo: ' + error.text);
  });
});

