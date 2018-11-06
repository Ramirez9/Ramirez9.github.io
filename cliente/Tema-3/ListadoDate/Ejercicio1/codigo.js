/**
 * 
 * 1.- ¿Cuántos constructores tiene el objeto predefinido Date()? Explícalos mediante ejemplos.
 * 
 * @author Francisco Ramirez Ruiz
 */
{
    function init() {
        dFecha();
    }

    let dFecha = function () {
        //Constructores
        let fec = new Date();
        let fec2 = new Date((1232423423));
        let fec3 = new Date("12/01/2018");
        let fec4 = new Date(2018, 12-01, 5, 0, 10, 20, 30);

        console.log(fec);
        console.log(fec2);
        console.log(fec3);
        console.log(fec4);

    };

    window.addEventListener("load", init);
}