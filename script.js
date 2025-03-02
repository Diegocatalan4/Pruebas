function validarFormulario(event) {
    event.preventDefault(); 
    
    let usuario = document.getElementById("usuario").value.trim();
    let contraseña = document.getElementById("contraseña").value.trim();

    if (usuario === "" || contraseña === "") {
        mostrarDialogo("Por favor, complete todos los campos.");
        return;
    }

    mostrarDialogo("Inicio de sesión exitoso.");
}

function mostrarDialogo(mensaje) {
    let dialogo = document.getElementById("dialogo");
    let fondo = document.getElementById("fondo");
    let btnAceptar = document.getElementById("btnAceptar");

    document.getElementById("mensaje-dialogo").innerText = mensaje;
    dialogo.style.display = "block";
    fondo.style.display = "block";
    btnAceptar.style.display = "block"; 
}

function cerrarDialogo() {
    let dialogo = document.getElementById("dialogo");
    let fondo = document.getElementById("fondo");
    let btnAceptar = document.getElementById("btnAceptar");

    dialogo.style.display = "none";
    fondo.style.display = "none";
    btnAceptar.style.display = "none"; 
}


document.getElementById("btnAceptar").addEventListener("click", cerrarDialogo);
