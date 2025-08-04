//Se inician las variables con valores iniciales
let mazoID = null;
let cartaA = null;
let score = 0;
let cartasRestantes = 52;
let intentos = 10;
let mejorPuntaje = 0;

//Conexión con el HTML
const cartaAhora = document.getElementById('card');
const puntajeAhora = document.getElementById('score');
const oportunidadesAhora = document.getElementById('chances');
const mayorPuntaje = document.getElementById('topScore');

//Llamar a la API
//Creando promesa
function crearBaraja() {
    return new Promise((resuelto, rechazado) => {

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr === 200) {
                    try {
                        const datos = JSON.parse(xhr.responseText);
                        mazoID = datos.deck.id;
                        cartasRestantes = datos.remaining;
                        console.log('Nuevo mazo creado: ', mazoID);
                        resuelto(datos);
                    } catch (error) {
                        showMessage('Error del servidor', 'incorrecto');
                        rechazado(error);
                    }
                } else {
                    showMessage('Error al crear el mazo, intentelo de nuevo', 'incorrecto');
                    rechazado(new Error('Error de conexión'));
                }
            }
        };

        xhr.onerror = function () {
            showMessage('Error de conexión', 'incorrect');
            PromiseRejectionEvent(new Error('Error de conexión'))
        };
        xhr.send();
    }
    );
}

//Como sacar una carta

function robarCarta() {
    return new Promise((resuelto, rechazado) => {
        const xhr = new XMLHttpRequest();
        const url = `https://deckofcardsapi.com/api/deck/${mazoID}/draw/?count=1`;
        xhr.open('GET', url, true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {  // ← Corregido aquí
                    try {
                        const datos = JSON.parse(xhr.responseText);

                        if (datos.cards && datos.cards.length > 0) {  // ← Corregido aquí
                            resuelto(datos.cards[0]);  // ← Corregido aquí
                        } else {
                            showMessage('No hay más cartas en el mazo', 'incorrect');
                            resuelto(null);
                        }
                    } catch (error) {
                        showMessage('Error del servidor', 'incorrecto');
                        rechazado(error);
                    }
                } else {
                    showMessage('Error al crear el mazo, inténtelo de nuevo', 'incorrecto');
                    rechazado(new Error('Error de conexión'));
                }
            }
        };

        xhr.onerror = function () {
            showMessage('Error de conexión', 'incorrect');
            rechazado(new Error('Error de conexión'));  // ← Corregido aquí
        };

        xhr.send();
    });
}
