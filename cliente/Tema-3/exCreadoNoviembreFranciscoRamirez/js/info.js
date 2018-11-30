/**
 * Todo el contenido será escrito en el código js
 * Muestra información de tu url con el objeto predefinido visto en clase, mínimo de 4.
 * Haz uso del forEach para tal apartado.
 * Encima de la lista de la información mostrará la edad del usuario en Años, meses y días. Haz uso de template.
 * Uso de Set. Debajo de la lista de url añadir la asignaturas con su correspondiente profesor y recorrerlas con for of.
 * Teniendo en cuenta el total de las listas muéstralo
 * 
 * @author Francisco Ramírez Ruiz
 */

{
    //Array de location
    let location = [
        "Protocol: " + window.location.protocol,
        "Path: " + window.location.pathname,
        "Href: " + window.location.href,
        "Origin: " + window.location.origin,
    ];

    //Declaro las variables
    let back;
    let lista;
    let set;

    
    /**
     * Init, calculo la edad
     * Creo la lista de urls
     * Y el set de clase.
     * 
     */
    function init() {
        back = document.getElementById("atras");
        lista = document.getElementsByTagName("li");

        set = new Set();

        calcularEdad();
        crearLista();
        clase();
       
        crearElemento("El total de las listas es de : " + lista.length);

        volverAtras();

    }

    /**
     * Creo la lista y la recorro con forEach
     */
    function crearLista() {
       
        let inicio = document.createElement("ul");

        let elemento;
        let texto;

        //Recorro el array de localizaciones 
        location.forEach(function(value){

            elemento = document.createElement("li");
            texto = document.createTextNode(value);
        
            elemento.appendChild(texto);
            inicio.appendChild(elemento);
        
        });
        document.body.appendChild(inicio);

    }

    /**
     * Creo el elemento para mostrar el tamaño de la lista
     */
    let crearElemento = (texto) => {
        let nodo = document.createElement("p");
        nodo.appendChild(document.createTextNode(texto));
        document.body.appendChild(nodo);
    }

    /**
     * Calculo la edad en años, meses y días
     */
    function calcularEdad(){

        let edad = document.createElement("h3");
        let hoy = new Date();
        let nacimiento = new Date('1997, 01, 11');
        let dias = ((((hoy-nacimiento)/1000)/60)/60)/24;
        let meses = parseInt((dias%365)/30);
        let anios = parseInt(dias/365);
        dias = parseInt((dias%365)%30);

        edad.textContent= `Mi edad es ---> ${anios} años ${meses} meses ${dias} días.`

        document.body.appendChild(edad);
       
    }

    /**
     * Haciendo uso del objeto Set añado la lista y la recorro con value
     */
    function clase(){

        let titulo = document.createElement("h3");
        let listado = document.createElement("ul");
        
        titulo.textContent = "Asignaturas y profesores";

        set.add('DWECL, Lourdes');
        set.add('DWES, José');
        set.add('DIW, Jaime');
        set.add('DAW, Mari Carmen');

        for (let value of set) {

            elemento = document.createElement("li");
            texto = document.createTextNode(value);
        
            elemento.appendChild(texto);
            listado.appendChild(elemento);

        }
        document.body.appendChild(titulo);
        document.body.appendChild(listado);
    }

    function volverAtras() {
        back.addEventListener("click", ev => {
            ev.preventDefault;
            history.back();
        });
    }
    window.addEventListener("load", init);
}