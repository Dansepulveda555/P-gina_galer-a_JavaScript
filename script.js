document.addEventListener("DOMContentLoaded", function () {
    const mensaje = "¡Gracias por visitarnos! Estamos felices de que estés aquí.";
    document.getElementById("mensaje-bienvenida").textContent = mensaje;
});

document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const opcion = document.getElementById("opcion").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (nombre === "" || email === "" || opcion === "" || mensaje === "") {
            alert("Por favor, completa todos los campos antes de enviar.");
            return false;
        }

        else {
            alert("¡Formulario enviado correctamente!");
        }

        event.target.form.submit();
        return true;

    });

function verificarTexto() {
    const mensaje = document.getElementById("mensaje").value.trim();
    const opcion = document.getElementById("opcion")

    if (mensaje.includes("compra")) {
        opcion.value = "compra";
    } else if (mensaje.includes("venta")) {
        opcion.value = "venta";
    }
    else
        opcion.value = "consulta";
}


