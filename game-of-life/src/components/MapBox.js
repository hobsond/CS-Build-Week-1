import React,{useContext} from 'react'
import maps from '../maps/maps'
import {setMap} from '../utils/common'
import {MenuHeaders,IconBox,Item} from '../styledComponents/style'

import {GameCont} from '../utils/GameContext'


export default function MapBox(props) {
    const {setGrid,grid,resetGrid} = useContext(GameCont)


    const mapItem = (id,map,name)=>{
        return(
            <Item 
            key={id}
            className='map-item'
            id={id}
            onClick={()=>{
                resetGrid()
                setMap(setGrid,grid,map)
                }}
            >
                {name}


            </Item>
        )
    }
    return (
        <div>

            <MenuHeaders>Maps</MenuHeaders>

            <IconBox>
         
                {
                Object.entries(maps).map((k)=>{
                    if(k[0]=='rando'){
                        console.log(k)
                    }

                    
                    return mapItem(k[0],k[1],k[0])
                })
                }
            </IconBox>

        </div>
        
    )
}
