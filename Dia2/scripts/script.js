// Primer ejemplo - Estructuras de decisión
let edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad");
}

//Segundo ejemplo - Estructuras de decisión
let hora = 14;

if (hora < 12) {
    console.log("Buenos días");
} else {
    console.log("Buenas tardes");
}

//Tercer ejemplo - Estructuras de decisión
let calificacion = 75;

if (calificacion >= 90) {
    console.log("A");
} else if (calificacion >= 80) {
    console.log("B");
} else if (calificacion >= 70) {
    console.log("C");
} else {
    console.log("Reprobado");
}

//Cuarto ejemplo - Estructuras de decisión
const numero = 7;
const esPar = (numero % 2 === 0) ? true : false;
console.log(esPar ? "El número es par" : "El número es impar");

//Quinto ejemplo
//La expresión de cambio se evalúa una vez.
//El valor de la expresión se compara con los valores de cada caso.
//Si hay una coincidencia, se ejecuta el bloque de código asociado.
//Si no hay coincidencia, se ejecuta el bloque de código predeterminado.

let dia = "Lunes";

switch (dia) {
    case "Lunes":
        console.log("Comienzo de semana");
        break;
    case "Viernes":
        console.log("Fin de semana cerca");
        break;
    default:
        console.log("Día intermedio");
}


//ESTRUCTURAS REPETITIVAS
//for(...) {} : Recorre un bloque de código un número de veces.

for (let i = 1; i <= 5; i++) {
    console.log(i);
}
//for(..of..) {}:Recorre los valores de un objeto iterable.
const miArray = [1, 2, 3, 4, 5];

for (const elemento of miArray) {
    console.log(elemento);
}

//for(..in..) {}:Recorre las propiedades de un objeto.

const persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Bucaramanga'
};

for (const propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
}

//Para iterar solo sobre las propiedades propias del objeto 
// (no heredadas), puedes usar hasOwnProperty, garantiza que 
// solo se procesen las propiedades que pertenecen directamente 
// al objeto y no aquellas que puedan provenir de la cadena de 
// prototipos.

for (const propiedad in persona) {
    if (persona.hasOwnProperty(propiedad)) {
        console.log(`${propiedad}: ${persona[propiedad]}`);
    }
}

//ESTRUCTURAS DE BLOQUES
//while(...) {} : Recorre un bloque de código mientras una 
// condición especificada sea true 
let j = 1;

while (i <= 5) {
    console.log(`Cuadrado de ${j}: ${j * j}`);
    j++;
}

//do{...} while(...) :Ejecuta un bloque de código al menos una
//vez y luego repite la ejecución mientras una condición 
// especificada sea true	
let nombre;

do {
    nombre = prompt("Ingresa un nombre:");
} while (!nombre.trim());

console.log("¡Nombre válido ingresado!"); //Mientras el usuario no ingrese un nombre válido (que no sea una cadena vacía después de quitar espacios en blanco con trim(), el bucle seguirá solicitando la entrada del usuario. Una vez que se ingresa un nombre válido, el bucle se detiene y se imprime un mensaje.

//ESTRUCTURAS DE ITERADORES


//[].forEach(...) {}:Ejecuta una función proporcionada una vez por cada elemento en un array.
const frutax = ["Manzana", "Banana", "Uva", "Fresa"];

frutax.forEach(function (fruta) {
    console.log(fruta);
}); //La función forEach itera sobre cada elemento del array frutas y ejecuta el bloque de código proporcionado, que simplemente imprime cada fruta en la consola.



//[].map(...){}:Crea un nuevo array al aplicar una función a cada elemento del array original.
const palabras = ["Hola", "Mundo", "JavaScript"];

const palabrasEnMayusculas = palabras.map(function (palabra) {
    return palabra.toUpperCase();
}); //En este ejemplo, map se utiliza para crear un nuevo array llamado palabrasEnMayusculas, donde cada palabra del array original (palabras) se convierte a mayúsculas.

console.log(palabrasEnMayusculas);

//[].filter(...){}:Crea un nuevo array con los elementos que cumplen una condición específica
const libros = [
    { titulo: 'Libro 1', paginas: 150 },
    { titulo: 'Libro 2', paginas: 220 },
    { titulo: 'Libro 3', paginas: 180 },
    { titulo: 'Libro 4', paginas: 250 },
];

const librosMasDe200Paginas = libros.filter(function (libro) {
    return libro.paginas > 200;
});

console.log(librosMasDe200Paginas);  //librosMasDe200Paginas contendrá solo los objetos de libros cuya propiedad paginas sea mayor que 200.

//[].indexOf(...){}:Devuelve el índice de la primera aparición de un elemento en un array, o -1 si el elemento no está presente
const frutas = ["manzana", "banana", "pera", "uva", "pera"];
const frutaBuscada = "pera";

let indice = -1;
let i = 0;

do {
    indice = frutas.indexOf(frutaBuscada, i);
    if (indice !== -1) {
        console.log(`"${frutaBuscada}" encontrado en el índice ${indice}`);
        i = indice + 1; // Buscar a partir del siguiente índice para encontrar ocurrencias adicionales
    }
} while (indice !== -1);

//[].every(...){}:Devuelve true si todos los elementos cumplen con cierta condición, y false si al menos uno no la cumple
const palabrax = ["casa", "perro", "sol", "árbol"];

const todasSonMasLargasQueTres = palabrax.every(function(palabra) {
    return palabra.length > 3;
});

console.log(todasSonMasLargasQueTres);

//[].reduce(...){}:Acumula valores iterativamente, aplicando una función a cada elemento y manteniendo un resultado acumulado
const palabraf = ['Hola', ' ', 'mundo', '!'];

const mensaje = palabraf.reduce(function(accumulator, palabra) {
    return accumulator + palabra;
}, '¡');

console.log(mensaje);o

//CONTROL DE FLUJO
//Sentencia Continue
let texto = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    texto += "El número es " + i + "\\n";
}
console.log(texto);

//Sentencia Break
let text = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "El número es " + i + "\\n";
}
console.log(text);


//FUNCIONES

//funcion saludo(nombre){return "Hola + nombre"};

//Funciones declarativas
//function nombre(parametro1, parametro2, ...) {
// código a ejecutar}

//Ejemplo 1
// Función para calcular el producto de p1 y p2
function miFuncion(p1, p2) {
  return p1 * p2;
}
console.log(miFuncion(2,2)); //Los parámetros de la función se enumeran dentro de los paréntesis en la definición de la función.



//Sintaxis return
//Cuando JavaScript alcanza una declaración return, la función dejará de ejecutarse. 
// La declaración return devuelve un valor al "llamador".

//Suma de dos parámetros
function otraFuncion(a, b) {
    return a + b;
}

//Operador ()

//El operador () invoca (llama) a la función.
//Conversión de Fahrenheit a Celsius
function aCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}

let valor = aCelsius(77); // Valor será el equivalente en Celsius de 77°F

//FUNCIONES DE EXPRESION

const nombreR = function (parametro1, parametro2) {
  // código a ejecutar
}

//A diferencia de las funciones declarativas, las funciones de expresión no son hoisted al principio del ámbito. Debes declarar la variable antes de usarla si esperas utilizarla en una expresión.
//Las funciones anónimas son funciones que no tienen un nombre. Las funciones de expresión se pueden usar para definir funciones anónimas.


//Funciones anónimas
//function(a,b){
    return a + b;
//};
//Observa que las funciones anónimas carecen de un nombre específico en su lugar, se almacenan en una variable para su posterior llamado, en este caso conocido como una función de expresión.

//Mapeo de números en sus cuadrados
function cuadrado(numero) {
    return numero * numero;
}
const numeros = [1, 2, 3, 4, 5];
const nuevosNumeros = numeros.map(cuadrado);  
console.log(nuevosNumeros); // [1, 4, 9, 16, 25]
//En este ejemplo, la función cuadrado() se pasa como argumento a la función map(). La función map() calcula el cuadrado de cada elemento del arreglo numeros y devuelve un nuevo arreglo con los resultados.

//Número cuadrado
function cuadrado(numero) {
    return numero * numero;
}
const resultado = cuadrado(5);
console.log(resultado); // 25
//Esta expresión evalúa la función cuadrado() con el argumento 5. El resultado de la evaluación es el número 25.