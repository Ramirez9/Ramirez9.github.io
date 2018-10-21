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
        contexto.fillStyle = "#6666ff";
        contexto.beginPath();
        contexto.moveTo(50,15);
        contexto.lineTo(112,15);
        contexto.lineTo(143,69);
        contexto.lineTo(112,123);
        contexto.lineTo(50,123);
        contexto.lineTo(19,69);
        contexto.fill();
    }
}