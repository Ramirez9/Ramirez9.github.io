/**
 Definir una función que muestre información sobre una cadena de texto que se le pasa como
argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada
sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

 */
{
    let cadena = function(cadena){
        if(cadena === cadena.toUpperCase())
            return "Es solo de mayúsculas";
        if(cadena === cadena.toLowerCase())
            return "Es solo de minúsculas";

        return "Tiene mayúsculas y minúsculas";

    }

    console.log(cadena(prompt("Escriba su cadena")));
}