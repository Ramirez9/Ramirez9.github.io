/**
 Definir una función que determine si la cadena de texto que se le pasa como parámetro es un
palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de
palíndromo complejo: "La ruta nos aporto otro paso natural".
 */
{
    let palindromo = function(cadena){
        //Pasamos todo a minúsculas primero
        cadena = cadena.toLowerCase();
        //El metodo join crea y devuelve una nueva cadena
        //Split divide la cadena en subcadenas.
        let cadenaAlReves = cadena.split("").reverse().join("");
        
        if(cadena === cadenaAlReves)
            return "Es un palíndromo";
        return "No es un palíndromo";
    }
    console.log(palindromo(prompt("Escriba su cadena")));
}
