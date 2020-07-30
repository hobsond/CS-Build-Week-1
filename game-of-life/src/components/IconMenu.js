import React from 'react'
import dropImg from '../pictures/imgs'
import {IconBox} from '../styledComponents/style'


export default function iconMenu(props) {
    const createImg=(id,name,value)=>{
        return(
            <div
            key={id}
            className={'iconItem'}
            id={id}
            onClick={
            e=>{
                e.preventDefault()
                props.setDrag(value)
                props.setImg(true)
            }
            }

            >{name}

            </div>
        )

    }
    return (
        <div>
            <h3>Icon</h3>
            <IconBox>
            
            {
                Object.entries(dropImg).map(x=>{
                    return createImg(x[0],x[0],x[1])
                })
            }
        </IconBox>

        </div>
        
    )
}
