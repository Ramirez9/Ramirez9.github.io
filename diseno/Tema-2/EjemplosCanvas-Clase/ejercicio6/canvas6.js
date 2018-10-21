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
        let img = new Image();
        img.src = "imagen.jpeg";
        img.onload = function(){
            contexto.drawImage(img, 0,0);

            contexto.drawImage(img , 250, 400, 100, 100);

            contexto.drawImage(img , 240, 500, 100, 70);
            contexto.drawImage(img , 300, 500, 100, 100);
            contexto.drawImage(img , 460, 200, 50, 100);
            contexto.drawImage(img , 500, 250, 100, 89);
            contexto.drawImage(img , 500, 300, 90, 100);
            contexto.drawImage(img , 390, 500, 250, 100);
            contexto.drawImage(img , 100, 130, 100, 300);


            contexto.drawImage(img , 300, 100, 300, 100, 50, 0, 50, 50);

            contexto.drawImage(img , 300, 100, 300, 100, 50, 100, 50, 50);

        }

        
    }
}