/**
 * 5. Reloj. Crea una página que cada segundo te muestre actualizado un reloj digital del tipo "22:14:09 h"
 *  (usa timing events del objeto window)
 * 
 * 
 * @author Francisco Ramirez
 */
{
    function init() {
        calcularHora();
    }

    //Set Interval trabaja en milisegundos 1000 = 1 segundo.

    

    function calcularHora() {
        let inicio = document.createElement("p");
        let color = document.createElement("h1");
        setInterval(function () {
           
            let date = new Date();
            /**
             * GetHours -> Horas
             * GetMinutes -> Minutos
             * GetSecons -> Segundos
             * Colocamos "0" delante para un buen formato
             * 
             * Slice indica la cantidad de números, como queremos el formato
             * 22:10:50h selecionaremos -2
             */
            color.textContent = (("0" + date.getHours()).slice(-2) + ":" +
                ("0" + date.getMinutes()).slice(-2) + ":" +
                ("0" + date.getSeconds()).slice(-2) + " h");
                inicio.appendChild(color);
                
        }, 1000);
        document.body.appendChild(inicio);
       
    }
    window.addEventListener("load", init);
}