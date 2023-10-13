/*
 * Escribe un programa que reciba un texto y transforme lenguaje natural a
 * "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
 *  se caracteriza por sustituir caracteres alfanuméricos.
 * - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/) 
 *   con el alfabeto y los números en "leet".
 *   (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
 */

let alphabet = {
  "a": "4",
  "b": "I3",
  "c": "[",
  "d": ")", 
  "e": "3",
  "f": "|=",
  "g": "&",
  "h": "#",
  "i": "1",
  "j": ",_|",
  "k": ">|",
  "l": "1",
  "m": "/\/\/",
  "n": "^/",
  "o": "0",
  "p": "|*",
  "q": "(_,)",
  "r": "I2",
  "s": "5",
  "t": "7",
  "u": "(_)",
  "v": "\/",
  "w": "\/\/",
  "x": "><",
  "y": "j",
  "z": "2",
  1: "L",
  2: "R",
  3: "E",
  4: "A",
  5: "S",
  6: "b",
  7: "T",
  8: "B",
  9: "g",
  0: "o",
}

function hackerLanguage(text){
  let resultado = "";
  let resultadoHacker = [];

  //convertir el texto en array de caracteres
  const caracteres = text.toLowerCase().split("");
  console.log(caracteres);
  
  //comparar el array del texto con el array de alphabet y reemplazarlo
  for(let i = 0; i < caracteres.length;i++){
    const clave = caracteres[i];
    if(alphabet.hasOwnProperty(clave)){
      resultadoHacker.push(alphabet[clave]);
    }
    else{
      resultadoHacker.push(" ")
    }
  }
 
  //volver a unirlo todo a un string
  resultado = resultadoHacker.join(" ");
   
  return resultado
}
console.log(hackerLanguage("Texto a convertir, 18 de mayo"));