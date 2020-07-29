import React,{useState} from 'react'

export default function ButtonBox(props) {

    const [simCount,setSimCount] = useState(10)

    const buttonCreate = (cb,inner)=>{
        return(
        <button
        onClick={()=>cb()}
        >
        {inner}
        </button>)
    }
    return (
        <div>

            {
                buttonCreate(props.startClick,props.start ? 'Stop':"Start")
            }

            {
                buttonCreate(props.randomMap,'Random')
            }

            {
                buttonCreate(props.singleSim,'Next')
            }

            
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

            {
                buttonCreate(props.reset,'Reset')
            }
        </div>
    )
}
