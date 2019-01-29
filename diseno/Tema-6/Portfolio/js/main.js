/**
 * 
 * Código js necesario 
 * 
 * @author Francisco Ramírez Ruiz
 * @version 1.0
 */

/**
 * Funcion inicial del programa
 */
function init(){
    let $section = ($('section').length);
    $('section').on('mousewheel', function(event) {

        let sectionAtm;
        let idAtm = event.currentTarget.id;

        //WheelDelta devuelve siempre múltiplos de 120.
        if(event.originalEvent.wheelDelta / 120 > 0) {
            if(parseInt(idAtm)-1 != 0){
                sectionAtm = "#"+(parseInt(idAtm)-1);
                if($(sectionAtm) != undefined)
                    moverSection(sectionAtm);
            }
           
        } else {
            if(parseInt(idAtm) != $section){
                sectionAtm = "#"+(parseInt(idAtm)+1);
                if($(sectionAtm) != undefined)
                    moverSection(sectionAtm);
            }
        }
        console.log("prueba");
    });

    $('section').on('touchmove', function(event) {

        let sectionAtm;
        let idAtm = event.currentTarget.id;

        //WheelDelta devuelve siempre múltiplos de 120.
        if(deltaY > 0 && event.originalEvent.wheelDelta / 120 > 0) {
            if(parseInt(idAtm)-1 != 0){
                sectionAtm = "#"+(parseInt(idAtm)-1);
                if($(sectionAtm) != undefined)
                    moverSection(sectionAtm);
            }
           
        } else {
            if(parseInt(idAtm) != $section){
                sectionAtm = "#"+(parseInt(idAtm)+1);
                if($(sectionAtm) != undefined)
                    moverSection(sectionAtm);
            }
        }
        console.log("prueba movil");
    });
   

}

/**
 * Obtiene un parametro al cual le aplica un efecto de 1000 segundos en desplazarse
 */
function moverSection(msg){
    $('html, body').clearQueue().animate({
        scrollTop: ($(msg).offset().top)
    },1000);
  
 
}
$(init);