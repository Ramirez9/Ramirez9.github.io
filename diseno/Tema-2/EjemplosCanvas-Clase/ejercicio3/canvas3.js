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
        contexto.beginPath();
        contexto.moveTo(1, 1);
        for (i = 1; i < 350; i += 11) {
            if ((i % 2) != 0) {
                contexto.lineTo(i + 11, i);
            } else {
                contexto.lineTo(i, i + 11);
            }
        }
        contexto.lineTo(1, i);
        contexto.closePath();
        contexto.stroke();
    }
}