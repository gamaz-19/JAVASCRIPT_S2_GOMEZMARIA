let deckId = null;

function barajaNueva() {
    let xhr = new XMLHttpRequest();
    let url = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const datos = JSON.parse(xhr.responseText);
                deckId = datos["deck_id"];
                console.log("Deck creado con ID:", deckId);
            } else {
                console.error("Error al crear el deck");
            }
        }
    }
    xhr.send();
}
barajaNueva();

//console.log(`Carta: ${cartaNueva["cards"][0]["value"]} de ${cartaNueva["cards"][0]["suit"]}`);

function pedirCarta() {
    if (!deckId) {
        console.error("Primero debes crear un deck");
        return;
    }

    let xhr = new XMLHttpRequest();
    let url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                try {
                    const cartaNueva = JSON.parse(xhr.responseText);
                    
                    if (cartaNueva.cards && cartaNueva.cards.length > 0) {
                        let cartaMostrar = cartaNueva["cards"][0]["images"]["png"];
                        
                        document.getElementById("card").innerHTML = `
                        <img src="${cartaMostrar}" alt="Carta ${cartaNueva["cards"][0]["code"]}">
                        `;
                        
                    } else {
                        document.getElementById("card").innerHTML = `<p>No hay más cartas en el deck</p>`;
                    }

                } catch (err) {
                    document.getElementById("card").innerHTML = `<p>Error al procesar los datos</p>`;
                    console.error(err.message);
                }
            } else {
                console.error("Error al obtener la carta");
            }
        }
    }

    xhr.send();
}
pedirCarta();

setTimeout(() => {
    pedirCarta();
}, 1000);

function valorcartaT(valorcarta) {
    let valorcarta = (`cartaNueva["cards"][0]["value"]}`);
    const value = card.value;
    if (value === 'ACE') return 1;
    if (value === 'JACK') return 11;
    if (value === 'QUEEN') return 12;
    if (value === 'KING') return 13;
    return parseInt(value);
}
const menor = document.getElementById('mayormenor');
menor.addEventListener('click', function () {
    if (menor > 1) {
        menor -= 1;
        pedirCarta();
    }
});