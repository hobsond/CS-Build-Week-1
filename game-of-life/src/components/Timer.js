import React,{useState} from 'react'
import Time from 'react-compound-timer'
import {GenDisplay} from '../styledComponents/style'


//function that starts time
//based on ms 

export default function Timer(props) {
    const [time,setTime] = useState()
    
    return (
        <GenDisplay>
            <Time
            >    
                {/* {setTime(()=>{
                return <Time.Seconds /> 

                })} */}
            <Time.Seconds />  Generations
            
            
         </Time>
        </GenDisplay>
    )
}
