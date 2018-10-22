/**
 * Boton cerrar de muchas ventanas
 * 
 * @author Francisco Ramirez
 * 
 */
{
    
    function init(){
        let cerrar = document.getElementById("cerrar");
        cerrar.addEventListener("click", function(){

            window.close();
        });
    
    }
    window.addEventListener("load", init);
}