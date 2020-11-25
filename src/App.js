import React, { Component } from 'react'
import Button from "./components/Button";
import Input from "./components/Input";
import {buttonData} from "./components/Data"


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: [],
            result: 0,
            operator: "+"
        }
    }
    calculate = (num1, operator, num2) => {
        let result;
        // console.log("math");
        if(!isNaN(num2)) {
        result = eval(num1 + operator + num2) 
        this.setState({result})
        }
    }

    handleClick = (button) => {
    let input = [...this.state.input]
    let result = this.state.result;
    let operator = this.state.operator;
    const num = parseFloat(input.join(''))

    switch(true) {
        case /[+-\/\*]/.test(button):
        // console.log(operator);
        this.calculate(result, operator, num)
        operator = button;
        input = operator;
        break

        case/\d/.test(button):
        // console.log(button);
        if(/[+-\/\*]/.test(button)){
            input = []
            }
            input.push(button)
        break
    }
    
    if(button === "="){
        this.calculate(result, operator, num)
    }
    else if(button === "C"){
        this.reset()
    }
    else if(button === "CE"){
        this.backspace()
    }
    else if(button === "."){
        this.handleDecimal()
    }
    this.setState({input, operator})
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
    
    handleDecimal = () => {
    const { input } = this.state;
    // ! add the point only if no point is already included
    if(!/\./.test(input)) {
        this.setState({input: `${input}.`})
    }
    }
    
    
    
    render() {
        return (
        <div className="app">
        <div className="calc-wrapper">
            <h2>Tony's Calculator</h2>
            <div id="display" >
            <Input input={this.state.input}
            result={this.state.result}
            />
            </div>
            {buttonData.map((item) => {
                let name = item.button;
                let id = item.id;
            return <Button 
            key={id} 
            name={name} 
            id={id}
            value={name} 
            handleClick={this.handleClick} 
            />
            } )
            } 
        </div>
    </div>
        )
    }
}

export default App;
