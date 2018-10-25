/**
 * 2.El objeto window dispone de las propiedades scrollX, scrollY y scrollbars. 
 * Muéstralos reaccionando al evento scroll sobre window.

 * @author Francisco Ramírez Ruiz
 * 
 */
{
    function init(){

        let scrollX = document.getElementById("scrollX");
        let scrollY = document.getElementById("scrollY");
        let scrollbars = document.getElementById("scrollbars");

        crearScrolls();

        window.addEventListener("scroll", function (){

            scrolls();

        });

        /**
         * Creo el texto INICIAL en 0:0
         */
        function crearScrolls() {
            scrollX.innerHTML = "ScrollX: ";
            scrollY.innerHTML = "<b>ScrollY: ";
            scrollbars.innerHTML = "Scrollbars: ";
        }

        /**
         * Uso this para referenciar a su eje
         * Reescribo el valor, porque al mover el scroll debo de mantener el texto
         */
        function scrolls() {
            scrollX.innerHTML = "ScrollX: " + this.scrollX;
            scrollY.innerHTML = "ScrollY: " + this.scrollY;
            scrollbars.innerHTML = "Scrollbars: " + this.scrollbars.visible;
        }
    }

    window.addEventListener("load", init);

}