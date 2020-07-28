import React, { useState } from 'react'
import Canvas from './components/Canvas'

export default function App() {



  const rowsNum = 100
  const colNum = 100
  
  const [grid,setGrid] = useState(()=>{
    const rows = []
    for(let i =0; i< rowsNum;i++){
      rows.push(Array.from(Array(colNum),()=>0))
      return rows
    }
  })
  const click = (i,k)=>{
    const t = [...grid]
    if(t[i][k] === 1){
      t[i][k] = 0
    }
    else{
      t[i][k] = 1
    }
    setGrid(t)
  }

  return (
    <>
    <Canvas grid={grid} click={click} />

    
    </>
  )
}
