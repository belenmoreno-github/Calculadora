const vaciar = () => {
document.getElementById("pantalla").value = "";
}

const info = () => {
    let num = document.getElementById("respuesta").innerHTML = respuesta;
    num.value = num.value * num.value;
    if (num.value < 5)
        respuesta = "hola"

    }

const cuadrado = () => {
let num = document.getElementById("pantalla");
num.value = num.value * num.value;
}

const cubo = () => {
    let num = document.getElementById("pantalla");
    num.value = num.value * num.value * num.value;
  }

const Mod = () => {
let num = document.getElementById("pantalla");
if ("-" in num.value)
    num.value = - num.value;
else
    num.value = num.value;
}

const n = () => {
let num = document.getElementById("pantalla");
num.value = num.value * num.value;
}

const suma = () => {
let num = document.getElementById("pantalla");
num.value += num.value;
}

const resta = () => {
    let num = document.getElementById("pantalla");
    num.value += num.value;
    }

const multiplicacion = () => {
let num = document.getElementById("pantalla");
num.value = num.value * num.value * num.value;
}

const division = () => {
    let num = document.getElementById("pantalla");
    num.value = num.value * num.value * num.value;
    }

const igual = () => {
let num = document.getElementById("pantalla");
num.value = num.value * num.value * num.value;
}

const sumatorio = () => {
let num = document.getElementById("pantalla");
num.value = num.value * num.value * num.value;
}

const ordenar = () => {
let num = document.getElementById("pantalla");
num.value = num.value * num.value * num.value;
}

const revertir = () => {
let num = document.getElementById("pantalla");
num.value = num.value * num.value * num.value;
}

const quitar = () => {
let num = document.getElementById("pantalla");
num.value = num.value * num.value * num.value;
}
