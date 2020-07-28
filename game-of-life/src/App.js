import React, { useState, useRef,useCallback } from 'react'
import produce from 'immer'
import Canvas from './components/Canvas'
import ButtonBox from './components/ButtonBox'

export default function App() {



  const rowsNum = 25
  const colNum = 25

  const startGrid= ()=>{
    const rows = []
    for(let i =0; i< rowsNum;i++){
      rows.push(Array.from(Array(colNum),()=>0))
      
    }
    return rows
  }

  const [grid,setGrid] = useState(startGrid)

  const [start,setStart] = useState(false)

  const addClick = (i,k)=>{
    setGrid(()=>{
      return produce(grid,gCopy=>{
        if(grid[i][k] ===1){
          gCopy[i][k] = 0
        }
        else{
          gCopy[i][k] = 1
        }
      })
    })
  }

  const running = useRef(start)
  running.current = start

  const startClick =()=>{
    setStart(!start)
    running.current = true
    sim(grid)

  }
  const operations = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0]
  ];
  
  const sim = useCallback(
    (g) => {
      //check if currently running
      if(running.current === false){
        return

      }
      else{


      

        setGrid(g => {
          return produce(g, gridCopy => {
            for (let i = 0; i < rowsNum; i++) {
              for (let k = 0; k < colNum; k++) {
                let neighbors = 0;
                operations.forEach(([x, y]) => {
                  const newI = i + x;
                  const newK = k + y;
                  if (newI >= 0 && newI < rowsNum && newK >= 0 && newK < colNum) {
                    neighbors += g[newI][newK];
                  }
                });
    
                if (neighbors < 2 || neighbors > 3) {
                  gridCopy[i][k] = 0;
                } else if (g[i][k] === 0 && neighbors === 3) {
                  gridCopy[i][k] = 1;
                }
              }
            }
          });
        });
    
    
    
  }
      setTimeout(sim,1000)
    },
    [],
  )
  return (
    <>

    <Canvas grid={grid} rows={rowsNum} setGrid={setGrid} addClick={addClick} />
    <ButtonBox
     setStart={setStart} sim={sim} start={start}  startClick={startClick}  />

    
    </>
  )
}
