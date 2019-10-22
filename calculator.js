/** 1.Crie uma classe Calculadora utilizando conceitos de programação 
 * orientada a objetos, que aceite dois números no construtor e tenha os 
 * seguintes métodos adicionar(), subtrair(), multiplicar(), dividir() 
 * que retornem as operações citadas sobre os dois argumentos informados.* */

class Calculator {

  constructor(numberOne, numberTwo){
    this.numberOne = numberOne;
    this.numberTwo = numberTwo;
  }

  sum(){
    return this.numberOne + this.numberTwo;
  }

  subtract(){
    return this.numberOne - this.numberTwo;
  }

  multiply(){
    return this.numberOne * this.numberTwo;
  }

  divide(){
    return this.numberOne / this.numberTwo;
  }

}
