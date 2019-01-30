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
function init() {
    //Anulo el botón inicial de top
    $(".subir").css("display", "none");
    let $section = ($('section').length);
    $('section').on('mousewheel', function (event) {

        let sectionAtm;
        let idAtm = event.currentTarget.id;

        //WheelDelta devuelve siempre múltiplos de 120.
        if (event.originalEvent.wheelDelta / 120 > 0) {
            if (parseInt(idAtm) - 1 != 0) {
                sectionAtm = "#" + (parseInt(idAtm) - 1);
                if ($(sectionAtm) != undefined)
                    moverSection(sectionAtm);
            }

        } else {
            if (parseInt(idAtm) != $section) {
                sectionAtm = "#" + (parseInt(idAtm) + 1);
                if ($(sectionAtm) != undefined)
                    moverSection(sectionAtm);
            }
        }
        console.log("prueba");
    });


    let contador = 1;

    $(".subir, .bajar").on("click", function (event) {

        let sectionAtm;

        event.preventDefault();
        if ($(this)[0].id == "subir") {
            sectionAtm = "#" + (--contador);
            if ($(sectionAtm) != undefined)
                moverSection(sectionAtm);

        } else {
            sectionAtm = "#" + (++contador);
            if ($(sectionAtm) != undefined)
                moverSection(sectionAtm);
        }

        if (contador > 1)
            $(".subir").css("display", "block");
        else
            $(".subir").css("display", "none");

        if (contador != 4)
            $(".bajar").css("display", "block");
        else
            $(".bajar").css("display", "none");

    });

    setTimeout(barras, 1000);
}  
/**
 * Obtiene un parametro al cual le aplica un efecto de 1000 segundos en desplazarse
 */
function moverSection(msg) {
    $('html, body').clearQueue().animate({
        scrollTop: ($(msg).offset().top)
    }, 1000);


}

function barras(){
    $(".barra-habilidad").each(function () {
        let barra = parseInt($(this).html());
            $(this).animate({
                'width': '' + barra + '%'
            }, 10000);   
    });
}


$(init);