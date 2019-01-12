{
    //Funcion ver formulario
    function verFormulario(){
		let form = document.getElementById("formulario");

        //La clase busquedaCerrar dispone de display:none
		if(form.className == "busquedaCerrar")
			form.className = "busqueda";
		else
			form.className = "busquedaCerrar";
    }

    //Llamo a los dos botones que poseo con su respectivo evento
    function init(){
        //Movil
		let edit = document.getElementById("editar");
            edit.addEventListener("click", verFormulario);
            
        //Tablet PC
        let boton = document.getElementById("edBoton");
        boton.addEventListener("click", verFormulario);

    }
    window.addEventListener("load", init)
}