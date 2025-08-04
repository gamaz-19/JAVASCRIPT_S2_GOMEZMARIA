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
                            <p>Carta: ${cartaNueva["cards"][0]["value"]} de ${cartaNueva["cards"][0]["suit"]}</p>
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
barajaNueva();

setTimeout(() => {
    pedirCarta();
}, 1000);
