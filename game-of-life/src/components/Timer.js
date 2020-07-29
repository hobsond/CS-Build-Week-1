import React,{useState} from 'react'
import Time from 'react-compound-timer'

//function that starts time
//based on ms 

export default function Timer(props) {
    const [time,setTime] = useState()
    
    return (
        <div>
            <Time
            >    
                {/* {setTime(()=>{
                return <Time.Seconds /> 

                })} */}
            <Time.Seconds />

                Generations
            
            
         </Time>
        </div>
    )
}
