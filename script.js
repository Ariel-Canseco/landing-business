function registrar() {
    let email = document.getElementById("email").value;

    if(email === "") {
        alert("Por favor ingresa un correo válido");
    } else {
        alert("Gracias por registrarte: " + email);
    }
}