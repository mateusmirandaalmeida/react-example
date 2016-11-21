import React from 'react'

const Calculator = React.createClass({
  getInitialState(){
    return {numberOne: 0, numberTwo: 0}
  },
  sum(){
    var numberOne = this.refs.numberOne;
    var numberTwo = this.refs.numberTwo;
    if(numberOne.value && numberTwo.value){
      alert('Somaaaaaaaaaaaa de ' + numberOne.value
        + ' + '
        + numberTwo.value
        + ' = ' + (Number(numberOne.value)+Number(numberTwo.value)));
        return;
    }



  },
  render(){
    return <div>
      <input ref="numberOne" type="number" placeholder="Primeiro numero"/>
      <input ref="numberTwo" type="number" placeholder="Segundo numero"/>
      <button onClick={this.sum}>SOMAR</button>
    </div>;
  }
})

export default Calculator
