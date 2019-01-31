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
   // if ($(window).width() >= 1020) {  
    let $section = ($('section, footer').length);
    $('#1, #2, #3, #4, #5').on('mousewheel', function (event) {

        let sectionAtm;
        let idAtm = event.currentTarget.id;
        $(".foto-perfil").css({
            "transition-duration" : "5s",
            "transform": "rotateY(360deg)"
        })
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

   // }
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

        if (contador != 5)
            $(".bajar").css("display", "block");
        else
            $(".bajar").css("display", "none");

    });

    setTimeout(barras, 1000);

	$("#idiomas").change(function(){
        if($("#idiomas").val()==="français")
        $(".icono-texto").text("franchute")
        if($("#idiomas").val()==="english")
        $(".icono-texto").text("ingles")
        if($("#idiomas").val()==="español")
        alert("español");
	});
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
        let valorTexto = parseInt($(this).html());
            $(this).animate({
                'width': '' + valorTexto + '%'
            }, 10000);   
    });
}


$(init);