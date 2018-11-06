/**
 * 7.- Implementa el método diaDeLaSemana() que devuelva 'lunes, martes... domingo' del día actual o de la fecha indicada (similar al constructor)
 * 
 * @author Francisco Ramirez Ruiz
 */
{

    let parrafo;
    let fecha

    function init(){

        parrafo = document.getElementById("texto");

       escribir();
    }

    //Obtengo el día actual de la semana
    let diaDeLaSemana = function () {
        let semana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
        let dia = new Date();
        return semana[dia.getDay() - 1];
    }

    //Escribo en el texto el día recogido
    let escribir = function () {
    fecha = new Date();
    parrafo.innerHTML = "Hoy es: " + diaDeLaSemana(fecha.getDay());
    }

    window.addEventListener("load", init);
}