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
