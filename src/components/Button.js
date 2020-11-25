import React from 'react'

const isOperator = val => {
    return !isNaN(val) || val == "." 
    // || val == "=" || val == "CE"
}

export default function Button(props) {
        // let {children} = this.props
    return (
        <button 
            className={`btn ${isOperator(props.name) ? null : "operator"}`}
            onClick={() => props.handleClick(props.name)}>
            {props.name}
        </button>
    )
}

// starting from a static array describing the different buttons of the calculator include one text for each item
// const Button = (props) => {
//   // following the guidelines @freecodecamp, each button has an arbitrary identifier
//     const buttons = [
//         {text: "CE",
//         id: "clear"},
//         { text: "C",
//         id: "backspace"},
//         {text: "%",
//         id: "modulus"},
//         { text: "/",
//         id: "divide"},
//         { text: "8",
//         id: "eight"} ,
//         {text: "7",
//         id: "seven"} ,
//         {text: "9",
//         id: "nine" },
//         { text: "*",
//         id: "multiply"} ,
//         {text: "4",
//         id: "four"} ,
//         {text: "5",
//         id: "five" },
//         {text: "6",
//         id: "six"} ,
//         {text: "-",
//         id: "subtract"} ,
//         {text: "1",
//         id: "one" },
//         {text: "2",
//         id: "two" },
//         {text: "3",
//         id: "three"} ,
//         {text: "+",
//         id: "add"} ,
//         {text: ".",
//         id: "decimal"} ,
//         {text: "0",
//         id: "zero"} ,
//         {text: "=",
//         id: "equals"} 
//     ]
//   const { handleButton }= props;
//   const Button = buttons.map(({ text, id }) => (
//     <button key={id} id={id} onClick={handleButton}>{text}</button>
//   ));
//   return(
//     <div 
//         className={`btn ${isOperator(props.name) ? null : "operator"}`}>
//       {
//         Button
//       }
//     </div>
//   );
// }

// export default Button;



