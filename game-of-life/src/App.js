import React, { useState, useRef,useCallback, useEffect } from 'react'


import produce from 'immer'
import Canvas from './components/Canvas'
import ButtonBox from './components/ButtonBox'
import {changeValue,setDragItem,setMap} from './utils/common'
import MapBox from './components/MapBox'
import IconMenu from './components/IconMenu'
import Settings from './components/Settings'
import Timer from './components/Timer'

import {Display,GameBox,MenuDisplay} from './styledComponents/style'


export default function App() {


//variables
  const [rowsNum,setRows] = useState(25)
  const [colNum,setCol] = useState(25)

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


//functions
// //Start grid Creates Original Array values
  const startGrid= ()=>{
    const rows = []
    for(let i =0; i< rowsNum;i++){
      rows.push(Array.from(Array(colNum),()=>0))
      
    }
    return rows
  }

  const resetGrid =()=>{
    setGen(0)
    setGrid(()=>{
      return produce(grid,gCopy=>{
       gCopy = startGrid()
       return gCopy
      })
    })
  }
  const getRandom =()=>{
    //i want to loop through each row
    let x = []
    for(let i = 0 ; i<50;i++){
        const j = Math.floor(Math.random() * Math.floor(25) )
        const i = Math.floor(Math.random() * Math.floor(25) )
        x.push([i,j])
    }
   
    return x
}
  const randomMap = ()=>{
    if(start){
      return
    }
    setMap(setGrid,grid,getRandom())
  }

  const addClick = (i,k)=>{
    if(start){
      return
    }
    changeValue(setGrid,grid,i,k,1)
  }

  const removeClick = (i,k )=>{
    changeValue(setGrid,grid,i,k,0)
  }

  const startClick =()=>{
    setStart(!start)
    running.current = true
    sim(grid)

  }

  const setPreviousGrid=()=>{
    setMap(setGrid,grid,previous)
  }

  const drop = (i,k,value)=>{
    setDragItem(setGrid,grid,i,k,value,dragItem)
  }




// states
const [grid,setGrid] = useState(startGrid)
const [previous,setPrevious] = useState()
const [dragItem,setDrag] = useState([[0,0]])
const [img,setImg] = useState(false)
const [start,setStart] = useState(false)
const [background,setBackground] = useState('grey')
const [blockColor,setBlock]= useState()
const [gen,setGen] = useState(0)


// simulation Funciontions

const singleSim = ()=>{
  setGen(()=>{
    return produce(gen,newGen=>{
      newGen = newGen + 1
      return newGen
    })
  } )

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

const sim = useCallback(
  ()=>{
    //check if currently running
    if(running.current === false){
      return
    }
    singleSim()

    setTimeout(sim,1000)
      },[])


const multiSim= (x)=>{
  setGen(()=>{
    return produce(gen,copy=>{
      copy = copy + x
    })
  })
  let i = 0
  for(i;i<=x;i++){
    singleSim()
  }
}



//ref
const running = useRef(start)
running.current = start



  
  return (
    <div>
      <h1> Conways Game of Life</h1>

        <Display>

        <GameBox id='gameContainer'>
          {/* div will hold the game,The Main Canvas, And icons */}
            

            <Canvas 
            grid={grid} 
            rows={rowsNum} 
            setGrid={setGrid} 
            addClick={addClick} 
            removeClick={removeClick}
            background={background}
            blockColor={blockColor}
            dragItem={dragItem}
            drop={drop}
            img={img}
            setImg={setImg}
            setBlock={setBlock}

            />
        </GameBox>


        <MenuDisplay>


        <div id='pannel-topright'>
          <IconMenu 
          setDrag={setDrag}
          setImg = {setImg}
          />


          {/* map box */}
          <MapBox
          resetGrid={resetGrid}
          setGrid ={setGrid}
          grid ={grid}
          reset={resetGrid}
            
        />

          <ButtonBox
            setStart={setStart}
            sim={sim} 
            start={start} 
            startClick={startClick}  
            reset={resetGrid}
            randomMap={randomMap}
            singleSim={singleSim}
            setPreviousGrid={setPreviousGrid}
            multiSim={multiSim}

          />

          {start ?
          <Timer/>:
          null
        }



        </div>


        <div id ='settings'>

          <Settings
            setBackground={setBackground}
            setBlock={setBlock}
          />


        </div> 

          </MenuDisplay>

        </Display>
    </div>
    
  )
}
