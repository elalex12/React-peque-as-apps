import React, { useState, useEffect } from 'react';
import './App.css';
function App() {
const [seconds, setSeconds] = useState(0);
useEffect(() => {
const interval = setInterval(() => {
setSeconds(prev => prev + 1);
}, 1000);
// 🔁 Cleanup: detener el temporizador cuando se desmonte el componente
return () => clearInterval(interval);
}, []); // Ejecutar solo una vez al montar
return (
<div className="app-container">
<h1>Temporizador React</h1>
<p>{seconds} segundos han pasado ⏳</p>
</div>
);
}
export default App;
