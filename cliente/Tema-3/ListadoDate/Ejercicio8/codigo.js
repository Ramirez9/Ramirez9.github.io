/**
 * 8.- Implementa el método esBisiesto() que devuelva si una fecha/año es bisiesto o no. En caso de que el argumento no sea una fecha, que salte una excepción. Admitirá tantos parámetros como el constructor Date(). Pruébalo con varias invocaciones fallidas (y capturadas)
 * 
 * @author Francisco Ramirez Ruiz
 */

{

    let parrafo;
    let fec;
    let anio;
    //Declaro la cadena vacía para ir acumulando
    let cadena = "";

    function init() {

        parrafo = document.getElementById("texto");
        escribir();
    }

    //Calculo si el año entrante es bisiesto
    let esBisiesto = function (str) {
        fec = new Date(str);
        if (fec == "Invalid Date")
            throw {
                message: 'El dato introducido es inválido'
            };
        else {
            anio = fec.getFullYear();

            if (((anio % 4 == 0) && ((anio % 100 != 0) || (anio % 400 == 0))))
                return "Bisiesto";
            return "NO Bisiesto";
        }
    }

    //Cadenas de los años a comprobar.
    try {
        //Si salta una excepción se acaba el programa
        cadena += "Año 2014: " + esBisiesto("2014") + "<br>";
        cadena += "Año 2015: " + esBisiesto("2015") + "<br>";
        cadena += "Año 2016: " + esBisiesto("2016") + "<br>";
        cadena += "Año 2017: " + esBisiesto("2017") + "<br>";
        cadena += "Año 2018: " + esBisiesto("2018") + "<br>";
        cadena += "Año 2019: " + esBisiesto("2019") + "<br>";
        cadena += "Año 2020: " + esBisiesto("2020") + "<br>";
        cadena += "Año Hola Mundo: " + esBisiesto("Hola Mundo");
    } catch (e) {
        //Capturo los errores.
        cadena += e.message;
    }

    //Escribo la cadena
    let escribir = function () {
        parrafo.innerHTML = cadena;
    }

    window.addEventListener("load", init);
}