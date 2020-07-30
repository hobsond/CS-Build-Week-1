import React from 'react'
import maps from '../maps/maps'
import {setMap} from '../utils/common'
import {MenuHeaders,IconBox,Item} from '../styledComponents/style'



export default function MapBox(props) {

    const mapItem = (id,map,name)=>{
        return(
            <Item 
            key={id}
            className='map-item'
            id={id}
            onClick={()=>{
                props.resetGrid()
                setMap(props.setGrid,props.grid,map)
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
