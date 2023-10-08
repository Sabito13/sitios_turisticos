/* estilos.css */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

header {
    background-color: #333;
    color: #fff;
    padding: 10px 0;
    text-align: center;
}

nav ul {
    list-style: none;
    padding: 0;
}

nav li {
    display: inline;
    margin-right: 20px;
}
// script.js

// Manejar el envío del formulario de contacto
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Obtener los valores de los campos
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var mensaje = document.getElementById("mensaje").value;

    // Aquí puedes realizar alguna acción con los datos del formulario, como enviarlos a un servidor o mostrar un mensaje de confirmación
    alert("Gracias por tu mensaje, " + nombre + ". Nos pondremos en contacto contigo en breve.");
});

