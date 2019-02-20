//Declaración de variables
var edad = 0;

//Mis Funciones
function pedirEdad() {
  var a = parseInt(prompt("Cual es tu edad?"));
  edad = a;
  if (a > 17) {
    alert("Tenes edad para conducir");
  } else ;
}

function mostrarPar() {
  if (edad % 2 == 0) {
    console.log("El numero es par");
  } else console.log("El numero es impar");
}

function esTexto() {
  if (isNaN(edad)) {
    console.log("No es un numero");
  } else console.log("Es numero");
}

function sumarUno() {
  edad++;
  console.log(edad);
}
