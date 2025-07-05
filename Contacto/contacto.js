emailjs.init({ publicKey: "oiBY7QlJnAHEZrQkx" });

document.querySelector('#contacto').addEventListener('submit', function(event) {
  event.preventDefault();

    const name = document.querySelector('#validationName').value;
    const lastName = document.querySelector('#validationLastName').value;
    const email  = document.querySelector('#validationEmail').value;
    const tel = document.querySelector('#validationPhone').value;
    const coment = document.querySelector('#AreaComent').value;

     const serviceID = "service_gj73m43"; 
  const templateID = "template_zxuohuk";

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

//Aqui empieza el script para incluir el header y el footer directamente en el html de la pagina contacto.
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