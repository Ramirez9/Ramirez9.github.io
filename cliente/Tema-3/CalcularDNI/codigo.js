/**
 * 
 * Realiza la comprobación del dni.
 *
 * Para ello, crea un formulario con tres campos: nombre, dni y fecha de nacimiento.
 * 
 * Al perder el foco de la caja de texto del DNI se realizará la comprobación. 
 * Aparecerá un mensaje (Derecha o abajo) en rojo, indicando:
 *
 * formato incorrecto
 * letra incorrecta
 * introduce dni (si está vacío)
 * Utiliza los grupos para capturar el número y la letra. 
 * La letra puede estar en mayúscula o minúscula, separado o no por espacio/guión
 * 
 * @author Francisco Ramirez
 */

{

    let entrada;
    let error;

    const arrayLetras = [
      "T",
      "R",
      "W",
      "A",
      "G",
      "M",
      "Y",
      "F",
      "P",
      "D",
      "X",
      "B",
      "N",
      "J",
      "Z",
      "S",
      "Q",
      "V",
      "H",
      "L",
      "C",
      "K",
      "E"
    ];
  
    function init() {
      entrada = document.getElementById("entrada");
      error = document.getElementById("texto");
  
      //El evento blur se dispara cuando se pierde el foco.
      entrada.addEventListener("blur", validateDni);
      entrada.addEventListener("focus", () => {
        error.textContent = "";
         
      });
    }
  
    let validateDni = function() {
      let dxpresion = /(\d{8})[\s-]?([TRWAGMYFPDXBNJZSQVHLCKE])$/i;
  
      if (entrada.value === "") {
        error.textContent = "Introduzca su DNI";
        error.style.color = "red";
      } else {
        if (!dxpresion.test(entrada.value)) {
            error.textContent = "Forma de DNI incorrecto";
            error.style.color = "red";
        } else {
            error.textContent = "Formato de DNI correcto";
            error.style.color = "green";

          //método exec para comprobar la secuencia
          let execDNI = dxpresion.exec(entrada.value);
          //Uso las subcadenas para obtener el número y la letra
          let numero = execDNI[1];
          //Convierto la letra a mayúscula
          let letra = execDNI[2].toUpperCase();
          let array= arrayLetras[parseInt(numero) % 23].toUpperCase();
  
          //Compruebo si la letra está dentro del array de letras
          if (letra != array) {
            error.textContent = "La letra es inválida";
            error.style.color = "red";

          }
        }
      }
    };
  
    window.addEventListener("load", init);
  }