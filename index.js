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

    }else if (numero > 200){
        document.getElementById("info").innerHTML = "Info: El resultado es superior a 200";    
    }else{
        document.getElementById("info").innerHTML = "";    
    }
}

var result = (numero) => {
    document.getElementById("resultado").innerHTML = "Resultado:" +  numero;
}


// Operaciones unitarias

var cuadrado = () => {
    num = document.getElementById("pantalla").value;
    validar(num);
    num = num * num;
    rellenar_info(num);
    result(num);
    vaciar();
    }

var cubo = () => {
    num = document.getElementById("pantalla").value;
    validar(num);
    num = num * num * num;
    rellenar_info(num);
    result(num);
    vaciar();
  }

var mod = () => {
    num = document.getElementById("pantalla").value;
    validar(num);
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
    validar(num);
    var total = 1; 
	for (i=1; i<=num; i++) {
		total = total * i;
        rellenar_info(total);
        result(total);
    }
}



//Operaciones binarias

var add = () => {
    num1 = document.getElementById("pantalla").value;
    validar(num1);
    vaciar();
    operador = "suma";  
    eq(num1);

}

var resta = () => {
    num1 = document.getElementById("pantalla").value;
    validar(num1);
    vaciar();
    operador = "resta";  
    eq(num1);
}

var mul = () => {
    num1 = document.getElementById("pantalla").value;
    validar(num1);
    vaciar();
    operador = "multiplicacion";  
    eq(num1);
    
}

var division = () => {
    num1 = document.getElementById("pantalla").value;
    validar(num1);
    vaciar();
    operador = "division";
    eq(num1);
}

var resto = () => {
    num1 = document.getElementById("pantalla").value;
    validar(num1);
    vaciar();
    operador = "resto";  
    eq(num1);
}

var potencia = () =>{
    num1 = document.getElementById("pantalla").value;
    validar(num1);
    vaciar();
    operador = "potencia";  
    eq(num1);
}

var eq = (solucion) => {

    if (operador == "suma"){
        num2 = document.getElementById("pantalla").value;
        validar(num2);
        solucion = (Number(num1) + Number(num2));
        result(solucion);
        rellenar_info(solucion);
        vaciar();
        
        
    } else if (operador == "resta"){
        num2 = document.getElementById("pantalla").value;
        validar(num2);
        solucion = (Number(num1) - Number(num2));
        result(solucion);
        rellenar_info(solucion);
        vaciar();

    
    }else if (operador == "multiplicacion"){
        num2 = document.getElementById("pantalla").value;
        validar(num2);
        solucion = (Number(num1) * Number(num2));
        result(solucion);
        rellenar_info(solucion);
        vaciar();

    }else if (operador == "division"){
        num2 = document.getElementById("pantalla").value;
        validar(num2);
        solucion = (Number(num1) / Number(num2));
        result(solucion);
        rellenar_info(solucion);
        vaciar();

    }else if (operador == "resto"){
        num2 = document.getElementById("pantalla").value;
        validar(num2);
        solucion = (Number(num1) % Number(num2));
        result(solucion);
        rellenar_info(solucion);
        vaciar();

    }else if (operador == "potencia"){
        num2 = document.getElementById("pantalla").value;
        validar(num2);
        solucion = (Number(num1) ** Number(num2));
        
        rellenar_info(solucion);
        result(solucion);
        vaciar();
        
    }
    
}



//Operaciones formato CSV

var coma = ",";
//var lista=[];

var sumatorio = () => {
    num = document.getElementById("pantalla").value;
    validar_lista(num);
    lista = num.split(coma);
    i = 0;
    aux = 0;
    while (i < lista.length) {
        aux += +lista[i++];
        num = aux;
    }
    rellenar_info(num);
    result(num);
}


var ordenar = () => {
    num = document.getElementById("pantalla").value;
    validar_lista(num);
    lista = num.split(coma);
    lista.sort((a,b) => a-b);
    rellenar_info(lista);
    result(lista);
} 

var revertir = () => {
    num = document.getElementById("pantalla").value;
    validar_lista(num);
    lista = num.split(coma);
    lista = lista.reverse();
    rellenar_info(lista);
    result(lista);
    
}

var quitar = () => {
    num = document.getElementById("pantalla").value;
    validar_lista(num);
    lista = num.split(coma);
    lista.pop();
    rellenar_info(lista);
    result(lista);
    
}


var validar = () => {
    num = document.getElementById("pantalla").value;
    try {
        if (isNaN(num)) throw "Error, se han introducido de forma incorrecta los datos.";
        num = Number(num);
    }
    catch(err) {
        alert("Error, se han introducido de forma incorrecta los datos.");
    }
}



var validar_lista = () => {
    num = document.getElementById("pantalla").value;
    lista = num.split(",");
    for (i of lista) {
        try {
        if(isNaN(i)) throw "Error, se han introducido de forma incorrecta los datos.";
        i = Number(i)
        }
        catch (error) {
            alert("Error, se han introducido de forma incorrecta los datos.");
    }
  }

}

