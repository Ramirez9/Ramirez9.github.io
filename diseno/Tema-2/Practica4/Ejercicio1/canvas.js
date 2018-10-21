/**
 * 1.-Usando la Api Canvas para dibujar rectángulos, crea una animación desarrollada por ti. Se valorará la original.
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

    let i = 10;
    let j = 685;
            
    let flag = true;
    
    let contexto = cargaContextoCanvas('miCanvas');
    if (contexto) {
        contexto.fillStyle = colorAleatorio();

        //SetInterval imprime cada cierto smilisegundos 500 = 0.5 segundos
        setInterval(function () {
            if (flag) {
                //Indicamos un color aleatorio a cada rectángulo (borde)
                contexto.strokeStyle = colorAleatorio();

                // strokeRect(x,y,width, height)
                contexto.strokeRect(i += 2, i += 2, j -= 4, j -= 4);
            
            }
            if (j <= 0) {
                flag = false;
            }

        },250);
    }

    /**
     * Creamos un número aleatorio
     * @param {*} inferior 
     * @param {*} superior 
     */
    function aleatorio(inferior, superior) {
        let numero = superior - inferior;
        let random = Math.floor(Math.random() * numero);
        return parseInt(inferior) + random;
    }
    
    /**
     * Creo un color aleatorio
     */
    function colorAleatorio() {
        return "rgb(" + aleatorio(0, 255) + ", " + aleatorio(0, 255) + ", " + aleatorio(0, 255) + ")";
    }
}