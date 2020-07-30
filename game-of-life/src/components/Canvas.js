import React,{useContext} from 'react'
import niceColors from 'nice-color-palettes'

import {GameCont} from '../utils/GameContext'
import {StyledCan} from '../styledComponents/style'



const colors = new Array(1000).fill().map(() => niceColors[17][Math.floor(Math.random() * 5)])

export default function Canavas(props) {
  const {rowsNum,grid,img,addClick,removeClick,drop,blockColor,background,setImg} = useContext(GameCont)
  
  return ( 
  <StyledCan>
  <div
    style={{
      display: "grid",
      gridTemplateColumns:`repeat(${rowsNum },20px)`
    }}
  >
    {grid.map((rows, i) =>
      rows.map((col, k) => (
        
        <div
        
          key={`${i}-${k}`}
          
          onPointerOver={(e)=>{
            if(img){
              addClick(i,k)
            }
          }}
          onPointerLeave={(e)=>{
            if(img){
              removeClick(i,k)
            }
          }}

       
          onClick={()=>{
            if(img){
              drop(i,k)
              

            }
            else if(grid[i][k]===0){
              addClick(i,k)
            }
            else{
            removeClick(i,k)


            }
            setImg(false)
          }}
            style={{
            width: '20px',
            height: '20px',
            backgroundColor: grid[i][k] === 1 ? blockColor || `${colors[6]}` : background,
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
