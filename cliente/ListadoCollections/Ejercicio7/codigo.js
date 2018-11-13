/**
 * 7.- Analiza el siguiente enlace Javascript Set vs. Array performance y responde a las siguientes preguntas con respecto al rendimiento:
 * Al añadir elementos. Métodos utilizados.
 * Al modificar elementos. Métodos utilizados.
 * Al eliminar elementos. Métodos utilizados.
 * 
 * @author Francisco Ramírez Ruiz
 */
{

    let parrafo;
    function init(){

        parrafo = document.getElementById('parrafo');

        texto();

    }

    function texto() {
        parrafo.innerHTML = `
        Método push de array es 4 veces más rápido que add de Set<br><br>

        Array.for es 2 veces más rápido en pruebas 'pequeñas' y 4 veces más en 'grandes' que set.for of()<br><br>

        Set.delete es 23 veces más rápido en pruebas grandes que array.splice.

        `;

    }
    window.addEventListener("load", init);
}

