/** 2.Escreva um algoritmo que dos 100 primeiros números inteiros some 
 * apenas os números ímpares.* */

const numbers = [...Array(100).keys()];

const result = numbers.reduce((total, current) => {
  return current % 2 !== 0 ? total + current : total;
});

console.log(result);
