//declaración de variables 
let num = 0;
let num1 = 0;
let num2 = 0;
let solucion = 0; 
let operador = "";
let total = 0;
let i = 0;
let aux = 0;
let lista = [];

const vaciar = () => {
    document.getElementById("pantalla").value = "";
}

var rellenar_info = (numero) => {
    if (numero < 100){
        document.getElementById("info").innerHTML = "Info: El resultado es menor que 100";
        
    }else if (numero > 100 && numero < 200){
        document.getElementById("info").innerHTML = "Info: El resultado está entre 100 y 200";

    }else{
        document.getElementById("info").innerHTML = "Info: El resultado es superior a 200";    
    }
}

var result = (numero) => {
    document.getElementById("resultado").innerHTML = "Resultado:" +  numero;
}


// Operaciones unitarias

var cuadrado = () => {
    num = document.getElementById("pantalla").value;
    num = num * num;
    rellenar_info(num);
    result(num);
    vaciar();
    }

var cubo = () => {
    num = document.getElementById("pantalla").value;
    num = num * num * num;
    rellenar_info(num);
    result(num);
    vaciar();
  }

var mod = () => {
    num = document.getElementById("pantalla").value;
    if (num < 0){
      num = - num;
      rellenar_info(num);
      result(num);

    }else {
      num = num;
      rellenar_info(num);
      result(num);
    }     
}

var fact = () => {
    num = document.getElementById("pantalla").value;
    var total = 1; 
	for (i=1; i<=num; i++) {
		total = total * i;
    }
    rellenar_info(total);
    result(total);
}


//Operaciones binarias

var add = () => {
    num1 = document.getElementById("pantalla").value;
    vaciar();
    operador = "suma";  
    eq(num1);

}

var resta = () => {
    num1 = document.getElementById("pantalla").value;
    vaciar();
    operador = "resta";  
    eq(num1);
}

var mul = () => {
    num1 = document.getElementById("pantalla").value;
    vaciar();
    operador = "multiplicacion";  
    eq(num1);
    
}

var division = () => {
    num1 = document.getElementById("pantalla").value;
    vaciar();
    operador = "division";
    eq(num1);
}

var resto = () => {
    num1 = document.getElementById("pantalla").value;
    vaciar();
    operador = "resto";  
    eq(num1);
}

var potencia = () =>{
    num1 = document.getElementById("pantalla").value;
    vaciar();
    operador = "potencia";  
    eq(num1);
}

var eq = (solucion) => {
    if (operador == "suma"){
        num2 = document.getElementById("pantalla").value;
        solucion = (Number(num1) + Number(num2));
        result(solucion);
        rellenar_info(solucion);
        vaciar();
        
        
    } else if (operador == "resta"){
        num2 = document.getElementById("pantalla").value;
        solucion = (Number(num1) - Number(num2));
        result(solucion);
        rellenar_info(solucion);
        vaciar();

    
    }else if (operador == "multiplicacion"){
        num2 = document.getElementById("pantalla").value;
        solucion = (Number(num1) * Number(num2));
        result(solucion);
        rellenar_info(solucion);
        vaciar();

    }else if (operador == "division"){
        num2 = document.getElementById("pantalla").value;
        solucion = (Number(num1) / Number(num2));
        result(solucion);
        rellenar_info(solucion);
        vaciar();

    }else if (operador == "resto"){
        num2 = document.getElementById("pantalla").value;
        solucion = (Number(num1) % Number(num2));
        result(solucion);
        rellenar_info(solucion);
        vaciar();

    }else if (operador == "potencia"){
        num2 = document.getElementById("pantalla").value;
        solucion = (Number(num1) ** Number(num2));
        result(solucion);
        rellenar_info(solucion);
        vaciar();

    }
}


//Operaciones formato CSV

var coma = ",";
//var lista=[];

var sumatorio = () => {
    num = document.getElementById("pantalla").value;
    let lista = num.split(coma);
    let i = 0;
    let aux = 0;
    while (i < lista.length) {
        aux += +lista[i++];
        num = aux;
    }
    rellenar_info(num);
    result(num);
}


var ordenar = () => {
    num = document.getElementById("pantalla").value;
    let lista = num.split(coma);
    lista = lista.sort();
    rellenar_info(lista);
    result(lista);
    // no me va con dos digitos
}

var revertir = () => {
    num = document.getElementById("pantalla").value;
    let lista = num.split(coma);
    lista = lista.reverse();
    rellenar_info(lista);
    result(lista);
    
}

var quitar = () => {
    num = document.getElementById("pantalla").value;
    let lista = num.split(coma);
    lista = lista.pop();
    //console.log(lista);
    rellenar_info(lista);
    result(lista);
   //como ver la lista sin el elemento
}

//xq se me va actualizando cada numero que meto

var validar = () => {
    num = document.getElementById("pantalla").value;
    
    
}