
//Number.isFinite

function numero(x) {
    if (Number.isFinite(10000 / x)) {
      return 'Finito';
    }
    return 'Infinito!';
  } 

  numero(9);
  numero(0);


  //Number.isInteger()
  function prueba(a, b) {
    if (Number.isInteger(a / b)) {
      return 'Soy entero!';
    }
    return 'Soy un decimal :(';
  }
  prueba(10, 5); 
  prueba(5, 10);
  

//Number.isNaN()
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0)       // true
Number.isNaN(NaN);        // true


Number.isNaN(10);         // false
Number.isNaN("10");       // false
Number.isNaN("011.1100"); // false
Number.isNaN(undefined);  // false
Number.isNaN("Holaaa");   // false
Number.isNaN("NaN");      // false
Number.isNaN({});         // false
Number.isNaN(true);       // false
Number.isNaN(null);       // false
