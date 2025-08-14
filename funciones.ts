
// Función con un parámetro obligatorio (number), uno por defecto (string) y uno opcional (boolean)

// 'texto' es un string que tiene un valor por defecto ("por defecto") si no se proporciona.
// 'flag' es un parámetro opcional de tipo boolean (puede ser true, false o no enviarse).
// 'flag' normalmente se usa para indicar una condición, por ejemplo: activar/desactivar algo, mostrar/ocultar, etc.

function ejemplo(num: number, texto: string = "por defecto", flag?: boolean): void {
	// Muestra el número recibido
	console.log("Número:", num);
	// Muestra el texto recibido o el valor por defecto
	console.log("Texto:", texto);
	// Si se proporciona 'flag', muestra su valor; si no, indica que no fue proporcionado
	if (flag !== undefined) {
		console.log("Flag:", flag);
	} else {
		console.log("Flag no proporcionado");
	}
}

ejemplo(5);
// Número y texto (flag no se envía)
ejemplo(10, "Hola");
// Número, texto y flag (flag se envía como true)
ejemplo(20, "Test", true);


/*Cree una variable tipo función que tenga como parámetros dos números y retorne su suma, haga el
llamado a la función*/

const sumar = (a: number, b: number): number => { 
	return a + b;
};

console.log(sumar(5, 10));


// Ejemplo de callback con setTimeout
// Esta función se ejecutará después de 5 segundos (5000 milisegundos)
setTimeout(() => {
	console.log("HOLA ADSO Ficha 2994283");
}, 5000);


//Cree una función flecha sin argumentos que imprima “Hola ADSI”
const saludar = (): void => {  // no recibe ningun argumento
	console.log("Hola ADSO");
};

saludar();


