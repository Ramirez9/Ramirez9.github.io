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
                nombre: [/b/,"Fallo en nombre"],
                apellido: [/b/, "Fallo en apellido"],
                email: [/b/, "Fallo en correo"],
                textarea: [/b/, "Fallo en textarea"]
              }
            });

    }
    
    $(init)
}