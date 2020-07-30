import styled from 'styled-components'

const fonts = {
  title:"font-family: 'Anton', sans-serif;",
  items:"font-family: 'Fjalla One', sans-serif;",
  buttons:"font-family: 'EB Garamond', serif;"
}
export const Display = styled.div`
  display:flex;
  /* justify-content:center; */
  margin:0 auto;
  height:100vh;
  @media(max-width:756px){
    flex-direction:column;
    justify-content:center;
  }

`
export const GameBox = styled.div`
  margin-left:22%;
  margin-right:2%;
  min-height:80vh;


  @media(max-width:756px){
    margin:2% auto;
  }


  `
export const StyledCan= styled.div `
  margin-top:5%;
  max-width:45%;
  box-shadow:60px 7px 150px darkgray;
  `
export const MenuDisplay = styled.div`

    width:30%;
    background:#6b7b8c;
    padding:1%;
    height:80vh;
    color:white;
    height:fit-content;
    border-radius:7px;
    letter-spacing:.2rem;

    p,ul{
      font-family: 'Mulish', sans-serif;
    }

    box-shadow: 0 4px 12px black;
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
    text-align:center;
    width:30%;
    padding:1.4%;
    background: #1e3d59;
    box-shadow: 2px 4px 6px black;
    transition:all .07s ease-in-out;
    color:white;
    border-radius:3%;
    ${fonts.buttons};
    &: hover{
      background:darkgray;
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
    text-shadow:-2px 0 1px black;
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
  ${fonts.buttons}


`

export const MenuHeaders= styled.h3`
  text-align:center;
  background:#1e3d59;
  color:whitesmoke;
  text-shadow:0 .3% black;
  word-spacing:2%;
  letter-spacing:0.1rem;
  margin:2% auto;
  margin-top:1%;
  font-size:90%;
  ${fonts.items}
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
${fonts.buttons};

`

export const Button = styled.div`

`

export const Title = styled.h1`
 ${fonts.title};
 text-align:center;

`