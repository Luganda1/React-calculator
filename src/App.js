import React, { Component } from 'react'
// import Button from "./components/Button";
import Input from "./components/Input";
// import ClearBtn from "./components/ClearBtn"
import * as math from "mathjs"
import Keypads from "./components/Keypad";

const operators = [ "+", "-", "*", "/"];


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input : "",
      result: [],
      // prevResult: []
    }
  }






  render() {

    return (
      <div className="app">
      <div className="calc-wrapper">
          <h2>Tony's Calculator</h2>
          <div id="display" >
          <Input input={this.state.input} />
          </div>
          <Keypads onClick={this.onClick}/>
      </div>
  </div>
    )









/*

  
  onClick = button => {
    // const {name, value} = button.target;
    
    var text = this.state.input;
    let lastChar = text.charAt(text.length - 1);
    const isOperator = operators.indexOf(button) !== -1

    if(button === "="){
        this.calculate()
    }

    else if(button === "C"){
        this.reset()
    }
    else if(button === "CE"){
        this.backspace()
    }

    else if (isOperator && operators.indexOf(lastChar) !== -1) {
      text = text.substr(0, text.length - 1) + button;
      this.setState({input: this.state.input})
    }

    else {
        this.setState({
            input: this.state.input + button
        })
    }
};


calculate = (prevState) => {
    try {
      // const input = (eval(this.state.input) || "" ) + ""
        this.setState({
            // eslint-disable-next-line
            // input: (eval(this.state.input) || "" ) + "",
            input:  Math.round(eval(this.state.input) * 10000) / 10000,
            // result: [...prevState.result, this.state.input + "  "],
            // prevResult: [...prevState.prevResult, + input]
        })
    } catch (error) {
      console.log(error);
        this.setState({
            input: "error",
            // result: "error",
            // prevResult: "error"
        })

    }
};

reset = () => {
    this.setState({ 
        input: "0",
        reset: []
    })
};

backspace = () => {
    this.setState({
        input: this.state.input.slice(0, -1)
    })
};


// handleDigit(digit) {
//   const { input } = this.state;
//   // ! add the digit only if the input display is different from '0'
//   // this to avoid leading 0s
//   this.setState({
//     input: input !== '0' ? `${input}${digit}` : digit,
//   })
// }



  
  render() {

    return (
      <div className="app">
      <div className="calc-wrapper">
          <h2>Tony's Calculator</h2>
          <div id="display" >
          <Input input={this.state.input} />
          </div>
          <Keypads onClick={this.onClick}/>
      </div>
  </div>
    )
*/
    // return (
    //   <div className="app">
    //     <div className="calc-wrapper">
    //       <Input input={this.state.input} />
    //         <div className="row">
    //           <Button handClick={this.handleClick}>7</Button> 
    //           <Button handClick={this.handleClick}>8</Button> 
    //           <Button handClick={this.handleClick}>9</Button> 
    //           <Button handClick={this.handleClick}>/</Button> 
    //         </div>
    //         <div className="row">
    //           <Button handClick={this.handleClick}>4</Button> 
    //           <Button handClick={this.handleClick}>5</Button> 
    //           <Button handClick={this.handleClick}>6</Button> 
    //           <Button handClick={this.handleClick}>X</Button> 
    //         </div>
    //         <div className="row">
    //           <Button handClick={this.handleClick}>1</Button> 
    //           <Button handClick={this.handleClick}>2</Button> 
    //           <Button handClick={this.handleClick}>3</Button> 
    //           <Button handClick={this.handleClick}>-</Button> 
    //         </div>
    //         <div className="row">
    //           <Button handClick={this.backspace}>CE</Button> 
    //           <Button handClick={this.handleClick}>0</Button> 
    //           <Button handClick={this.handleClick}>.</Button> 
    //           <Button handClick={this.handleClick}>+</Button> 
    //         </div>
    //         <div className="row">
    //         <ClearBtn handClear={() => this.setState({input: ""})} >Clear</ClearBtn>
    //         <Button handleClick={this.handleEqual}>=</Button>
    //         </div>
    //     </div>
    //   </div>
    // )
  }
}


export default App;