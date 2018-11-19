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