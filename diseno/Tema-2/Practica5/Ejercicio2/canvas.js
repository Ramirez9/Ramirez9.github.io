/**
 * 2.Usando la Api Canvas, carga un imagen, recortala y redimensionala en un canvas. 
 * En el archivo debe aparecer también la imagen original. Se valorará la original.
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
        let img = new Image();
        img.src = "../img/hokkaido.jpg";
        img.onload = function(){
            //Imágen original
            contexto.drawImage(img, 0,0);

            //Agrandar la imágen orginal
            contexto.drawImage(img, 0, 390, 1000, 500);

            //Recortar imágen - Matsumae
                            //img, imgX, imgY, imgAncho, imgAlto, lienzoX, lienzoY, LienzoAncho, LienzoAlto)
            contexto.drawImage(img, 70, 45, 150, 150, 525, 0, 150, 150);

            //Recortar imágen por la mitad
            contexto.drawImage(img, 90, 45, 300, 300, 700, 90, 300, 300);
        }

    }

}