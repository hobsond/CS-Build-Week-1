import React from 'react'


export default function Settings(props) {
    const ColorChange=(color,name)=>{
        return(
            <div
            style={{background:color}}
            onClick={()=>{
                props.setBlock(color)
            }}
            >
                {name}
            </div>
        )
    }

    
    return (
        <div>
            {
                ColorChange("#4ca3dd",'blue')
            }

           

            {
                ColorChange(null,'Random')
            }
            
        </div>
    )
}
