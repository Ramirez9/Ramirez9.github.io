/**
 * 3.Usando la Api Canvas, crea una figura con stroke, haz un degradado dentro de la figura.
 * Dale un nombre y colócalo debajo de la figura. Se valorará la original.
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
        
        //Playa
        contexto.beginPath();
        contexto.moveTo(10,500);
        contexto.lineTo(700,500);
        contexto.lineTo(700,280);
        contexto.lineTo(10,280);
        contexto.closePath();
        contexto.stroke();
        
        let lineGrad = contexto.createLinearGradient(300,160,300,500);
        lineGrad.addColorStop(0, '#AA4507');
        lineGrad.addColorStop(0.05, '#D0692A');
        lineGrad.addColorStop(0.6, '#924B20');
        lineGrad.addColorStop(1, '#E6884E');
        contexto.fillStyle = lineGrad;
        contexto.fill();
        //Agua
        //puntos de inicio y final del degradado (x1,y1,x2,y2)
        var gradiente = contexto.createLinearGradient(0, 120, 0, 300);
        /**
         * 0, color en punto inicial
         * 0,5 color intermedio
         * 1, color en punto medio
         */
        gradiente.addColorStop(0, "#C3EDE6");
        gradiente.addColorStop(0.5, "#459A95");
        gradiente.addColorStop(1, "#013C89");
        contexto.fillStyle = gradiente;

        //Rectángulo donde rellenará el gradiente (x,y, anchura, altura)
        contexto.fillRect(9, 0, 692, 280);
  
        //Sol
        contexto.beginPath();
        contexto.arc(650, 90, 72, 0.25 * Math.PI, 1.75 * Math.PI, false);
        contexto.fillStyle = "yellow";
        contexto.fill();
        contexto.closePath();

        //Sombrilla izquierda
        contexto.fillStyle = "#493408";
        contexto.beginPath();
        contexto.moveTo(60,250);
        contexto.lineTo(60,400);
        contexto.lineTo(80,400);
        contexto.lineTo(80,250);
        contexto.fill();
        contexto.closePath();
        contexto.stroke();
        contexto.beginPath();
        contexto.lineTo(20,250);
        contexto.lineTo(120,250);
        contexto.lineTo(70,150);
        contexto.fill();
        contexto.closePath();
        contexto.stroke();
 
        //Palmera
        contexto.beginPath();
        //Inicio corona
        contexto.moveTo(600,200);
        contexto.lineTo(650,400);
        contexto.lineTo(680,400);
        contexto.fill();
        contexto.closePath();
        contexto.stroke();

        37, 161, 12
        contexto.fillStyle = "rgba(37, 161, 12,0.3)";
        //Hoja1
        contexto.beginPath();
        contexto.moveTo(600,200);
        contexto.lineTo(510,300);
        contexto.lineTo(480,290);
        contexto.fill();
        contexto.closePath();
        contexto.stroke();
        //Hoja2
        contexto.beginPath();
        contexto.moveTo(600,200);
        contexto.lineTo(470,220);
        contexto.lineTo(470,190);
        contexto.fill();
        contexto.closePath();
        contexto.stroke();
        //Hoja3
        contexto.beginPath();
        contexto.moveTo(600,200);
        contexto.lineTo(490,150);
        contexto.lineTo(490,140);
        contexto.fill();
        contexto.closePath();
        contexto.stroke();    
        //Hoja4
        contexto.beginPath();
        contexto.moveTo(600,200);
        contexto.lineTo(600,150);
        contexto.lineTo(550,100);
        contexto.fill();
        contexto.closePath();
        contexto.stroke();    
        //Hoja5
        contexto.beginPath();
        contexto.moveTo(600,200);
        contexto.lineTo(700,150);
        contexto.lineTo(680,130);
        contexto.fill();
        contexto.closePath();
        contexto.stroke();

        //Nubes
        contexto.fillStyle = "rgba(127, 227, 221,0.6)";
        contexto.beginPath();
        contexto.arc(88, 20, 56, 0, Math.PI * 2, true);
        contexto.arc(154, 20, 30, 0, Math.PI * 2, true);
        contexto.arc(232, 20, 72, 0, Math.PI * 2, true);
        contexto.arc(320, 20, 35, 0, Math.PI * 2, true);
        contexto.arc(380, 20, 44, 0, Math.PI * 2, true);
        contexto.arc(442, 20, 23, 0, Math.PI * 2, true);
        contexto.arc(498, 20, 41, 0, Math.PI * 2, true);   
        contexto.arc(600, 20, 71, 0, Math.PI * 2, true);
        contexto.arc(620, 20, 51, 0, Math.PI * 2, true);
        contexto.arc(670, 20, 30, 0, Math.PI * 2, true);
        contexto.closePath();
        contexto.fill();
    
        //Sombra - Palmera
        contexto.fillStyle = "rgba(2, 10, 0,0.5)";
        contexto.beginPath();
        contexto.moveTo(650,400);
        contexto.lineTo(290,450);
        contexto.lineTo(440,490);
        contexto.lineTo(680,400);
        contexto.fill();
        contexto.closePath();

        //Sombra sombrilla
        contexto.beginPath();
        contexto.moveTo(60,400);
        contexto.lineTo(8,470);
        contexto.lineTo(80,400);
        contexto.fill();
        contexto.closePath();
    }
}