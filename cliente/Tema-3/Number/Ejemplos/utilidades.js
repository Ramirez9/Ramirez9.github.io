//5.1
numeroGrande = Number.MAX_VALUE;

//5.2
let fecha = new Date('2018,10,09');
Number(fecha);

//5.3
let numero = new Number(10);
Number.prototype.pepito = "";
numero.pepito = "Soy juanito";
numero

//5.4

Number('function')     // NaN - Cadena de caracteres
Number('100efewfew')    // NaN - Cadena de caracteres
Number('10')     // 10 - Número entero
Number('10.5')    // 10.5 - Número decimal
Number('10e-3')  // 0.01 - Número exponencial convertido (10^-3)
Number('')        // 0 - Cadena vacia
Number('0x11')    // 17 - Formato hexadecimal
Number('0b11')    // 3 - Formato binario
Number('0o11')    // 9 - Formato octal
