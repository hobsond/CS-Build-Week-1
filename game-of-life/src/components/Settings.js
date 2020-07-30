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

    const backgroundChange = (color,name)=>{
        return (
            <div
            onClick={
                ()=>{
                    props.setBackground(color)
                }
            }
            className='colorSplat'
            style={{background:color}}
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
                ColorChange("#e6e6fa","Lavender")
            }
            {
                ColorChange("#ffd700","Gold")
            }
            {
                ColorChange("#8b6508","dark olives")
            }
            {
                ColorChange(null,'Random')
            }

        <div>



        </div>

            {
                backgroundChange("#6b6b6b","gray")
            }
            {
                backgroundChange("#ff6eb4","pink")
            }
            
        </div>

        
    )
}
