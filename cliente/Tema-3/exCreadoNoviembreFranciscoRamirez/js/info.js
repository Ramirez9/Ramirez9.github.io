{

    let location = [
        "Protocol: " + window.location.protocol,
        "Path: " + window.location.pathname,
        "Href: " + window.location.href,
        "Origin: " + window.location.origin,
    ];

    let back;

    function init() {
        crearLista();

        back = document.getElementById("atras");

        back.addEventListener("click", ev => {
            ev.preventDefault;
            history.back();
          });

    }

    function crearLista() {
       
        let inicio = document.createElement("ol");

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
    window.addEventListener("load", init);
}