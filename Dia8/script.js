//Consiumo de API
//Mediante XMLHttpRequest

//Modularizar el consumo de la api

function buscarPersonaje(){
    let nombreP = prompt ('Ingresar el nombre del personaje a buscar: ');
    let xhr =new XMLHttpRequest(); // La importación del XML
    let url = `https://rickandmortyapi.com/api/character?name=${nombreP}`;//Siempre usar el acento inverso
    console.log(url);
    xhr.open("GET",url,true);
    xhr.onreadystatechange = function (){
        if (xhr.readyState === 3){
            alert("Cargando...");
        }else if (xhr.readyState ===4 && xhr.status === 200){
            try {
                let datos = JSON.parse(xhr.responseText);
                alert("The caracter is: Name: "+datos["results"][0]["name"]+"Status: "+datos["results"][0]["status"]+ " Specie: "+ datos["results"][0]["species"]); 
                document.write("The caracter is: Name: "+datos["results"][0]["name"]+"Status: "+datos["results"][0]["status"]+ " Specie: "+ datos["results"][0]["species"]);
            }
            catch (err){
                console.log(err.message); //Si algo malo pasa simplemente se imprime el error
            }
        }
    };
    xhr.send();
};
buscarPersonaje();