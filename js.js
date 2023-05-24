/*

1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

	let edad = parseInt(prompt("Que edad tienes?"));

	if (edad >= 18) {
		alert("Ya puede conducir!");
	} else {
		Number.isNaN(edad);
	}

*/
//--------------------------------------------------------------------------------------------------------------------------------
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
//--------------------------------------------------------------------------------------------------------------------------------
/*

3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

pedir cadenas de texto
cancelar
mostrar cadenas de texto concatenadas con -


	let cadenas = "";

	while (true){
		let cadena = prompt("Dime una frase!");

		if (cadena === null) {
			break;
		}
	} cadenas += cadena + "-";

	cadenas = cadenas.slice(0, -1);

		console.log(cadenas)

*/
//--------------------------------------------------------------------------------------------------------------------------------
/*

4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.


*/
//--------------------------------------------------------------------------------------------------------------------------------
/*

5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

*/
//--------------------------------------------------------------------------------------------------------------------------------
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
//--------------------------------------------------------------------------------------------------------------------------------
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
//--------------------------------------------------------------------------------------------------------------------------------
/*

8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……

*/
//--------------------------------------------------------------------------------------------------------------------------------
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

*/
//--------------------------------------------------------------------------------------------------------------------------------
/*

10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

*/
//--------------------------------------------------------------------------------------------------------------------------------
/*

11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

*/
//--------------------------------------------------------------------------------------------------------------------------------
/*

12- Realiza un script que genere un número aleatorio entre 1 y 99

*/
//--------------------------------------------------------------------------------------------------------------------------------
/*

13- Realiza un script que pida un texto y lo muestre en mayúsculas.

*/
//--------------------------------------------------------------------------------------------------------------------------------
/*

14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

*/
//--------------------------------------------------------------------------------------------------------------------------------
/*

15- Realiza un script que cuente el número de vocales que tiene un texto.

*/
//--------------------------------------------------------------------------------------------------------------------------------
/*

16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

*/
//--------------------------------------------------------------------------------------------------------------------------------
/*

17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

*/
//--------------------------------------------------------------------------------------------------------------------------------

