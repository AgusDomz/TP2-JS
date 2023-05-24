/*

1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

	let edad = parseInt(prompt("Que edad tienes?"));

	if (edad >= 18) {
		alert("Ya puede conducir!");
	} else {
		Number.isNaN(edad);
	}

*/
//-----------------------------------------------------------------------------------
/*

2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

	let nota = parseInt(prompt("Ingresa una nota del 0-10"));

	if (nota >= 0 || nota <= 0) {
		switch (nota) {
			case 0:
			case 1:
			case 2:
				alert("Muy deficiente");
				break;
			case 3:
			case 4:
				alert("Insuficiente");
				break;
			case 5:
			case 6:
				alert("Suficiente");
				break;
			case 7:
				alert("bien");
				break;
			case 8:
			case 9:
				alert("Notable");
			case 10: 
				alert("Sobresaliente");
				break;
			default:
				alert("Ingrese un numero valido");
				break;
		}
	}

*/
//-----------------------------------------------------------------------------------
/*

3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

pedir cadenas de texto
cancelar
mostrar cadenas de texto concatenadas con -
let cadenas = [];

	while (true) {
		let input = prompt("Introduce un texto.");

		if (input === null) {
			break;
		}

		cadenas.push(input);

	}

	let resultado = cadenas.join("-");
	
	console.log(resultado);

*/	
//-----------------------------------------------------------------------------------
/*

4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.


	let suma = 0;

	while (true) {
		let input = prompt("Dame un numero");

		if (input === null) {
			break;
		}

		let numero = parseFloat(input);

		if (isNaN(numero)) {
			alert("No es un numero valido");
		}

		suma += numero;
	}

	alert("La suma total es: " + suma);

*/
//-----------------------------------------------------------------------------------
/*

5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».



		while (true) {
		let dni = prompt("Introduce un numero de DNI: ");

		if (dni === null) {
			break;
		}

		if (isNaN(dni)) {
			alert("No es un numero valido")
		}
		
		let numero = parseInt(dni);
		let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
		let i = numero % 23;
		let letra = letras.charAt(i);

		alert("La letra de DNI " + numero + " es: " + letra);
	}


*/
//-----------------------------------------------------------------------------------
/*

6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
……

	for (let i = 1; i < 31; i++) {
		let aux = i + "";
		console.log(aux.repeat(i));
	}

*/
//-----------------------------------------------------------------------------------
/*

7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1

	let num = parseInt(prompt("Ingrese un numero"))

	if (num <= 50) {
		for (let i = num; i > 0 ; i--){
			console.log(i.toString().repeat(i));		
		} 
	}else {
		console.log("error");
	}

*/
//-----------------------------------------------------------------------------------
/*

8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
let numero = parseInt(prompt("Ingresa un numero."));

	let numero = parseInt(prompt("Introduce un numero hasta 50: "));

	if (isNaN(numero) || numero <= 0 || numero > 50) {
		alert("El número ingresado no es válido.");
	} else {
	let piramide = "";

	for (let i = 1; i <= numero; i++) {
		for (let j = 1; j <= i; j++) {
		piramide += j + " ";
	}
		piramide += "\n";
	}

		console.log(piramide);
	}

*/	
//-----------------------------------------------------------------------------------
/*

9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-
6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10



	for (let i = 1; i <= 500 ; i++) {
		let mensaje = i

		if (i % 4 === 0) {
			mensaje += " (Multiplo de 4)";
		} else if (i % 9 === 0){
			mensaje += " (Multiplo de 9)"; 
		}

		console.log(mensaje);

		if (i % 5 === 0) {
			console.log("-------------------");
		}
	}

*/
//-----------------------------------------------------------------------------------
/*

10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

	let filas = parseInt(prompt("Introduce el número de filas:"));
	let columnas = parseInt(prompt("Introduce el número de columnas:"));
	let numero = filas * columnas;

	document.write("<table>");

	for (let i = 0; i < filas; i++) {
		document.write("<tr>");

	for (let j = 0; j < columnas; j++) {
		document.write("<td>" + numero + "</td>");
		numero--;
	}

		document.write("</tr>");
	}

	document.write("</table>");

*/
//-----------------------------------------------------------------------------------
/*

11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *



	let edades = [];
	let nombres = [];

	for (let i = 0; i < 3; i++) {
		let edad = parseInt(prompt("Introduce una edad"));
		let nombre = prompt("introduce un nombre");

		edades.push(edad);
		nombres.push(nombre);
	}

	let mayor = Math.max(...edades);
	let indiceMayor = edades.indexOf(mayor);
	let nombreMayor = nombres[indiceMayor];

	console.log(nombreMayor + " es el mayor");


*/
//-----------------------------------------------------------------------------------
/*

12- Realiza un script que genere un número aleatorio entre 1 y 99


	let numRandom = Math.floor(Math.random() * 100);

	console.log(numRandom);

*/
//-----------------------------------------------------------------------------------
/*

13- Realiza un script que pida un texto y lo muestre en mayúsculas.



	let texto = prompt("Dale poder a tus palabras!");

	console.log(texto.toUpperCase());

*/
//-----------------------------------------------------------------------------------
/*

14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.


	let cadenaTexto = prompt(`ingresar una cadena de texto:`);
	let salidaTexto="";

	for (let i = 0; i < cadenaTexto.length; i++) {
		if (i == 0) {
			salidaTexto = cadenaTexto[i];
		} else {
			salidaTexto = salidaTexto + "-" + cadenaTexto[i];
		}
	}
	console.log(salidaTexto);


*/
//-----------------------------------------------------------------------------------
/*

15- Realiza un script que cuente el número de vocales que tiene un texto.


	let texto = prompt("Ingrese un texto!"); 
	let vocales = ['a', 'e', 'i', 'o', 'u'];
	let contador = 0;

	texto = texto.toLowerCase();

	// .toLowerCase() convierte una cadena en letras minusculas

	for (let i = 0; i < texto.length; i++) {
		if (vocales.includes(texto[i])) { // array.includes da true si una cadena contiene una cadena especificada.
		contador++;
		}
	}

	console.log("El número de vocales en el texto es: " + contador);



*/
//-----------------------------------------------------------------------------------
/*

16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.


	let texto = prompt("Ingresa un texto!");
	let textoAlReves = "";

	for (let i = texto.length - 1; i >= 0; i--) {
		textoAlReves += texto[i];
	}

	console.log(textoAlReves);

	// texto.length devuelve la longitud de una cadena, si agregamos el -1 iremos al final de la misma.


*/
//-----------------------------------------------------------------------------------
/*

17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.


	let texto = prompt("Ingrese un texto!");

	texto = texto.toLowerCase();

	let posicion = -1; // Valor inicial para indicar que no se encontró ninguna vocal

	for (let i = 0; i < texto.length; i++) {

		let vocales = texto[i];
		
		if (vocales === "a" || vocales === "e" || vocales === "i" || vocales === 	"o" || vocales === "u") {

	    posicion = i + 1; // Se agrega 1 para mostrar la posición con base 1 en lugar de 	base 0

		break;
		}
	}


	if (posicion !== -1) {
		console.log("La primera vocal se encuentra en la posición " + posicion);
	} else {
		console.log("No se encontró ninguna vocal en el texto ingresado.");
	}

*/
//-----------------------------------------------------------------------------------

