/**
 * Eventos de raton en canvas.
 * 
 * @author Francisco Ramirez Ruiz
 */
{

    //Declaro canvas y sus Colores
    let canvas;
    let arrayColores = [
        "#bbdefb", "#eeffff", "#8aacc8",
        "#90caf9", "#c3fdff", "#5d99c6",
        "#1565c0", "#1565c0", "#003c8f"
    ];

    let coloresAleatorios;
    function init() {

        //Obtengo el canvas por su target
        canvas = Array.from(document.getElementsByTagName("canvas"));

        //Recorro los elementos y obtengo su id
        canvas.forEach(element => {
            element.addEventListener(element.getAttribute("id"), ev => {
                // A cada canvas le añado en su evento colores aleatorios y que se dibuje de nuevo.
                coloresAleatorios = Math.floor(Math.random() * arrayColores.length);
                dibujarCanvas(element, coloresAleatorios, ev.offsetX, ev.offsetY, ev.button, ev.buttons);
            });
            element.addEventListener("contextmenu", eliminarMenu);
            //Dibujo la primera vez los canvas, sino salen vacíos.
            dibujarCanvas(element);
        });

    }
    /**
     * Elimino el menú contextual
     * @param {*} ev 
     */
    function eliminarMenu(ev) {
        ev.preventDefault();
    }
    /**
     * Dibujo el canvas, escribiendo y cambiando su color.
     */
    function dibujarCanvas(canvas, coloresAleatorios, x, y, button, buttons) {

        if (canvas.getContext) {
            let contexto = canvas.getContext('2d');
            //Si el número totald de los argumentos es 1, coloco su primer color
            if (arguments.length === 1)
                contexto.fillStyle = "#5d99c6";
             else 
                contexto.fillStyle = arrayColores[coloresAleatorios];
            
            contexto.fillRect(0, 0, 300, 150);
            contexto.fillStyle = "black";
            //Escribo el id de cada canvas, su evento en este caso
            contexto.fillText(canvas.getAttribute("id"), 10, 20);

            //Si sus argumentos son mayores de 1 los muestro, sino salen undefined
            if (arguments.length > 1) {
                contexto.fillText("x --> " + x, 100, 40);
                contexto.fillText("y --> " + y, 100, 70);
                contexto.fillText("button --> " + button, 100, 100);
                contexto.fillText("buttons --> " + buttons, 100, 130);
            }

        }
    }

    window.addEventListener("load", init);

}