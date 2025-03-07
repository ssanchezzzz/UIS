console.log ("HolaMundooo")

function pruebaVariables () {
    var x = 10;   //Tipos de declaracion de variable 
    let y = 20;
    const z = 30;  
   

    console.log (a); //Indefinido
    var a = 12;
    
    console.log (b); //Error
    let b = 54;

    //Es dinamico entonces no hace falta declarar el tipo de dato 
    let saludo = "Holaa"; //Recomendacion declarar variables con let 
    let numero = 12;
    let verdad = true; 

    
};
let persona = {
    nombre: "Juan", //Un objeto se declara de manera X , y , pepito
    edad: 12,
    saldo: 123123
};
persona.nombre = "Maicol"; // Modificacion

console.log (persona.nombre);
console.log (persona.edad);

let array = ["pepito", 12] //Se pueden mezclar datos en un Array 

let simbolo = Symbol("bucaros"); //Son inmutables y representan un valor unico un Symbol nunca va a ser igual a otro apesar de que su contenido sea el mismo

let igualdad = (5 == "5");
console.log (igualdad);

let estrictamentediferente = (5 === "5");
console.log (estrictamentediferente);

let suma = 5 + "5";
console.log (suma);