var data = [];
function escribir() {

    var capa = document.getElementById("capaAgenda");
    capa.innerHTML = "";

    for (var i = 0; i < data.length; i++) {
        capa.innerHTML +=i+"-->"+ data[i] + "<br />";
    }
}

function add() {
    var texto = document.getElementById("txtNombre");
    data.push(texto.value);
    texto.value = "";
    escribir();
}

function borrar() {
    var aborrar = document.getElementById("txtBorrar");

    data.splice(aborrar.value, 1);
    aborrar.value = "";

    escribir();
}


