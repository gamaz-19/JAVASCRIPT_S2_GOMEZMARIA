const form = document.getElementById("cuadro");
const prevB = document.getElementById('prevB');
const nextB = document.getElementById('nextB');
let idPoke = 0;

form.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        buscarPokemon(); 
    }
});

prevB.addEventListener('click', function () {
    if (idPoke > 1) {
        idPoke -= 1;
        buscarPokemon(idPoke);
    }
});

nextB.addEventListener('click', function () {
    idPoke += 1;
    buscarPokemon(idPoke);
});

function buscarPokemon(id = null) {
    const datoIngresado = id || document.getElementById("cuadro").value.trim().toLowerCase();
    document.getElementById("data").innerHTML = `<p>Cargando...</p>`; // Indicador de carga

    const xhr = new XMLHttpRequest();
    const url = `https://pokeapi.co/api/v2/pokemon/${datoIngresado}`;
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                try {
                    const datos = JSON.parse(xhr.responseText);
                    idPoke = datos.id;
                    document.getElementById("data").innerHTML = `
                        <h1 id="idPoke" class="idPoke">${datos.id} -</h1>
                        <h1 id="nomPoke" class="nomPoke">${datos.name}</h1>
                        <img src="${datos.sprites.other.showdown.front_default || datos.sprites.front_default}" alt="${datos.name}">
                    `;
                } catch (err) {
                    document.getElementById("data").innerHTML = `<p>Error al procesar los datos</p>`;
                    console.error(err.message);
                }
            } else {
                document.getElementById("data").innerHTML = `<p>Pokémon no encontrado</p>`;
            }
        }
    };

    xhr.send();
}
