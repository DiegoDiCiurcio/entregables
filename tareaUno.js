let welcome = prompt("Bienvenido! Porfavor, ingrese su usuario: ")
if (welcome != "") {
    alert("Hola de vuelta, " + welcome);
}
else if (welcome == "") {
    alert("Usuario incorrecto, ingrese nuevamente:");
    welcome = prompt("Ingrese nuevamente su usuario:")
    if (welcome != "") {
        alert("Hola de vuelta, " + welcome);
    }
}
else {
    alert("Usuario no resgistrado.")
}
let password = prompt("Ingrese a continuacion el codigo '12345'; ")
if (password === "12345") {
    alert("Has ingresado correctamente.")
}
else if (password !== "12345") {
    alert("Contraseña incorrecta");
    password = prompt("Ingrese nuevamente su contraseña:");

    if (password === "12345") {
        alert("Has ingresado correctamente.")
    }
    else if (password !== "12345") {
        alert("Contraseña incorrecta");
        password = prompt("Ingrese nuevamente su contraseña:");
    
    if (password === "12345") {
        alert("Has ingresado correctamente.")
    }
}
}

else {
    prompt("Contraseña incorrecta, reinicie la pagina e intente nuevamente.")
}