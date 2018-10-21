function cargaContextoCanvas(idCanvas){
    var elemento = document.getElementById(idCanvas);
    if(elemento && elemento.getContext){
        var contexto = elemento.getContext('2d');
        if(contexto){
            return contexto;
        }
    }
    return false;
}
function aleatorio(inferior, superior){
    numPosib = superior-inferior;
    aleatorio = Math.random() * numPosib;
    aleatorio = Math.floor(aleatorio)
    return parseInt(inferior) + aleatorio;

}


window.onload = function(){

    var contexto = cargaContextoCanvas('miCanvas');
    if(contexto){
        contexto.fillStyle = "#6666ff";
        contexto.fillRect (10,10,200,200);
        contexto.fillStyle = "rgba(255,255,0,1)";
        contexto.fillRect(35,35,50,50);
    }
}