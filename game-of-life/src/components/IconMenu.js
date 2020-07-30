import React,{useContext} from 'react'

import dropImg from '../pictures/imgs'
import {IconBox,MenuHeaders,Item} from '../styledComponents/style'

import {GameCont} from '../utils/GameContext'


export default function IconMenu(props) {
    const {setDrag,setImg} = useContext(GameCont)

    const createImg=(id,name,value)=>{
        return(
            <Item
            key={id}
            className="icon"
            id={id}
            onClick={
            e=>{
                e.preventDefault()
                setDrag(value)
                setImg(true)
            }
            }

            >{name}

            </Item>
        )

    }
    return (
        <div>
            <MenuHeaders>Draw Tools</MenuHeaders>
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
