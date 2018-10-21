function cargaContextoCanvas(idCanvas) {
    var elemento = document.getElementById(idCanvas);
    if (elemento && elemento.getContext) {
        var contexto = elemento.getContext('2d');
        if (contexto) {
            return contexto;
        }
    }
    return false;
}

function aleatorio(inferior, superior) {
    numPosib = superior - inferior;
    aleatorio = Math.random() * numPosib;
    aleatorio = Math.floor(aleatorio)
    return parseInt(inferior) + aleatorio;

}


window.onload = function () {

    var contexto = cargaContextoCanvas('miCanvas');
    if (contexto) {
        //primer camino, en negro
        contexto.beginPath();
        contexto.arc(75, 75, 60, Math.PI, Math.PI * 0.5, false);
        contexto.arc(75, 75, 40, Math.PI * 0.5, Math.PI * 0, false);
        contexto.fill();

        //segundo camino, en naranja
        contexto.fillStyle = '#ff8800';
        contexto.beginPath();
        contexto.arc(75, 75, 15, 0, Math.PI * 2, false);
        contexto.fill();
    }
}