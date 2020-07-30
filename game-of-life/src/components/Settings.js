import React,{useContext} from 'react'
import {MenuHeaders,IconBox} from '../styledComponents/style'
import {GameCont} from '../utils/GameContext'

export default function Settings(props) {
    const {setBlock,setBackground} = useContext(GameCont)

    const colorChange=(color,name)=>{
        return(
            <div
            key={name}
            className='colorChoice'
            style={{background:color}}
            onClick={()=>{
                setBlock(color)
            }}
            >
                {name}
            </div>
        )
    }


    const backgroundChange = (color,name)=>{
        return (
            <div 
            className='colorChoice'

            key={name}
            onClick={
                ()=>{
                    setBackground(color)
                }
            }
            
            style={{background:color}}
            >
                {name}

            </div>
        )

    }

    const blockColors = {
        Red:"#d72631",
        Mag:"#cf1578",
        Golden:"#e8d21d"
    }

    const backgroundColor={
        jade:"#077b8a",
        home:'darkgray',
        none:'black'

    }


    return (
        <div>

        <div>
            <MenuHeaders>Block Color</MenuHeaders>
            <IconBox>
                {
                Object.entries(blockColors).map(x=>{
                return colorChange(x[1],x[0])
                                    
                })
                }

            </IconBox>

        </div>   

        <div>
            <MenuHeaders> background Color</MenuHeaders>
            <IconBox>

            {
                Object.entries(backgroundColor).map(x=>{
                    return backgroundChange(x[1],x[0])
                })

            }


            </IconBox>
        
        
        </div >     
        

            
                
                
                
        </div>
    )
}
