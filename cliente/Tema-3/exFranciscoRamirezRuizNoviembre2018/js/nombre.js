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

    let set;

    let regex = /(\s?[a-zA-Záéíóúñ]+\s?) (\s?[a-zA-Záéíóúñ]+\s?)+,(\s?[a-zA-Záéíóúñ]+\s?)$/g;

    function init() {

        name = document.getElementById("name");
        lastName = document.getElementById("lastName");
        text = document.getElementById("text");
        back = document.getElementById("back");
        newMsg = document.getElementById("newMsg");

        set = new Set();

        text.addEventListener("blur", validation)
        back.addEventListener("click", backIndex);
    }

    function ExceptionError(str, name) {
        this.message = str;
        this.name = name;
    }

    function validation() {
        
        let values = regex.exec(text.value);

        try {
            regex.exec(text.value);
            if (regex.test(text.value)) {
                if (values !== null) {
                    //Vacío el span por si salto el mensaje de error.
                    newMsg.textContent = "";
                    //Vacío el valor del input text si el formato es correcto
                    text.value = "";
                    //Colo unoo vacío sino, repite los apellidos
                    [ , lstName1, lstName2, xName] = values;
                    name.textContent = `Nombre: ${xName}`;
                    lastName.textContent = `Apellido: ${lstName1 +" "+ lstName2}`;
                }
            } else {
                let myException = new ExceptionError("Error. Formato correcto: Cuadrado Perfecto, Anacleto",
                    "error"
                );
                throw myException;
            }
            //Ejerc.- 3 Repetidos
            repets(set, newMsg);

        } catch (e) {
            newMsg.textContent = e.message;
        }
    }
    /**
     * Vuelvo atrás con el método back de history
     */
    function backIndex() {
        window.history.back();
    }

    /**
     * Compruebo si la identidad está repetida o no
     * @param {*} set 
     * @param {*} newMsg 
     */
    function repets(set, newMsg) {
        if (!set.has(xName.trim()) && !set.has(lstName1.trim()) && !set.has(lstName2.trim())) {
            set.add(xName.trim());
            set.add(lstName1.trim());
            set.add(lstName2.trim());
        }
        else {
            newMsg.textContent += "REPETIDO";
        }
    }
    

    window.addEventListener("load", init);
}

