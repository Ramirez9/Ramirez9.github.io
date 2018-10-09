{
    let numero = new Number(5.4778);

    numero.toExponential(10); // "5.4778000000e+0"
    numero.toFixed(7); //.4778000"
    numero.toLocaleString('en'); //"5.478" (Redondea)
    numero.toLocaleString('es'); //"5,478" (Redondea)
    numero.toPrecision(2); // "5.5"
    numero.toString(); //"5.4778"
    numero.valueOf(); // 5.4778

}