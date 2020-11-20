import React from 'react'

export default function Input(props) {
    // const handleDigitChild = () => {
    //     this.props.handleDigit(props.input)
    // }
    return (
        <div className="input"
        // onClick={handleDigitChild}
        >
            {props.input}
        </div>
    )
}
