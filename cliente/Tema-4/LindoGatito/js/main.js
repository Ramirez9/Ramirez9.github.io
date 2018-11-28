/**
 * Lindo gatito
 * Crea una clase Gato, y a partir de ella crea tantos gatos como quiera el usuario.
 * Cada gato tendrá un nombre, una fecha de nacimiento, una raza y un peso (1-15). Cada vez que crees un objeto gato aparecerá una ventana nueva con una imagen que cambiará en función de su estado (comiendo, durmiendo y jugando, que es su estado habitual). El usuario podrá averiguar la edad del gato partiendo de un evento.
 * El comportamiento es el siguiente:
 * Cuando el gato juega pierde peso
 * Cuando el gato come gana peso
 * El gato puede morir de inanición o por sobrepeso
 * Recuerda:
 * Evita las cajas de texto
 * No puedes usar ni alert ni prompt
 * Hazlo lo más dinámico posible.
 * Utiliza prototype para los métodos
 * 
 * @author Francisco Ramírez Ruiz
 */
{

    let btn;

    function init() {

        btn = document.getElementById("boton");
        btn.addEventListener("click", crearGatito);

    }

    function crearGatito(){
        window.open("gato.html","","");
      };


    window.addEventListener("load", init);
}