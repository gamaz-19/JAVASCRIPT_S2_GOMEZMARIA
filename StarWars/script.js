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
                let name = (datos["name"]);
                let height = (datos["height"]);
                let mass = (datos["mass"]);
                let hair_color = (datos["hair_color"]);
                let eye_color = (datos["eye_color"]);
                let birth_year = (datos["birth_year"]);
                let gender = (datos["gender"]);
                let homeworld = (datos["homeworld"]);
                let films = (datos ["films"][0])
                document.write (films)


            }
            catch (err){
                console.log(err.message); //Si algo malo pasa simplemente se imprime el error
            }
        }
    };
    xhr.send();
};
buscarResultados();

