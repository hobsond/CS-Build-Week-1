import React,{useState} from 'react'
import {buttonCreate} from '../utils/common'
export default function About () {
    const [next,setNext] = useState(false)
    
    const setTheNext = ()=>{
        setNext(true)
    }
    const setThePrev = ()=>{
        setNext(false)
    }
    return (
        <div>
            {!next ? null : buttonCreate(setThePrev,'Controls','con')}
            
            {next ? null : buttonCreate(setTheNext,'About','About')}
            {
                next ?
                <div>
                <h2>Conways Game of Life</h2>
                <p>
                    john conway was influenced by john von neumans belief that life is a singular reproducing organism.
                Motivated john took wanted to produce that philosophy in a visual mathmatical representaion.
                in 1968 he began experimenting with diffrent algorithims for the game.
                The game was made public in the fall of 1970 
                </p>
                <h3>Rules</h3>
                <ul>
                    <li>
                        Any live cell with fewer than two live neighbours dies, as if by underpopulation.
                    </li>
                    
                    <li>
                    Any live cell with two or three live neighbours lives on to the next generation.
                    </li>
    
                    <li>
                    Any live cell with more than three live neighbours dies, as if by overpopulation.
                    </li>
    
                    <li>
                    Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
                    </li>
    
                </ul>
            </div>


                :

                <div>
                    <h2>Controls</h2>
                    <ul>
                        <li>
                            Start: The start button will begin the simulation of the patterns 
                        </li>

                        <li>
                        Stop: Will stop the simulation and reset the Generations
                        </li>

                        <li>
                        Random: will populate random cells On 
                        </li>
                        <li>
                        Next: Will Go to The next generation
                        </li>
                        <li>
                        Reset: Will clear the current grid
                        </li>
                        <li>
                        Select Sim: Choose the amount of generations for multi sim
                        </li>

                        <li>
                        Multi Sim : Will simulate the amount of select sim generations
                        </li>
                        <li>
                        Draw Tools : If you click a draw tool you can use that pattern on the grid
                        </li>
                        <li>
                        Map Items : If you click a Map it will generate a populated Grid
                        </li>

                        <li>
                        Block Color: Chooses The Color of on cells
                        </li>

                        <li>
                        Background Color : Chooses the color of grid color
                        </li>
                    </ul>
                </div>
            }
        </div>
    )
}
