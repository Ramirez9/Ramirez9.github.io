/**
 * 
 * 4.Opcional: Crea una animación usando imágenes.
 * 
 * @author Francisco Ramírez Ruiz
 * 
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

        let sun = new Image();
        let earth = new Image();

        sun.src = '../img/sol.jpg';
        earth.src = '../img/tierra.jpg';

        setInterval(function() {
            //Propago las dos imágenes juntas
            contexto.globalCompositeOperation = 'destination-over';

            //Limpio el recorrido de la imágen
            contexto.clearRect(0, 0, 900, 900); 
            
            //Con save guardamos el estado actual
            contexto.save();

            //Con translate desplazamos nuestra imágen
            contexto.translate(200, 200);
 
            let time = new Date();
            //Rota la tierra
            contexto.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60606) * time.getMilliseconds());
            contexto.translate(80, 80);
            contexto.drawImage(earth, 0, 10, 40, 40);
            
            //Con restore lo restauramos
            contexto.restore();
 
            //Sol
            contexto.drawImage(sun, 60, 40, 220, 250);
        
        });
     
    }
    
}


