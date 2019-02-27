/**
 * 
 * Formulario usando el plugin creado
 * 
 * @author Francisco Ramírez Ruiz
 */
{

  function init() {

    $("form").examen({

      /**
       * Expresiones predefinidas por el usuario.
       * Mis expresiones estandaras se llaman expresiones, si las quisiera machacar, solamente
       * debería de llamar al objeto así, en cambio si lo llamo con otro nombre
       * expresiones2, determinarás las personalizadas.
       */
      expresiones: {
        nombre: [/^[a-zA-Zñúíóáé]{3,}([ ][a-zA-Zñúíóáé]{3,}){0,20}$/, "Mínimo 3 caracteres para el nombre."],
        apellido: [/^[a-zA-Zñúíóáé]{3,}([ ][a-zA-Zñúíóáé]{3,}){0,20}$/, "Mínimo 3 caracteres para el apellido."],
        email: [/^[a-zA-Zñ]{1,10}([.][a-zA-Zñ]{1,10}){0,3}[@][a-z]{1,6}([\.][a-z]{1,3}){1,3}$/, "Correo inválido. Ejemplo:examen@exm.c"]
      },

      //css: {
      //"color": "white",
      //"backgroundcolor": "blue",
      //"border": "2px solid blue"
      // }
    });

  }

  $(init)
}