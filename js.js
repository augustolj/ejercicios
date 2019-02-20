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
    alert("El numero es par");
  } else alert("El numero es impar");
}

function esTexto() {
  alert(typeof edad);
}

function sumarUno() {
  edad++;
  alert(edad);
}

function juego() {
  var eleccion = parseInt(prompt("Elije\n 1-Piedra\n 2-Papel\n 3-Tijera"));
  if (isNaN(eleccion)) {
    alert("Ingreso no valido");
} else switch (eleccion) {
  case 1:
    alert("Papel!");
    break;
  case 2:
    alert("Tijera!");
    break;
  case 3:
    alert("Piedra!");
    break;
  default:
    alert("Ingreso no valido");
    break;
}
}
