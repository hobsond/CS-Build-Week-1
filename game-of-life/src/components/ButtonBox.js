import React from 'react'

export default function ButtonBox(props) {
    return (
        <div>
            <button 
            onClick={props.startClick
            }>

                {props.start ? "Stop" : "Start"}
            </button>

            <button
            onClick={props.reset}
            >
                Reset
            </button>
            
        </div>
    )
}
