import React from 'react';
import './App.css';

import {Canvas,useFrame} from 'react-three-fiber'
import {softShadows,} from 'drei'
import {useSpring,a} from 'react-spring/three'


function App() {
  return (
    <div className="App">
      <h1>The beautiful Game Of Life</h1>

      <Canvas 
      
      >
        <mesh>
          <boxBufferGeometry attach='geometry' args={[1,1,1]}  />
          <meshStandardMaterial attach='material'/>
          
        </mesh>

      </Canvas>
  




   
    </div>
  );
}

export default App;
