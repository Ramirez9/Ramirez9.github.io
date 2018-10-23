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


window.onload = function () {

    var contexto = cargaContextoCanvas('miCanvas');
    if (contexto) {

        contexto.fillStyle ='blue';
        contexto.fillRect(0,0,300,200);
        contexto.strokeRect(0,0,300,200);

        contexto.fillStyle = 'red';
        contexto.strokeRect(18,60,280,130);

        contexto.font = 'bold 1.8em sans-serif';
        contexto.fillText('Hola mi nombre es' ,20,40);
        contexto.fillStyle = 'black';
        contexto.textAlign = 'center';
        contexto.font = 'bold 40px Verdana';
        contexto.fillText ('Fran',150,150);
        
    }
}