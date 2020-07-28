import React from 'react'
import niceColors from 'nice-color-palettes'


const colors = new Array(1000).fill().map(() => niceColors[17][Math.floor(Math.random() * 2)])

export default function Canavas(props) {
  const click = (i,k)=>{
    const t = [...props.grid]
    if(t[i][k] === 1){
      t[i][k] = 0
    }
    else{
      t[i][k] = 1
    }
    console.log(k)
    props.setGrid(t)
  }
  return ( 
    <>
  <div
    style={{
      display: "grid",
      gridTemplateColumns:`repeat(10,40px)`
    }}
  >
    {props.grid.map((rows, i) =>
      rows.map((col, k) => (
        
        <div
          key={`${i}-${k}`}

          onClick={()=>click(i,k)}
          style={{
            width: '40px',
            height: '40px',
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
