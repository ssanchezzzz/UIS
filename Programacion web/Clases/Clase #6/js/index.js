let miPromesa = new Promise((resolve, reject)=>{
    let estado = true;

    if (estado){
        resolve("Funciono");
    }
    else{
        reject("No funciono");
    }
});  

miPromesa.then ((mensaje)=>{
    console.log (mensaje);
    }).catch((error)=>{
        console.log (error);
    }).finally(()=>{
        console.log("Termino la promesa")
    })