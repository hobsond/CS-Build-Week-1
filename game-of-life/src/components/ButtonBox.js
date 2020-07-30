import React,{useState} from 'react'
import {IconBox,SimBox} from '../styledComponents/style'
import {buttonCreate} from '../utils/common'
export default function ButtonBox(props) {

    const [simCount,setSimCount] = useState(10)

    
    return (
        <div>
            <IconBox>
                

                {
                    buttonCreate(props.startClick,props.start ? 'Stop':"Start",'startButton',<button/>,{background:props.start? "red" : "#48E330"})
                }

                {
                    buttonCreate(props.randomMap,'Random',)
                }

                {
                    buttonCreate(props.singleSim,'Next',<button/>)
                }
                {
                buttonCreate(props.reset,'Reset','reset')
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
            onClick={()=>props.multiSim(simCount)}
            >
                Multi Sim

            </button>

            </SimBox>

        </div>
    )
}
