let numeroCasos;
let numeroAceptado = false; 

while (numeroAceptado == false){
    numeroCasos = parseInt(prompt("Ingrese su cantidad de casos"));
    if (numeroCasos <= 0){
        console.log("¡Ingrese un numero mayor que 0!");
    }
    else{
        numeroAceptado = true;
    }
}

function verificarMenor(numeroEntrada1, numeroEntrada2, numeroEntrada3) {
    if (numeroEntrada1 < 10000 && numeroEntrada2  < 10000 && numeroEntrada3 < 10000) {
        return true;
    }
    else{
        return false;
    }    
}

class Acuario {
        constructor(numeroCompartimientos, capacidadLitros, diferenciaAdyacentes) {
            this.numeroCompartimientos = numeroCompartimientos;
            this.capacidadLitros = capacidadLitros;
            this.diferenciaAdyacentes = diferenciaAdyacentes;
        }
    } 

while (numeroCasos != 0){
    numeroCasos -= 1;
    let datos;
    datos = prompt("Ingrese los siguientes datos: (Ingrese separados por un espacio) \nNumero de compartimientos \nCapacidad en litros del más grande \nDiferencia de litros entre adyacentes")

    let vector = [];
    let vectorString = [];
    vectorString = datos.split (" ");

    for (let i = 0; i < vectorString.length; i++){
        let vector = vectorString.map(Number);
    }

    let objAcuario = new Acuario(parseInt(vectorString [0]), parseInt(vectorString [1]), parseInt(vectorString [2]));

    let totalLitros = 0;
    let diferenciaAcuario = 0;
    totalLitros = objAcuario.capacidadLitros;
    while(objAcuario.numeroCompartimientos != 0){
        objAcuario.numeroCompartimientos -= 1;
        diferenciaAcuario = totalLitros - objAcuario.diferenciaAdyacentes;
        totalLitros += diferenciaAcuario;

        console.log("Valores: " + diferenciaAcuario + "," + totalLitros );

        diferenciaAcuario = 0;

        
        
    }
    console.log ("Su total de litros es: " + totalLitros);
}
