{
    function init(){
        let form = document.getElementById("modificar");
        form.addEventListener("click", verForm);

    }

    function verMenu(){
        let menu = document.getElementById("abrirF");
    
        if(menu.className == "")
            menu.className = "abrirF";
        else
            menu.className = "";
    }
    window.addEventListener("load", init)
}