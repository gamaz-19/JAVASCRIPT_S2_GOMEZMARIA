alert('Consumo api Rick & Morty')

function llamada(){

    let request = new XMLHttpRequest ();
    request.open('GET', 'https://rickandmortyapi.com/api');
    alert(request)
    request.onload = function(){
        debugger;
        let todo = JSON.parse(this.responseText);
        document.getElementById("characters").innerHTML =todo.results;
        alert(todo);

    }
    request.send();

}

llamada();
console.log(todo);