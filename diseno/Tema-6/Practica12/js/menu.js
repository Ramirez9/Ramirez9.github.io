{
    function init(){
        let img = document.getElementById("menu");
        img.addEventListener("click", verMenu);

    }

    function verMenu(){
        let menu = document.getElementById("nav");
    
        if(menu.className == "")
            menu.className = "abrir";
        else
            menu.className = "";
    }
    window.addEventListener("load", init)
}