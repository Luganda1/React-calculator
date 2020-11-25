import React from 'react'

export default function Input(props) {
    // const handleDigitChild = () => {
    //     this.props.handleDigit(props.input)
    // }
    return (
        <div className="input"
        // onClick={handleDigitChild}
        >
            <p>{props.input}</p>
            <p>{props.result}</p>
            
        </div>
    )
}
