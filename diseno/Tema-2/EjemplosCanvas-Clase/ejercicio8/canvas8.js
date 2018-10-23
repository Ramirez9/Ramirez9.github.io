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

        //Marco
        contexto.strokeRect(0,0,300,300);
        contextofillStyle = 'rgb(0,0,0)';

        //Sombra vaso
        contexto.fillStyle = 'gray';
        contexto.beginPath();
        contexto.moveTo(175,262);
        contexto.quadraticCurveTo(142,273,115,258);
        contexto.bezierCurveTo(60,268,155,286,175,262);
        contexto.fill();

        //Base vaso
        contexto.beginPath();
        contexto.moveTo(110.5,260);
        contexto.bezierCurveTo(110.5,260,140,246,176.5,260);
        contexto.stroke();

        //Vaso
        contexto.beginPath();
        contexto.moveTo(194,79);
        contexto.lineTo(95,79);
        contexto.bezierCurveTo(96,98,95,102,95,102);
        contexto.bezierCurveTo(90,125,100,150,100,150);
        contexto.bezierCurveTo(111,184.5,110,262,110,262);
        contexto.bezierCurveTo(143,274,175,262,175,262);
        contexto.bezierCurveTo(177,188,191,145,191,145);
        contexto.bezierCurveTo(191,145,199,121.5,194,102.5);
        contexto.lineTo(192,79);
        contexto.stroke();

        //Relleno de coca cola

        let lineGrad = contexto.createLinearGradient(150,81,150,268);
        lineGrad.addColorStop(0, 'white');
        lineGrad.addColorStop(0.05, 'red');
        lineGrad.addColorStop(0.6, 'blue');
        lineGrad.addColorStop(1, 'red');
        contexto.fillStyle = lineGrad;
        contexto.fill();

        //Primer burbuja
        contexto.strokeStyle = 'green';
        contexto.lineWidth = 2;
        let radGrad = contexto.createRadialGradient(116,107,1,120,110,10);
        radGrad.addColorStop(0, 'white');
        radGrad.addColorStop(0.9, 'black');
        contexto.fillStyle = radGrad;
        contexto.beginPath();
        contexto.arc(120,110,10,0,Math.PI * 2, false);
        contexto.fill();
        contexto.stroke();

        
        //Segunda burbuja
        radGrad = contexto.createRadialGradient(164,140,1,168,143,8);
        radGrad.addColorStop(0, 'white');
        radGrad.addColorStop(0.9, 'black');
        contexto.fillStyle = radGrad;
        contexto.beginPath();
        contexto.arc(168,143,8,0,Math.PI * 2, false);
        contexto.fill();
        contexto.stroke();

        //Segunda burbuja
        radGrad = contexto.createRadialGradient(120,200,1,125,200,8);
        radGrad.addColorStop(0, 'white');
        radGrad.addColorStop(0.9, 'black');
        contexto.fillStyle = radGrad;
        contexto.beginPath();
        contexto.arc(125,200,8,0,Math.PI * 2, false);
        contexto.fill();
        contexto.stroke();
        

    }
}