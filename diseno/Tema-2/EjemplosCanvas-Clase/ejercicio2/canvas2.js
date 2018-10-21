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
        //rombo 1
        contexto.fillStyle = "#6666ff";       
        contexto.beginPath();
        contexto.moveTo(50,5);
        contexto.lineTo(600,65);
        contexto.lineTo(50,125);
        contexto.lineTo(25,65);
        contexto.fill();

        //rombo2
        contexto.fillStyle = "#60271A";       
        contexto.beginPath();
        contexto.moveTo(50,5);
        contexto.lineTo(56,65);
        contexto.lineTo(50,125);
        contexto.lineTo(25,65);
        contexto.fill();
     }
}