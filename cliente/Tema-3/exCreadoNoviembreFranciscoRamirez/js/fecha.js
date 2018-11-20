/**
 * Sin escribir código en el html.
 * La hora será la actual y se irá actualizando continuamente
 * Debajo de la hora habrá un mensaje.
 * Que sueño tengo uwu… Seis y Doce
 * ¡¡Ya es por la tarde!! Una y Ocho
 * ZzZzZzzzZz ¡Es la hora de dormiiiir! 
 * El código deberá de ser visto en cada página html
 * 
 * 
 * @author Francisco Ramírez Ruiz
 */

{
    /**
     * Ininit, invoco los dos métodos.
     */
    function init() {

        calcularHora();
        saludar();
    }

    /**
     * Creo los elementos.
     * Calcula la hora y la muestra en horas, minutos, segundos
     */
    function calcularHora() {
        let horaActual = document.createElement("h2");
        
        setInterval(function () {
            let date = new Date();

            horaActual.textContent = (("0" + date.getHours()).slice(-2) + ":" +
                ("0" + date.getMinutes()).slice(-2) + ":" +
                ("0" + date.getSeconds()).slice(-2));

        }, 1000);
        document.body.appendChild(horaActual);
    }

    /**
     * Creo los elementos.
     * Creo un objeto fecha nuevo y muestro un mensaje dependiendo de la hora
     */
    function saludar() {
        let saluda = document.createElement("p");
        let ahora = new Date().getHours();
        if ((ahora >= 6) && (ahora <= 12)) 
            saluda.textContent = "Que sueño tengo uwu…";
        else if ((ahora >= 13) && (ahora <= 20))
            saluda.textContent = "¡¡Ya es por la tarde!! ";
        else
            saluda.textContent = "ZzZzZzzzZz ¡Es la hora de dormiiiir!";
        
        document.body.appendChild(saluda);
        console.log(ahora);
    }

    window.addEventListener("load", init);

}