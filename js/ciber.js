// Ejercicio 1
var mundo = "Hola mundo";
console.log(mundo);

// Ejercicio 2
var nombre = "Sergio";
alert("Me llamo " + nombre);

// Ejercicio 3
var nombre = "Sergio";
var apellido = "Gutiérrez";
console.log(nombre, apellido);

// Ejercicio 4
var suma1 = 10;
var suma2 = 4;
console.log("La suma entre", suma1, "y", suma2, "es:", suma1 + suma2);

// Ejercicio 5
var nota_examen = prompt("Inserta la nota del examen");
if (nota_examen >= 5) {
    alert("Nos alegra comunicarle que está aprobado con una nota de: " + nota_examen);
} else {
    alert("Sentimos comunicarle que está suspendido con una nota de: " + nota_examen);
}

// Ejercicio 6
var frase = "Tinc un cotxe de color blau";
frase = frase.replace("blau", "verd");
document.write(frase + "</br>");

var frase1 = "Tinc un cotxe de color blau";
frase1 = frase1.replace(/o/g, "u");
document.write(frase1 + "</br>");

// Ejercicio 7
var objetos = ["taula",
    "cadira", "ordinador", "libreta"
];
var contador = 0;

while (contador < objetos.length) {
    document.write("El objeto " + objetos[contador] + " se encuentra en la posición " + contador + "</br>");
    contador++;

}

// Ejercicio 8

function calculadora(operacion) {

    var valor1 = document.calc.valor1.value;
    var valor2 = document.calc.valor2.value;
    var result = 0;
    if (operacion == '+' || operacion == '-' || operacion == '*') {
        result = eval(valor1 + operacion + valor2);
    }
    document.calc.resultado.value = result;
}