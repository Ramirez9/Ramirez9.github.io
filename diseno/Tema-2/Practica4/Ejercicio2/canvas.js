/**
 * 2.-Usando la Api Canvas, combina el uso para dibujar rectángulos con caminos desarrollada por ti. Se valorará la original.
 *
 * @author Francisco Ramírez Ruiz
 */

 /**
  * Cargamos el elemento canvas en 2d.
  * @param {*} idCanvas 
  */
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

/**
 * onload id miCanvas
 */
window.onload = function () {

    
    let contexto = cargaContextoCanvas('miCanvas');
    if (contexto) {
        contexto.fillStyle = "rgba(143,139,126,1)";


        //Cabeza
        contexto.beginPath();
        contexto.moveTo(200,200);
        contexto.lineTo(300,200);
        contexto.lineTo(300,300);
        contexto.lineTo(200,300);
        contexto.closePath();
        contexto.fill();
        contexto.stroke();
        //Cuello
        contexto.beginPath();
        contexto.moveTo(215,300);
        contexto.lineTo(215,350);
        contexto.lineTo(285,350);
        contexto.lineTo(285,300);
        contexto.closePath();
        contexto.fill();
        contexto.stroke();
        //Cuerpo
        contexto.beginPath();
        contexto.moveTo(150,350);
        contexto.lineTo(350,350);
        contexto.lineTo(350,600);
        contexto.lineTo(150,600);
        contexto.closePath();
        contexto.fill();
        contexto.stroke();     

        //Mano Izquierda
        contexto.beginPath();
        contexto.moveTo(150,400);
        contexto.lineTo(50,600);
        contexto.lineTo(90,600);
        contexto.lineTo(150,480);
        contexto.closePath();
        contexto.fill();
        contexto.stroke();
        //Mano Derecha
        contexto.beginPath();
        contexto.moveTo(350,400);
        contexto.lineTo(450,600);
        contexto.lineTo(410,600);
        contexto.lineTo(350,480);
        contexto.closePath();
        contexto.fill();
        contexto.stroke();

        //Pierna Izquierda
        contexto.beginPath();
        contexto.moveTo(180,600);
        contexto.lineTo(240,600);
        contexto.lineTo(240,800);
        contexto.lineTo(180,800);
        contexto.closePath();
        contexto.fill();
        contexto.stroke();
        //Pierna derecha
        contexto.beginPath();
        contexto.moveTo(265,600);
        contexto.lineTo(325,600);
        contexto.lineTo(325,800);
        contexto.lineTo(265,800);
        contexto.closePath();
        contexto.fill();
        contexto.stroke();

        //Caja del juguete
        contexto.fillStyle = "rgba(234, 205, 96,0.7)";
        contexto.beginPath();
        contexto.moveTo(20,500);
        contexto.lineTo(500,500);
        contexto.lineTo(500,900);
        contexto.lineTo(20,900);
        contexto.closePath();
        contexto.fill();
        contexto.stroke();

        //lado caja
        contexto.fillStyle = "rgba(234, 205, 96,0.4)";
        contexto.beginPath();
        contexto.moveTo(20,500);
        contexto.lineTo(1,800);
        contexto.lineTo(1,800);
        contexto.lineTo(520,800);
        contexto.lineTo(500,500);
        contexto.fill();
        contexto.closePath();
        contexto.stroke();

        contexto.fillStyle = "rgba(219,18,79,0.4)";
        //Ojo Izquierdo
        contexto.beginPath();
        contexto.moveTo(215,215);
        contexto.lineTo(240,215);
        contexto.lineTo(240,240);
        contexto.lineTo(215,240);
        contexto.closePath();
        contexto.fill();
        contexto.stroke();
        //Ojo derecho
        contexto.beginPath();
        contexto.moveTo(260,215);
        contexto.lineTo(285,215);
        contexto.lineTo(285,240);
        contexto.lineTo(260,240);
        contexto.closePath();
        contexto.fill();
        contexto.stroke();

        contexto.fillStyle = "rgba(111,71,11,0.4)";
        //Dibujo del cuerpo
        contexto.beginPath();
        contexto.moveTo(200,400);
        contexto.lineTo(300,400);
        contexto.lineTo(300,550);
        contexto.lineTo(200,550);
        contexto.closePath();
        contexto.fill();
        contexto.stroke();

    }
}