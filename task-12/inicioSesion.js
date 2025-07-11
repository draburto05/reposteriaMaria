/**
 * Supongo que ya hay un usario registado eje
 */
const usuarioPrueba = {
    username: "Marcos21",
    password: "123456"
};

//si no existe guarda el arreglo y conviertlo a json
if(!localStorage.getItem("usuarios")){
    localStorage.setItem("usuarios", JSON.stringify([usuarioPrueba]));
}

/*
Acceder al DOOM
*/


const form = document.getElementById("loginForm");
const alerta = document.getElementById("alerta");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const userNameInput = document.getElementById("username").value.trim();
    const passwordInput = document.getElementById("password").value.trim();

    //validación
    if (!userNameInput || !passwordInput){
        mostrarError("Completa todos los campos, pls");
        return;
    }

    //recuperamos el localStorage 
    const usuarios = JSON.parse(localStorage.getItem("usuarios"));
    
    //buscamos que no coincida con find 
    const usuarioValido = usuarios.find(
        (u) => u.username === userNameInput && u.password === passwordInput
    );

    if(usuarioValido){
        localStorage.setItem("usuarioActivo", JSON.stringify(usuarioValido));
        alerta.classList.remove("alert-danger");
        alerta.classList.add("alert-success");
        alerta.textContent = `Bienvenido, ${usuarioValido.username}`;
        alerta.classList.remove("d-none");

        setTimeout(() => {
            location.href = "inicioSesion.html";
        }, 2000); //espera 2 s
    }else{
        mostrarError("Datos inválidos");  
    }
});

function mostrarError(mensaje) {
  alerta.textContent = mensaje;
  alerta.classList.remove("d-none");
  alerta.classList.remove("alert-success");
  alerta.classList.add("alert-danger");
}

