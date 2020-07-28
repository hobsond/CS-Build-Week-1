import React from 'react'
import niceColors from 'nice-color-palettes'


const colors = new Array(1000).fill().map(() => niceColors[17][Math.floor(Math.random() * 2)])

export default function Canavas(props) {
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

          onClick={()=>props.click(i,k)}
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
<button> Start Running</button>
<button> Start Running</button>
<button> Start Running</button>
</>

     
      
  )
}
