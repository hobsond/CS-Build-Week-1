import React from 'react'
import niceColors from 'nice-color-palettes'
import produce from 'immer'


const colors = new Array(1000).fill().map(() => niceColors[17][Math.floor(Math.random() * 5)])

export default function Canavas(props) {
  return ( 
    <>
  <div
    style={{
      display: "grid",
      gridTemplateColumns:`repeat(${props.rows},20px)`
    }}
  >
    {props.grid.map((rows, i) =>
      rows.map((col, k) => (
        
        <div
          key={`${i}-${k}`}

          onClick={()=>props.addClick(i,k)}
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: props.grid[i][k] === 1 ? `${colors[3]}` : 'lightblue',
            transition:"all .07s ease-in-out",
            border: "solid 1px black"
          }}
        />
      ))
    )}
  </div>

</>

     
      
  )
}
