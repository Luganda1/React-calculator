import React from 'react'

export default function ClearBtn(props) {
    return (
        <div className="clear-btn" 
        onClick={props.handleClear}>
            {props.children}
        </div>
    )
}
