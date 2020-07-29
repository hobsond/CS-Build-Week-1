import React from 'react'
import maps from '../maps/maps'
import {setMap} from '../utils/common'


export default function MapBox(props) {

    const mapItem = (id,map,name)=>{
        return(
            <div 
            key={id}
            className='map-item'
            id={id}
            onClick={()=>{
                props.resetGrid()
                setMap(props.setGrid,props.grid,map)
                }}
            >
                {name}


            </div>
        )
    }
    return (
        <div>
         
        {
            Object.entries(maps).map((k)=>{
                return mapItem(k[0],k[1],k[0])
            })
        }

        


            

            
        </div>
    )
}
