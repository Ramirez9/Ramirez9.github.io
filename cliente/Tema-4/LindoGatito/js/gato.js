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
    //Fecha actual
    let fechaActual = new Date();

    /**
     * Constructor de gato
     * nombre, fecha raza y peso
     */
    function Gato(nombre, fecha, raza, peso) {
      this.nombre = nombre;
      this.fecha = fecha;
      this.raza = raza;
      this.peso = peso;
    }

    //Disminuyo su peso -1 y compruebo su estado.
    Gato.prototype.jugarGatito = function() {
      if (this.peso > 1) 
        this.peso--;
      else 
        this.isMuerto = true;
    };
  
    //Aumento su peso +1 y comrpeubo su estado
    Gato.prototype.comerGatito = function() {
      if (this.peso < 15) 
        this.peso++;
      else 
        this.isMuerto = true;
    };
  
    /**
     * Obtengo la edad del gatito
     */
    Gato.prototype.obtenerEdad = function() {
     
      let fecha = new Date(this.fecha.toLocaleString());

      return fechaActual.getFullYear() - fecha.getFullYear();;
    };

    /**
     * Pongo al gatito a mimir
     */
    Gato.prototype.dormir = function() {
        this.isDurmiendo = true;
      };

    //Estados del gato, muerto o durmiendo
    Gato.prototype.isMuerto = false;
    Gato.prototype.isDurmiendo = false;
  }