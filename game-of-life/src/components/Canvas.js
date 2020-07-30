import React from 'react'
import niceColors from 'nice-color-palettes'
import produce from 'immer'
import {StyledCan} from '../styledComponents/style'



const colors = new Array(1000).fill().map(() => niceColors[17][Math.floor(Math.random() * 5)])

export default function Canavas(props) {
  
  return ( 
  <StyledCan>
  <div
    style={{
      display: "grid",
      gridTemplateColumns:`repeat(${props.rows },20px)`
    }}
  >
    {props.grid.map((rows, i) =>
      rows.map((col, k) => (
        
        <div
        
          key={`${i}-${k}`}
          
          onPointerOver={(e)=>{
            if(props.img){
              props.addClick(i,k)

            }
          }}
          onPointerLeave={(e)=>{
            if(props.img){
              props.removeClick(i,k)
            }
          }}

       
          onClick={()=>{
            props.img ? 
            props.drop(i,k):

            !props.grid[i][k] ?
            props.addClick(i,k)
            :
            props.removeClick(i,k)

            props.setImg(false)
          }}
            style={{
            width: '20px',
            height: '20px',
            backgroundColor: props.grid[i][k] === 1 ? props.blockColor || `${colors[6]}` : props.background,
            transition:"all .07s ease-in-out",
            border: "solid 1px black"
          }}
        />
      ))
    )}
  </div>

</StyledCan>

     
      
  )
}
