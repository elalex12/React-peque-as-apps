import React, { useState, useEffect, useRef } from 'react';
import './App.css';
function App() {
const [seconds, setSeconds] = useState(0);
const [isRunning, setIsRunning] = useState(true);
const intervalRef = useRef(null); 
useEffect(() => {
if (isRunning) {
intervalRef.current = setInterval(() => {
setSeconds(prev => prev + 1);
}, 1000);
}
// Limpiar el intervalo si se detiene o desmonta
return () => clearInterval(intervalRef.current);
}, [isRunning]);
const toggleTimer = () => {
setIsRunning(prev => !prev);
};
const resetTimer = () => {
setSeconds(0);
setIsRunning(true); // Lo pausamos al reiniciar
};
return (
<div className="app-container">
<h1>Temporizador React</h1>
<p>{seconds} segundos han pasado ⏳</p>
<div className="button-group">
<button className="btn pause" onClick={toggleTimer}>
{isRunning ? 'Pausar' : 'Reanudar'}
</button>
<button className="btn reset" onClick={resetTimer}>
Reiniciar
</button>
</div>
</div>
);
}
export default App;