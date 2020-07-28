import React from 'react'

export default function ButtonBox(props) {
    return (
        <div>
            <button 
            onClick={()=>
            props.setStart(!props.start)}>

                {props.start ? "Stop" : "Start"}
            </button>
            
        </div>
    )
}
