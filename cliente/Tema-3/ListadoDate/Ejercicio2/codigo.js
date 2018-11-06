/**
 * 2.- Indica la utilidad de Date.now();
 * @author Francisco Ramirez Ruiz
 */

{
    function init() {
        dFecha();
    }

    let dFecha = function () {
        let fec = Date.now();

        console.log(fec);
    };

    window.addEventListener("load", init);
}