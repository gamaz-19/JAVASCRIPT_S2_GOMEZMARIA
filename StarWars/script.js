// https://swapi.py4e.com/api/people/

document.write("API Star-Wars");
function buscarResultados(){
    const idIngresado = parseInt(prompt("Ingrese el id"))
    let xhr =new XMLHttpRequest(); // La importación del XML
    let url = `https://swapi.py4e.com/api/people/${idIngresado}`;//Siempre usar el acento inverso
    console.log(url);
    xhr.open("GET",url,true);
    xhr.onreadystatechange = function (){
        if (xhr.readyState === 3){
            alert("Cargando...");
        }else if (xhr.readyState ===4 && xhr.status === 200){
            try {
                let datos = JSON.parse(xhr.responseText);
                document.write (datos["name"]);
                alert(datos["name"])
            }
            catch (err){
                console.log(err.message); //Si algo malo pasa simplemente se imprime el error
            }
        }
    };
    xhr.send();
};
buscarResultados();

