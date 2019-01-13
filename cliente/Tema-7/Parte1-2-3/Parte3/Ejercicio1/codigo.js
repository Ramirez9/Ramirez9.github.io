/**
 * Parte 3 - Ejercicio 1
 * 
 * @author Francisco Ramírez Ruiz
 */
function init() {
    $("#boton").click(function() {
        //Hago uso de .val
      let selectorEscrito = $("#camposelector").val();
      if (selectorEscrito == "") {
        alert("Escribe algo en el campo de texto");
      } else {
        elementosSeleccionados = $(selectorEscrito);
        elementosSeleccionados.fadeOut("slow", function() {
          elementosSeleccionados.fadeIn("slow");
        });
      }
    });
  }
  $(init);