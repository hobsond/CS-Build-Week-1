import React, { useState, useRef,useCallback } from 'react'
import Canvas from './components/Canvas'
import ButtonBox from './components/ButtonBox'

export default function App() {



  const rowsNum = 100
  const colNum = 100

  const startGrid= ()=>{
    const rows = []
    for(let i =0; i< rowsNum;i++){
      rows.push(Array.from(Array(colNum),()=>0))
      return rows
    }
  }

  const [grid,setGrid] = useState(startGrid)

  const [start,setStart] = useState(false)

  const running = useRef(start)
  running.current = start
  
  const sim =  useCallback(
    (time) => {
      if(!running.current){
        return
      }
      //Iterate through Current grid
      //check the value of each cell
      setGrid(()=> {
        const j = [...grid]

      grid.map((rows, i) =>
      rows.map((col, k) =>{
        const t = (j[i][k-10] + j[i][k+10]) + (j[i][k-1] + j[i][k+1])

          
          if(j[i][k] === 1){
            if (t < 2){
              j[i][k] = 0
    
            }
            if(t === 2 || 3 ){
              j[i][k] = 1
            }
            if(t >3){
              j[i][k] = 0
    
            }

          }
          else{
            if(t > 3){
              j[i][k] = 1
              
            }
          }

        

        
      } ))
    return j
    })
      

      setTimeout(sim,time * 1000)
    },
    [],
  )

  sim(1)

  return (
    <>

    <Canvas grid={grid} setGrid={setGrid} />
    <ButtonBox setStart={setStart} start={start}  />

    
    </>
  )
}
