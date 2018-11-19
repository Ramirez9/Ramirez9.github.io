{
    function init() {
        calcularHora();

        saludar();
    }

    function calcularHora() {
        let horaActual = document.createElement("h2");
        
        setInterval(function () {
            let date = new Date();

            horaActual.textContent = (("0" + date.getHours()).slice(-2) + ":" +
                ("0" + date.getMinutes()).slice(-2) + ":" +
                ("0" + date.getSeconds()).slice(-2));


        }, 1000);
        document.body.appendChild(horaActual);
    }

    function saludar() {
        let saluda = document.createElement("p");
        let ahora = new Date().getHours();
        if ((ahora >= 6) && (ahora <= 12)) 
            saluda.textContent = "Buenos días";
        else if ((ahora >= 13) && (ahora <= 20))
            saluda.textContent = "Buenas tardes";
            
        else
            saluda.textContent = "Buenas noches";
        
        document.body.appendChild(saluda);
        console.log(ahora);
    }

    window.addEventListener("load", init);

}