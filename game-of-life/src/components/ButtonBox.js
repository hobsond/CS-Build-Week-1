import React,{useState,useContext} from 'react'
import {IconBox,SimBox,MenuHeaders} from '../styledComponents/style'
import {buttonCreate} from '../utils/common'
import {GameCont} from '../utils/GameContext'

export default function ButtonBox(props) {

const {startClick,start,randomMap,singleSim,resetGrid,running,multiSim} = useContext(GameCont)

    const [simCount,setSimCount] = useState(10)

    
    return (
        <div
        style={{border:"1px solid black",width:"90%",margin:"0 auto"}}
        >
            <IconBox>
                

                {
                    buttonCreate(startClick,running.current ? 'Stop':"Start",'startButton',null,{background:running.current? "red" : "#48E330"})
                }

                {
                    buttonCreate(randomMap,'Random',)
                }

                {
                    buttonCreate(singleSim,'Next',<button/>)
                }
                {
                buttonCreate(resetGrid,'Reset','reset')
                }
            </IconBox>
            <SimBox >

            <label>
                Select a Simulation
                <select onChange={(e)=>{
                    setSimCount(e.target.value)

                }}>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                    <option value={200}>200</option>
                </select>
            </label>

            <button
            onClick={()=>multiSim(simCount)}
            >
                Multi Sim

            </button>
            </SimBox>

        </div>
    )
}
