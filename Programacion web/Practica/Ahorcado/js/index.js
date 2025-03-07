function iniciarJuego() {
    palabraSecreta();
}

function modificarPalabra(palabraModificada, i, letra) {
    palabraModificada = palabraModificada.split(" ");
    palabraModificada[i] = letra;
    palabraModificada = palabraModificada.join(" ");

    var palabraNueva = palabraModificada

    return palabraNueva
}

function validarPalabra (palabra){
    let palabraDescifrar = document.getElementById("palabra").textContent   
    console.log(palabra)

    document.addEventListener("keypress", function (event) {
        for (let i = 0; i < palabra.length; i++) {
            let letra = palabra[i];

            if (event.key.toLocaleUpperCase() == letra) {
                console.log(palabraDescifrar)
                document.getElementById("palabra").textContent = modificarPalabra(palabraDescifrar, i, letra);
                palabraDescifrar = document.getElementById("palabra").textContent;
            }

            else {
                console.log("")
            }
        }
    })
}

function actualizarInformacion(palabra){
    
}

function palabraSecreta (){
    const posiblesPalabras = ["Perro", "Gato", "León", "Tigre", "Elefante", "Jirafa", "Lobo", "Zorro", "Águila", "Delfín", "Sapo"];

    const palSecreta = posiblesPalabras[Math.floor(Math.random()*posiblesPalabras.length)];

        document.getElementById("palabra").textContent = "_ ".repeat(palSecreta.length);


    validarPalabra(palSecreta.toUpperCase());
}

document.getElementById("miBoton").addEventListener("click",iniciarJuego);
