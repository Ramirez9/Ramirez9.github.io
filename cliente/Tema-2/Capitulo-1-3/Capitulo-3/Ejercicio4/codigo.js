{
    //Array proporcionado.
    var valores = [true, 5, false, "hola","adios", 2];

    //Condición If, para ver si es mayor Hola o Adios
    if (valores[3].length > valores[4].length) {
		alert(valores[3] + " es mayor");
	} else {
		alert(valores[4] + " es mayor");
	}
    //Para que sea 1 tienen que ser iguales
    alert(valores[0] && valores[2]);
    
    //Con que un valor sea 1, es true.
	alert(valores[0] || valores[2]);

	alert("Suma " + valores[1]+valores[5]);
	alert(valores[1]-valores[5]);
	alert("Multiplicacion " + valores[1]*valores[5]);
	alert("División " + valores[1]/valores[5]);
	alert("Módulo " + valores[1]%valores[5]);
}