/**
 * 3.- Indica el formato del parámetro cadena del método Date.parse().

 * @author Francisco Ramirez Ruiz
 */
{
    function init() {
        dFecha();
    }

    let dFecha = function () {
        let fec = Date.parse("Jan, 20, 2018");

        console.log(fec);
    };

    window.addEventListener("load", init);
}