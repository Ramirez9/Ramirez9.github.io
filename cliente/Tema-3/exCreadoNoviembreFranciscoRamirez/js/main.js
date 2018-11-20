/**
 * 
 * Haz uso de los scripts en el head del documento
 * Reproduce una página similar a la dada.
 * Los enlaces se abrirán en la misma ventana.
 * Para volver atrás haz uso del objeto predefinido visto en clase.
 * Haz uso de un archivo nuevo js para cada ejercicio.
 * 
 * @author Francisco Ramírez Ruiz
 */

{
    function init() {
      let lista = document.getElementById("lista");
      let informacion = document.getElementById("informacion");
      let azar = document.getElementById("azar");

      lista.addEventListener("click", function(ev) {
        ev.preventDefault;
        window.open("lista.html", "_self");
      });
  
      informacion.addEventListener("click", function(ev) {
        ev.preventDefault;
  
        window.open("informacion.html", "_self");
      });

      azar.addEventListener("click", function(ev) {
        ev.preventDefault;
  
        window.open("azar.html", "_self");
      });
    }
    window.addEventListener("load", init);
  }