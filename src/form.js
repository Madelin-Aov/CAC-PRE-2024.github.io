
let form = document.getElementById("form-email");
let mailWindow = document.getElementById("correo");

form.addEventListener("submit", onsubmit);

function onsubmit(event) {
    event.preventDefault()
    let mailto = "mailto:madelintania@gmail.com"
    let asunto = form.elements["asunto"].value;
    let message = form.elements["mensaje"].value;
    mailWindow.setAttribute("href", `${mailto}?subject=${asunto}&body=${message}`)
    mailWindow.click()

}




/* 1 - crear funcion para validar cada campo, una vez hecha la validación
 con resultado true o false.
2 - Utilizar esa funcion para determinar el envio del formulario */