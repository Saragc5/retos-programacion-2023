/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * if num % 3 === 0 mostrar fizz
 * - Múltiplos de 5 por la palabra "buzz".
 * if num % 5 === 0 mostrar buzz
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 * if num % 3 === 0 && num % 5 === 0 mostrar fizzbuzz
 */



function fizzBuzz(){

  //Mostrar número del 1 al 100
  const arrayDeNums = []
  for(let i=1; i <= 100; i++){
    arrayDeNums.push(i)
    console.log("1",arrayDeNums);
  }

  //Que me los muestre con un salto de línea
  resultado === arrayDeNums.forEach(num => {
   
    if(num % 3 === 0 && num % 5 === 0){
      console.log("fizzbuzz");
    }
    else if(num % 3 === 0){
      console.log("fizz");
    }
    else if(num % 5 === 0){
      console.log("buzz");
    }    
    else if(num % 3 !== 0 && num % 5 !== 0){
      console.log(num);
    }
  })
  

  
}

console.log(fizzBuzz());