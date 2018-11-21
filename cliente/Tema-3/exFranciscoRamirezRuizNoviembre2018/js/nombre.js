/**
 * Ejercicio 2: Apellidos y nombre
 * 
 * • Extrae el nombre y los apellidos introducidos en la caja de texto
 * • Introduce tu nombre y apellidos separados por coma.
 * • Al perder el foco se limpiará la caja de texto y aparecerán en los div indicados.
 * • En caso de no cumplirse el formato se lanzará una excepción con el objeto
 * predefinido JavaScript.
 * • En tal caso se mostrará el mensaje de error: “Error. Formato correcto: Cuadrado
 * Perfecto, Anacleto”
 * • Para extraer nombre y apellidos usa los grupos de las expresiones regulares y el
 * destructuring.
 * • Usa el destructuring también al devolver los valores.
 * • Entradas válidas:
 *      ◦ Peláez del Cariño, Rocío
 *      ◦ Redondo Carrillo, Manuela
 *      ◦ Carrillo, Manuela
 *      ◦ Carrillo , Manuela
 * • Valores inválidos
 *      ◦ 1 2, 3
 *      ◦ Carrillo, Manuela Fernández, Antonio
 * 
 * @author Francisco Ramírez Ruiz
 * 
 */
{

    /*
     * Declaro variables para los correspondientes ids de nombre.html
     */
    let name;
    let lastName;
    let text;
    let back;
    let newMsg;

    //Creo el objteo Set fuera de init
    let set = new Set();

    //Hago uso de la expresión regular para todas las posibles variables.
    let regex = "^((?:[a-záéíóúñ]{1,})(?:[ ]{1,}(?:[a-záéíóúñ]{1,}))*)"+
    "[ ]*,[ ]*"+
    "([a-záéíóúñ]{1,})$";

    //Insensible a mayúsuclas y minúsculas
    let regexCadena = new RegExp(regex, 'i');

    function init() {

        name = document.getElementById("name");
        lastName = document.getElementById("lastName");
        text = document.getElementById("text");
        back = document.getElementById("back");
        newMsg = document.getElementById("newMsg");

        text.addEventListener("blur", validation)
        back.addEventListener("click", backIndex);
    }

    /**
     * Saco la capa de presentacion con la de negocio
     */
    function validation() {
        
        //let values = regex.exec(text.value);

        /*
         * Cambios, repetidos doble exec.
         * Obtengo los valores del metodo obtenerDatos
         */
        try{
            let values = text.value;
            let[xNombre, xApellidos] = obtenerDatos(values);

            //Con set compruebo si tengo los datos introducidos.
            //Hacia uso de  repets(set, newMsg); ya no es necesario
            if(set.has(xNombre + " " + xApellidos))
                newMsg.textContent = "REPETIDO";
            else
                newMsg.textContent = "";
            
            set.add(xNombre + " " + xApellidos);
            //Escribo el contenido de nuevo con su valores
            name.textContent = "Nombre: " + xNombre;
            lastName.textContent = "Apellidos: " + xApellidos;
            values = "";

        }catch(e){
            //Elimino mi Exception creada y la capturo en obtenerDatos
            name.textContent = "Nombre: ";
            lastName.textContent = "Apellidos: ";
            newMsg.textContent = e.message;
        }
        // try {
        //     regex.exec(text.value);
        //     if (regex.test(text.value)) {
        //         if (values !== null) {
        //             newMsg.textContent = "";
        //             text.value = "";
        //             [ , lstName1, lstName2, xName] = values;
        //             name.textContent = `Nombre: ${xName}`;
        //             lastName.textContent = `Apellido: ${lstName1 +" "+ lstName2}`;
        //         }
        //     } else {
        //         let myException = new ExceptionError("Error. Formato correcto: Cuadrado Perfecto, Anacleto",
        //             "error"
        //         );
        //         throw myException;
        //     }
        //     repets(set, newMsg);
        // } catch (e) {
        //     newMsg.textContent = e.message;
        // }
    }
    /**
     * Vuelvo atrás con el método back de history
     */
    function backIndex() {
        window.history.back();
    }

    /**
     * Obtengo el nombre y los apellidos 
     * @param {*} values 
     */
    function obtenerDatos(values){
        try {
            //Realizo el destructuring separando las capas de negocio
            let [, xApellidos, xNombre] = regexCadena.exec(values.trim());
            return [xNombre, xApellidos.replace(/[ ]+/g, " ")];

        } catch (e) {
            throw new Error('Error. Formato correcto: Cuadrado Perfecto, Anacleto');
        }
    }

    // function repets(set, newMsg) {
    //     if (!set.has(xName.trim()) && !set.has(lstName1.trim()) && !set.has(lstName2.trim())) {
    //         set.add(xName.trim());
    //         set.add(lstName1.trim());
    //         set.add(lstName2.trim());
    //     }
    //     else {
    //         newMsg.textContent += "REPETIDO";
    //     }
    // }

    window.addEventListener("load", init);
}

