"use strict";
// Función con un parámetro obligatorio (number), uno por defecto (string) y uno opcional (boolean)
// 'texto' es un string que tiene un valor por defecto ("por defecto") si no se proporciona.
// 'flag' es un parámetro opcional de tipo boolean (puede ser true, false o no enviarse).
// 'flag' normalmente se usa para indicar una condición, por ejemplo: activar/desactivar algo, mostrar/ocultar, etc.
function ejemplo(num, texto = "por defecto", flag) {
    // Muestra el número recibido
    console.log("Número:", num);
    // Muestra el texto recibido o el valor por defecto
    console.log("Texto:", texto);
    // Si se proporciona 'flag', muestra su valor; si no, indica que no fue proporcionado
    if (flag !== undefined) {
        console.log("Flag:", flag);
    }
    else {
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
const sumar = (a, b) => {
    return a + b;
};
console.log(sumar(5, 10));
// Ejemplo de callback con setTimeout
// Esta función se ejecutará después de 5 segundos (5000 milisegundos)
setTimeout(() => {
    console.log("HOLA ADSO Ficha 2994283");
}, 5000);
//Cree una función flecha sin argumentos que imprima “Hola ADSI”
const saludar = () => {
    console.log("Hola ADSO");
};
saludar();
/**Cree una función flecha que tenga como parámetro edad y retorne un string que le diga al usuario cuál
fue la edad pasada como argumento, imprima el valor devuelto por la función. Use paréntesis para el
parámetro y omita la palabra reservada return.
 */
const mostrarEdad = (edad) => `Su edad es: ${edad}`;
console.log(mostrarEdad(21));
/**Cree una función flecha que tenga como parámetros dos números y retorne el producto de éstos,
imprima el valor devuelto por la función. Use paréntesis para agrupar los parámetros, no use la palabra
reservada return.
 */
const mostrarProducto = (a, b) => (a * b);
console.log(mostrarProducto(19, 10));
/**Cree una función flecha que tenga como parámetros dos números y retorne el módulo de éstos, imprima
el valor devuelto por la función. La función debe tener dos instrucciones, una donde se declare e inicialice
la variable módulo que contendrá el módulo de los dos números y la otra donde se retorne la variable
módulo. Use paréntesis para agrupar los parámetros, use llaves para agrupar las dos instrucciones.
*/
// La función mostrarModulo calcula el residuo (módulo) de dividir a entre b
const mostrarModulo = (a, b) => {
    const modulo = a % b; // El operador % obtiene el residuo de la división
    return modulo;
};
console.log(mostrarModulo(4, 12));
// Ejemplo 1: Desestructuración de un objeto
const persona = { nombre: "Kevin Burgos", edad: 21, ciudad: "Armenia" };
// Extraemos las propiedades nombre y ciudad del objeto persona
const { nombre, ciudad } = persona;
console.log(`Nombre: ${nombre}, Ciudad: ${ciudad}`); // Nombre: Kevin Burgos, Ciudad: Armenia
// Ejemplo 2: Desestructuración de un arreglo
const numeros = [10, 20, 30, 40];
// Extraemos los dos primeros valores del arreglo
const [primero, segundo] = numeros;
console.log(`Primer número: ${primero}, Segundo número: ${segundo}`); // Primer número: 10, Segundo número: 20
// Ejemplo 3: Desestructuración en parámetros de función
const mostrarInfo = ({ nombre, edad }) => {
    console.log(`Nombre: ${nombre}, Edad: ${edad}`);
};
mostrarInfo({ nombre: "Carlos", edad: 30 }); // Nombre: Carlos, Edad: 30
