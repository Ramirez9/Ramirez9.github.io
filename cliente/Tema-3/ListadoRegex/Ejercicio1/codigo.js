/**
 * 1.-Indica las distintas formas de crear expresiones regulares.
 * @author Francisco Ramirez Ruiz
 */
{
    function init() {
      cExpresion();
    }
  
    let cExpresion = function() {
      //Representación literal
      let expresion = /ab+c/;
  
      //Llamando a la función constructura del objeto
      let expresion2 = new RegExp('ab+c');
    };
  
    window.addEventListener("load", init);
  }