import React, { useState } from 'react';
import './App.css';

function App() {
  const[count, setCount]= useState(0);
  const increase = () =>{
    setCount(prev => prev +1)
  }
  const Decrease =() =>{
    setCount(prev => prev -1)
  }


  return (
    <div className='app-container'>
      <h1>Contador react</h1>
      <div className = 'counter-card'>
        <div className = 'counter-value'>{count}</div>
      <div className='button-group'>
        <button className='btn minus'onClick={Decrease}>-</button>
        <button className='btn plus'onClick={increase}>+</button>
        </div>
        </div>
  

    </div>
  );
}

export default App;
