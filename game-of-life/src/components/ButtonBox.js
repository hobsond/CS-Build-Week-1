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
            <label>
            Select Your Speed
            <input
            onChange={props.timeChange}
            value={props.time}
             type="range" 
             id="vol" 
             name="vol" 
             min="1" max="1000"/>
             </label>
            
        </div>
    )
}
