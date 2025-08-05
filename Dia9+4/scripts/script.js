// 13014b3dca6a8ab3753733c2960b2ea2


function buscarPersonaje() {
    document.getElementById("resultados").innerHTML=``;
    const nombreUsar = document.getElementById("nombreInput").value.trim();
    const xhr = new XMLHttpRequest();
    const url = `https://superheroapi.com/api.php/13014b3dca6a8ab3753733c2960b2ea2/search/${nombreUsar}`
    console.log(url);
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 3) {

            console.log("Cargando...");
        }
        else if (xhr.readyState === 4 && xhr.status === 200) {
            try {

                let data = JSON.parse(xhr.responseText);
                if (data.results && data.results.length > 0) {
                    for (let i = 0; i < data.results.length; i++) {
                        let division = document.getElementById("resultados");
                        division.innerHTML+= `
                        <div class="card">
                            <img src="${data["results"][i]["image"]["url"]}">
                            <h3>${data["results"][i]["name"]}</h3>
                            <p><strong>ID:</strong>${data["results"][i]["id"]}</p>
                        </div>`
                        console.log(data)
                    };
                }
                }
                catch(err){
                    alert("Not working ")
                }
            }
        };
        xhr.send();
    }

    buscarPersonaje ();