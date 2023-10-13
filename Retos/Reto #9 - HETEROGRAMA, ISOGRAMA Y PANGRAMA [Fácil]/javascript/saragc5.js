/*
 * Crea 3 funciones, cada una encargada de detectar si una cadena de
 * texto es un heterograma, un isograma o un pangrama.
 * - Debes buscar la definición de cada uno de estos términos.
 * Heterograma: Un heterograma es una palabra o frase en la que ninguna letra se repite.
 * Isograma: Un isograma es una palabra o frase en la que no se repite ninguna letra
 * Pangrama: Un pangrama es una frase o sentencia que utiliza todas las letras del alfabeto al menos una vez
 */
function isHeterograma(texto){
  let resultado = null;

  //primero pasar a array y luego ver si cada i es igual a algún otro
  const caracteres = texto.split("")
  console.log(caracteres);

  
    for(let i= 0; i < caracteres.length;i++){
    if(caracteres[i] !== caracteres[i+1]){
      console.log(caracteres[i]);
      return true
    }
    else {
      return false
    }

  }

  
}
console.log(isHeterograma("casa"));
