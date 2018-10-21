/**
 * 1.-Usando la Api Canvas, combina arcos y/o circulos con cualquier elemento visto en canvas. Se valorará la original.
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

    
    let x = 300;
    let y = 300;
    //Grados del circulo
    let j = 200;
            
    let flag = true;
    
    let contexto = cargaContextoCanvas('miCanvas');
    if (contexto) {
        
        contexto.fillStyle = '#D6EC5D';
        contexto.beginPath();
        contexto.arc(300, 100, 150, 0, Math.PI * 2, false);
        contexto.stroke();
        contexto.fill();

        contexto.fillStyle = '#E0E4C7' ;
        contexto.beginPath();
        contexto.arc(200, 200, 150, 0, Math.PI * 2, false);
        contexto.stroke();
        contexto.fill();

                
        contexto.fillStyle = '#D57EB7  ';
        contexto.beginPath();
        contexto.arc(400, 200, 150, 0, Math.PI * 2, false);
        contexto.stroke();
        contexto.fill();

   

        //SetInterval imprime cada cierto smilisegundos 500 = 0.5 segundos
        setInterval(function () {
            if (flag) {
                //Indicamos un color aleatorio a cada rectángulo (borde)
                contexto.fillStyle = colorAleatorioCuchuro();
         
                contexto.beginPath();
                contexto.arc(x, y+=5, j-=2, 0, Math.PI * 2, false);
                contexto.fill();
            
            }
            if (j <= 0) {
               
                /**
                 * COME COCOS
                 */

                //Parte de arriba
                contexto.beginPath();
                contexto.arc(700, 100, 70, 0.25 * Math.PI, 1.25 * Math.PI, true);
                contexto.fillStyle = "##2997BD";
                contexto.fill();

                //Parte de abajo
                contexto.beginPath();
                contexto.arc(700, 100, 70, 0.75 * Math.PI, 1.75 * Math.PI, true);
                contexto.fill();

                //Circulo del ojo
                contexto.beginPath();
                contexto.arc(700, 75, 10, 0, 2 * Math.PI, false);
                contexto.fillStyle = "white";
                contexto.stroke();
                contexto.fill();

                //Mordisco en el helado
                contexto.beginPath();
                contexto.arc(500, 100, 90, 0, Math.PI * 2, false);
                contexto.arc(550, 150, 50, 0, Math.PI * 2, false);
                contexto.fill();

                //Bolitas
                contexto.beginPath();
                contexto.fillStyle = colorAleatorio();
                contexto.arc(680, 100, 10, 0, Math.PI * 2, false);
                contexto.arc(640, 100, 10, 0, Math.PI * 2, false);
                contexto.arc(600, 100, 10, 0, Math.PI * 2, false);
                contexto.arc(560, 100, 10, 0, Math.PI * 2, false);
                contexto.arc(520, 100, 10, 0, Math.PI * 2, false);
                contexto.fill();

            }

        },25);
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
     * Creo un color aleatorio para las bolas
     */
    function colorAleatorio() {
        return "rgb(" + aleatorio(0, 255) + ", " + aleatorio(0, 255) + ", " + aleatorio(0, 255) + ")";
    }
    
    /**
     * Creo un color aleatorio para el cucurucho
     */
    function colorAleatorioCuchuro() {
        return "rgb(" + aleatorio(180, 200) + ", " + aleatorio(120, 150) + ", " + aleatorio(0, 30) + ")";
    }
}