import React, { useState, useRef,useCallback,useContext, useEffect } from 'react'
import './App.css'
import produce from 'immer'

// component Imports
import Canvas from './components/Canvas'
import ButtonBox from './components/ButtonBox'
import MapBox from './components/MapBox'
import IconMenu from './components/IconMenu'
import Settings from './components/Settings'
import Timer from './components/Timer'
import About from './components/About'

// Utills
import {changeValue,setDragItem,setMap,buttonCreate} from './utils/common'
import {GameCont} from './utils/GameContext'
import {Display,GameBox,MenuDisplay,Title} from './styledComponents/style'

import maps from './maps/maps'


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
  const startGrid= ()=>{
    //Start grid Creates Original Array values

    // Is the originial empty display for the grid
    const rows = []
    for(let i =0; i< rowsNum;i++){
      rows.push(Array.from(Array(colNum),()=>0))
      
    }
    return rows
  }

  const resetGrid =()=>{
    //Reset Grid
    // sets the running False
    // sets the grid to the original start grid
    setStart(false)
    setGrid(()=>{
      return produce(grid,gCopy=>{
       gCopy = startGrid()
       return gCopy
      })
    })
  }
  const getRandom =()=>{
    //Creates a array containing the amount of rows and cols  
    //with two random values less than the amount of rows and columns
    let x = []
    for(let i = 0 ; i<rowsNum;i++){
        const j = Math.floor(Math.random() * Math.floor(rowsNum) )
        const i = Math.floor(Math.random() * Math.floor(rowsNum) )
        x.push([i,j])
    }
   
    return x
}
  const randomMap = ()=>{
    
    // Sets the map to an array of those random values
    if(start){
      return
    }
    for(let i = 0; i<20;i++){
      setMap(setGrid,grid,getRandom())

    }
  }

  const addClick = (i,k)=>{
    // Turns on the cell the user Clicked on
    if(start){
      return
    }
    changeValue(setGrid,grid,i,k,1)
  }

  const removeClick = (i,k )=>{
    // removes the clicked on item
    changeValue(setGrid,grid,i,k,0)
  }

  const startClick =()=>{
    // sets start to its opposite
    //also sets the ref
    // and starts the simulation
    setStart(!start)
    running.current = true
    sim(grid)

  }

  const drop = (i,k,value)=>{
    // drop is made for selecing drawing tools 
    // and adding them to the canvas
    setDragItem(setGrid,grid,i,k,value,dragItem)
  }
  const setTheShowMenu = ()=>setShowMenu(!showMenu)




// states
  // canvas Display
const [grid,setGrid] = useState(startGrid)
  // state of the current drawing Tool
const [dragItem,setDrag] = useState([[0,0]])
  // state of the seleted map
const [img,setImg] = useState(false)
  // state of the simulation running 
const [start,setStart] = useState(false)
  // color of off cells
const [background,setBackground] = useState('grey')
  // color of on cells
const [blockColor,setBlock]= useState()
  // Generation count
const [gen,setGen] = useState(0)
  // Menu Display
const [showMenu,setShowMenu] = useState(false)

// simulation Funciontions

const singleSim = ()=>{
  // update Generation Count
  // setGen(()=>{
  //   return produce(gen,newGen=>{
  //     newGen = newGen + 1
  //     return newGen
  //   })
  // } )
  // sets the current grid to the return 
  setGrid(g => {
    return produce(g, gridCopy => {
      // loop through each cell
      for (let i = 0; i < rowsNum; i++) {
        for (let k = 0; k < colNum; k++) {
          // create a starting variable for the neighbors count
          let neighbors = 0;
          // loop through operations
          operations.forEach(([x, y]) => {
          // create new i and k by adding array in the operations
            const newI = i + x;
            const newK = k + y;
            // check to see if neighbor does not exist
            if (newI >= 0 && newI < rowsNum && newK >= 0 && newK < colNum) {
              neighbors += g[newI][newK];
            }
          });
          // turn off the cell
          // if cell is less than two
          // or greater than 3
          if (neighbors < 2 || neighbors > 3) {
            gridCopy[i][k] = 0;
          // turns on the cell
          // if neighbors equal three
          } else if (g[i][k] === 0 && neighbors === 3) {
            gridCopy[i][k] = 1;
          }
        }
      }
    });
  });
}


const sim = useCallback(
  // is the signle sim 
  // that continuously calls itself
  // while running is true
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

useEffect(()=>{
  setMap(setGrid,grid,maps.chickenBox,)
  startClick()
  
},[])
  return (
    <div>
     
      <Title> Conways Game of Life</Title>

        <Display>
          <GameCont.Provider value={
            {
              grid,rowsNum,setGrid,addClick,
              removeClick,background,blockColor,
              dragItem,drop,img,setImg,setBlock,
              setDrag,resetGrid,setStart,sim,singleSim,
              multiSim,startClick,randomMap,setBackground,
              running
            }
          }>
        <GameBox id='gameContainer'>
              {/* div will hold the game,The Main Canvas, And icons */}
            <div
            >
            
            <Canvas />
            </div>
              
          
        </GameBox>


            <MenuDisplay>

          {
            buttonCreate(setTheShowMenu,!showMenu ? 'Config' : "Home","menuButton")
          }

          {
            !showMenu ?

            <div id='pannel-topright'>
            <IconMenu />


            {/* map box */}
            <MapBox/>

            <ButtonBox/>
            {start ? <Timer/> : null}

            
        <div id ='settings'>

          <Settings/>


        </div> 


          </div>
            :
            <About />


          }


        
          </MenuDisplay>
          
          </GameCont.Provider>
          
        </Display>
    </div>
    
  )
}
