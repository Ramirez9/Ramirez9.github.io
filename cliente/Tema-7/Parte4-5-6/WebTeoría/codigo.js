/**
 * entrega un sitio web donde demuestres el uso de:
 * 1.-Distintas formas de acceder al atributo checked. Compruébalo en las distintas plataformas, tanto con input como con radio buttons
 * :selected Selector
 * .prop()
 * .attr()
 * :checked Selector
 * .val()
 * 2.- De tres 'input type="checkbox"' que te deshabilite 2 al seleccionar una de ellas
 * 3.- Asociar dintintos eventos mediante .on().
 * 4.- Indica los eventos estándares en el DOM
 * 5.- Los atributos pageX, pageY, currentTarget, timeStamp... ¿A qué objeto pertenecen? Demuestra su uso
 * 6.- Diferencia entre .on(), .live(). bind() y .delegate()
 * 
 * @author Francisco Ramírez Ruiz
 * @version 1.0
 */


{
    function init(){

        ejercicio1();
        ejercicio2();
        ejercicio3();
        ejercicio5();
        
    }

    //Distintas formas de acceder al atributo checked. 
    //Compruébalo en las distintas plataformas, tanto con input como con radio buttons
    function ejercicio1(){
        //Este método detecta el cambio de valor del elemento seleccionado en el DOM de nuestra web.
        $("input").change(function () {
            let $input = $(this);
            $("#ejercicio1").html(`
                .selected: <b> ${$input.selected} </b><br>
                .prop("checked"): <b>${$input.prop("checked")} </b><br>
                .attr("checked"): <b> ${$input.attr("checked")} </b><br>
                .checked(): <b> ${$input.checked} </b><br>
                .val(): <b> ${$input.val()} </b>
                `);
        }).change(); //Rescribo dependendiendo del check
    }

    //De tres 'input type="checkbox"' que te deshabilite 2 al seleccionar una de ellas
    function ejercicio2(){

        $("input[type=checkbox]").change(function () {
            if ($(this).prop("checked"))
                $("input:not(:checked").prop("disabled", true);
            else
                $("input:not(:checked").prop("disabled", false);
            });
    
    }    

    //Asociar dintintos eventos mediante .on().
    function ejercicio3(){
        
    $("#ejercicio3").on({
        mouseenter: function () {
            $("#ejercicio3").html("Joiiiiiiiiin").css("background-color", "orange");
        },

        mouseleave: function () {
            $("#ejercicio3").html("Leeeeeeeaveee").css("background-color", "green");
        },

        click: function () {
            $("#ejercicio3").html("Clickerino").css("background-color", "blue");
        },

        dblclick: function () {
            $("#ejercicio3").html("Dabol Clickerino").css("background-color", "red");
        },
        contextmenu: function(ev){
            ev.preventDefault();
            $("#ejercicio3").html("Derecho kk").css("background-color", "black");
        }
    })
    }
    //Los atributos pageX, pageY, currentTarget, timeStamp... ¿A qué objeto pertenecen? Demuestra su uso
    function ejercicio5(){

        $("#ejercicio5").mouseenter(function (evento) {
            $("#ejercicio5").html(`
                Son implementados mediante la interfaz event <br>
                Coordenada X: ${evento.pageX} <br>
                Coordenada Y: ${evento.pageY} <br>
                CurrentTarget: ${evento.currentTarget} <br>
                TimeStamp: ${evento.timeStamp}
                `);
        });
    }
    $(init);
}
