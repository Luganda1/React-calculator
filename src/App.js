import React, { Component } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import { buttonData } from "./components/Data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: [],
      result: 0,
      operator: "+",
      hitEqual: false,
    };
  }

  // switchOperators = (operator) => {
  //     switch (operator) {
  //     case '÷':
  //         return '/'
  //     case 'x':
  //         return '*'
  //     }
  // }

  calculate = (num1, operator, num2) => {
    let result;

    //if we hit the equal sign last time, we don't want to evaluate on the next operator hit.
    if (this.state.hitEqual) {
      this.setState({ hitEqual: false });
    } else {
      console.log("We are evaling :>> ", num1 + operator + num2);
      result = eval(num1 + operator + num2);
      this.setState({ result });
    }
  };

  handleClick = (button) => {
    let input = [...this.state.input];
    let result = this.state.result;
    let operator = this.state.operator;
    console.log("input :>> ", input);
    // We slice off the operator so that it parses correctly.
    if (/[+*-/]/.test(input[0])) {
      input = input.slice(1);
    }
    // the + sign in front of input is the same as parseFloat.
    let num = +input.join("");
    console.log("num :>> ", num);

    switch (true) {
      // case /[+x\-÷]/.test(button):
      case /[+*-/]/.test(button):
        // console.log(operator);

        this.calculate(result, operator, num);
        operator = button;
        input = operator;
        break;

      case /\d/.test(button):
        // console.log("button", button);
        input.push(button);
        break;
      default:
        //default means that it wasn't digit or operator
        console.log("default happened");
    }

    if (button === "=") {
      this.calculate(result, operator, num);
      this.setState({ hitEqual: true });
      input = [];
    } else if (button === "C") {
      this.reset();
      //need the return in order to skip the setState part at the end.
      return;
    } else if (button === "CE") {
      this.backspace();
      //need the return in order to skip the setState part at the end.
      return;
    } else if (button === ".") {
      this.handleDecimal();
      return;
    }
    this.setState({ input, operator });
  };

  reset = () => {
    this.setState({
      input: [],
      result: 0,
      operator: "+",
    });
  };

  backspace = () => {
    this.setState({
      input: this.state.input.slice(0, this.state.input.length - 1),
    });
  };

  handleDecimal = () => {
    const { input } = this.state;
    // ! add the point only if no point is already included
    if (!/\./.test(input.join(""))) {
      this.setState({ input: `${input.join("")}.` });
    }
  };

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <h2>Tony's Calculator</h2>
          <div id="display">
            <Input input={this.state.input} result={this.state.result} />
          </div>
          {buttonData.map((item) => {
            let name = item.button;
            let id = item.id;
            return (
              <Button
                key={id}
                name={name}
                id={id}
                value={name}
                handleClick={this.handleClick}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
