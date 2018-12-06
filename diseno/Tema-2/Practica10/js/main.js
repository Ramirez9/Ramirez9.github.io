/**
 * 
 * Canvas
 * Es un cascabel
 * La imaginación es maravillosa.
 * 
 * @author Francisco Ramírez
 */

window.onload = function () {

  
    var contexto = cargaContextoCanvas("micanvas");


    if (contexto) {
    
        contexto.lineWidth=1;

        //Circulos
        contexto.arc(45, 50,40, Math.PI, Math.PI*4, false);
        contexto.arc(45, 50,38, Math.PI, Math.PI*4, false);
        contexto.arc(45, 50,36, Math.PI, Math.PI*4, false);
        contexto.arc(45, 50,34, Math.PI, Math.PI*4, false);
        contexto.arc(45, 50,32, Math.PI, Math.PI*4, false);
        contexto.arc(45, 50,30, Math.PI, Math.PI*4, false);
        contexto.arc(45, 50,28, Math.PI, Math.PI*4, false);
        contexto.arc(45, 50,26, Math.PI, Math.PI*4, false);
        contexto.arc(45, 50,20, Math.PI, Math.PI*4, false);
        contexto.arc(45, 50,15, Math.PI, Math.PI*4, false);
        contexto.arc(45, 50,10, Math.PI, Math.PI*4, false);
        contexto.stroke();

        contexto.beginPath();
        contexto.arc(75, 20,18, Math.PI, Math.PI*4, false);
        contexto.stroke();
        
        contexto.lineWidth=4;
        //Palo vertical
        contexto.beginPath();
        contexto.moveTo(45, 90);
        contexto.lineTo(45, 50);
        contexto.stroke();

        //Palo horizontal
        contexto.beginPath();
        contexto.moveTo(45, 50);
        contexto.lineTo(85, 50);
        contexto.lineTo(5, 50);
        contexto.stroke();
        contexto.arc(45, 50,10, Math.PI, Math.PI*4, false);
        contexto.fill();


    }
}

function cargaContextoCanvas(idCanvas) {
    var elemento = document.getElementById(idCanvas);
    if (elemento && elemento.getContext) {
        var contexto = elemento.getContext("2d");
        if (contexto) {
            return contexto;
        }
    }
    return false;
}