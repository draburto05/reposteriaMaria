document.querySelector('#registro').addEventListener('submit', function(event) { //se manda a traer el formulario de contacto y se agrega el evento que se escuchara al dar clic en el boton
  event.preventDefault();
  
  //se obtienen los valores del formulario y el id de sus validaciones 
  const name = document.querySelector('#validationNombre').value.trim();  
  const lastName = document.querySelector('#validationApellido').value.trim();
  const email = document.querySelector('#validationEmailR').value.trim();
  const tel = document.querySelector('#validationPhoneR').value.trim();
  const password = document.querySelector('#validationPassword').value.trim();
  const passwordR = document.querySelector('#validationPasswordR').value.trim();



// Validaciones de inputs y de email con emailRegex 
  let isValid = true;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Crear elemento para alertas
  const alertContainer = document.getElementById('form-alert-container') || document.createElement('div'); // se inicializa la alerta del contenedor en caso de que haya alguna
  alertContainer.id = 'form-alert-container';
  alertContainer.style.position = 'fixed';
  alertContainer.style.top = '100px';
  alertContainer.style.right = '20px';  
  alertContainer.style.zIndex = '1000';
  document.body.appendChild(alertContainer); //se asigna como hijo de body a el alertcontainer
  
  // se limpian las alertas del formulario
  alertContainer.innerHTML = '';
  
  // Validar name si esta vacio se pide un name
  if (name === '') {
    showBootstrapAlert( 'Por favor ingresa tu nombre', 'danger', );
    isValid = false;
  }
  
  // Validar apellido si es vacio pide un apellido
  if (lastName === '') {
    showBootstrapAlert('Por favor ingresa tu apellido', 'danger');
    isValid = false;
  }
  
  // Validar email si es vacio pedir ingresar un correo si no hay una estructura valida con el regex pedir un correo valido
  if (email === '') {
    showBootstrapAlert('Por favor ingresa tu correo electrónico', 'danger');
    isValid = false;
  } else if (!emailRegex.test(email)) {
    showBootstrapAlert('Por favor ingresa un correo electrónico válido', 'danger');
    isValid = false;
  }
  
  // Validar teléfono si el telefono es vacio pedir el numero si hay un caracter que no sea numero se pide que el telefono tenga numeros
  if (tel === '') {
    showBootstrapAlert('Por favor ingresa tu número de teléfono', 'danger');
    isValid = false;
  } else if (!/^[0-9]+$/.test(tel)) {
    showBootstrapAlert('El teléfono solo debe contener números', 'danger');
    isValid = false;
  }

   // Validar password, si el password es vacio pedir el numero si hay un caracter que no sea numero se pide que el password tenga numeros
  if (password === '') {
    showBootstrapAlert('Por favor ingresa tu número de teléfono', 'danger');
    isValid = false;
  } 

  if (passwordR === '') {
    showBootstrapAlert('Por favor ingresa tu número de teléfono', 'danger');
    isValid = false;
  }

  
// Función para mostrar alertas de Bootstrap
  function showBootstrapAlert(message, type) {
    const alertDiv = document.createElement('div');
    

    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.role = 'alert';
    alertDiv.innerHTML = `
      ${message}
      
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    
    alertContainer.appendChild(alertDiv);
    
    new bootstrap.Alert(alertDiv);
    
    // Cerrar automáticamente después de 5 segundos
    setTimeout(() => {
      const bsAlert = bootstrap.Alert.getOrCreateInstance(alertDiv);
      bsAlert.close();
    }, 5000);
  }


});

window.addEventListener('DOMContentLoaded', includeHTML);