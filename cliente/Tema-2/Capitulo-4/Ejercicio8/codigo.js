/**
Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve
como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el
resultado devuelto por la función
 */

{
    let parImpar = function(numero) {
        if ((numero % 2) == 0)
            return "El número es par";
        return "El número es impar";
    }

    console.log(parImpar(prompt("Escriba su numero: ")));
}