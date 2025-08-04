function barajaNueva() {
    let xhr = new XMLHttpRequest();
    let url = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const datos = JSON.parse(xhr.responseText);
            let idDeck = datos["deck_id"];
            return idDeck;
        }

    }
}
barajaNueva();

function pedirCarta(){

}


