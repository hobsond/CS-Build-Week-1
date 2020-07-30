import styled from 'styled-components'

export const Display = styled.div`
  display:flex;
  /* justify-content:center; */
  margin:0 auto;
  height:100%;
  @media(max-width:756px){
    flex-direction:column-reverse;
    justify-content:center;
  }

`
export const GameBox = styled.div`
  margin-left:15%;
  margin-right:2%;
  min-height:80vh;


  @media(max-width:756px){
    margin:2% auto;
  }


  `
export const StyledCan= styled.div `
  margin-top:5%;
  max-width:45%;
  width:45%;
  `
export const MenuDisplay = styled.div`

    width:30%;
    background:#6b7b8c;
    height:80vh;
    color:white;
    height:fit-content;

    box-shadow: 0 4px 6px black;
    @media(max-width:756px){
      width:100%;
      margin:0 auto;

  }


`
export const IconBox = styled.div`
  display:flex;
  margin: 3% auto;
  justify-content:space-around;
  flex-wrap:wrap;
  
  .button{
    margin:1% auto;
    width:30%;
    padding:2%;
    background: #1e3d59;
    box-shadow: 2px 4px 6px black;
    transition:all .07s ease-in-out;
    color:white;
    border-radius:3%;
    &: hover{
      background:#f5f0e1;
    }

  }
  #reset{
    background:#e8d21d;
  }
  #startButton{
    background:#48E330;
  }
  div{
    margin:2% auto;
  }
  .colorChoice{
    box-shadow: 0 4px 8px darkgray;
    text-shadow:-2px 0 3px black;
    border-radius:23%;

    width:20%;
    text-align: center;
    margin:0 1%;
  }

  
  

`
export const SimBox= styled.div`
  display:flex;
  justify-content:space-around;
  margin:0 auto;
  margin-top:5%;


`

export const MenuHeaders= styled.h3`
  text-align:center;
  background:#1e3d59;
  margin:0 auto;
  margin-top:1%;
`
export const GenDisplay = styled.div`
  background:white;
  color:black;
  text-align:center;
  padding:2%;
  margin-top:1%;
  transition:all 0.7s ease-in;

`
export const Item = styled.div`
padding:1%;
width:20%;
color:whitesmoke;
text-align:center;
text-shadow:-2px 0 3px black;
background:black;

`

export const Button = styled.div`

`