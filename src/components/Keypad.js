import React, { Component } from 'react'

// const isbutton-wrapper operator = val => {
//     return !isNaN(val) || val == "." || val == "=" || val == "CE"
// }

export default class Keypad extends Component {
    render() {
        return (
        <div >
        <div className="row" >
                <button id="bracket" name="(" className="button-wrapper operator" onClick={e => this.props.onClick(e.target.name)}>(</button>
                <button id="bracket" name=")" className="button-wrapper operator" onClick={e => this.props.onClick(e.target.name)}>)</button>
                <button id="backspace" name="CE" className="button-wrapper operator" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                <button id="clear" name="C" className="button-wrapper operator" onClick={e => this.props.onClick(e.target.name)}>C</button>
        </div>

        <div className="row" >
                <button id="one" name="1" className="button-wrapper" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button id="two" name="2" className="button-wrapper" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button id="three" name="3" className="button-wrapper" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button id="add" name="+" className="button-wrapper operator" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>
        </div>

        <div className="row" >
                <button id="four" name="4" className="button-wrapper" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button id="five" name="5" className="button-wrapper" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button id="six" name="6" className="button-wrapper" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button id="subtract" name="-" className="button-wrapper operator" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>
        </div>
        
        <div className="row" >
                <button id="seven" name="7" className="button-wrapper" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button id="eight" name="8" className="button-wrapper" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button id="nine" name="9" className="button-wrapper" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button id="multiply" name="*" className="button-wrapper operator" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>
        </div>

        <div className="row" >
                <button id="decimal" name="." className="button-wrapper operator" onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button id="zero" name="0" className="button-wrapper" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button id="equals" name="=" className="button-wrapper operator" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button id="divide" name="/" className="button-wrapper operator" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>
        </div>
            </div>
        )
    }
}
