/*
Consumir el endPoint de la API de pokemon disponible en: 
https://pokeapi.co/

Características a desarrollar: 
 - Cuando el sitio cargue se debe seleccionar aleatoriamente un pokemon de 1 a 1025 y cargar sus datos.
 - Cuando el usuario ingrese el nombre o el id de un pokemon la página debe mostrar los datos de este. 
 - En caso de no encontrar el pokemon ingresado por el usuario en el servidor generar un alert con el mensaje "pokemon no encontrado"
*/

//URL BASE PARA PETICIONES HTTP
let url = "https://pokeapi.co/api/v2/pokemon/";


//Funcion para cargar información de un pokemon en el DOM de nuestra página.
function cargarPokemon(pokemon){
    document.getElementById("pokemon_name").innerText = pokemon.name.toUpperCase();
    document.getElementById("pokemon_id").innerText = pokemon.id;
    document.getElementById("pokemon_height").innerText = pokemon.height;
    document.getElementById("pokemon_weight").innerText = pokemon.weight;
    document.getElementById("pokemon_image").src = pokemon.sprites.front_default;
}

//Funcion para enviar peticiones a la API por el parámetro dado. 
function obtenerDatosPokemon(parameter){
    let complete_url = url + parameter;
    fetch(complete_url)
        .then(response=>{
            if(!response.ok){
                throw new Error("Error en la solicitud");
            }
            return response.json();
        })
        .then( datos => {
            console.log("Datos Obtenidos ", datos);
            cargarPokemon(datos);
        })
        .catch(error => {
            console.error("Error: ", error);
        });
}

//Funcion para obtener el dato ingresado por el usuario.
function buscarPokemon(){
    let busqueda = document.getElementById("pokemon_text").value;
    console.log("Datos Ingresados", busqueda);
    obtenerDatosPokemon(busqueda);
}


//Añadir listeners al botón
document.getElementById("buscar").addEventListener('click',buscarPokemon);

//Generar id de pokemon aleatorio
const randomPokemon = parseInt(Math.random()*1025);
obtenerDatosPokemon(randomPokemon);