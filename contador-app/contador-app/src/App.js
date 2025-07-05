import React,{ useState } from 'react';
import './App.css';
function App() {
const [formData, setFormData] = useState({
nombre: '',
correo: '',
mensaje: ''
});
const [enviado, setEnviado] = useState(false);
const handleChange = (e) => {
const { name, value } = e.target;
setFormData(prev => ({
...prev,
[name]: value
}));
};
const handleSubmit = (e) => {
e.preventDefault();
// Guardar en localStorage
localStorage.setItem('formulario', JSON.stringify(formData));
// Mostrar mensaje y log
setEnviado(true);
console.log('Información enviada al localStorage:', formData);
// Opcional: resetear el formulario
setFormData({ nombre: '', correo: '', mensaje: '' });
// Ocultar el mensaje después de 3 segundos
setTimeout(() => setEnviado(false), 3000);
};
return (
<div className="app-container">
<h1>Formulario de contacto</h1>
<form className="formulario" onSubmit={handleSubmit}>
<input
type="text"
name="nombre"
placeholder="Tu nombre"
value={formData.nombre}
onChange={handleChange}
required
/>
<input
type="email"
name="correo"
placeholder="Tu correo"
value={formData.correo}
onChange={handleChange}
required
/>
<textarea
name="mensaje"
placeholder="Tu mensaje"
rows="4"
value={formData.mensaje}
onChange={handleChange}
required
></textarea>
<button type="submit">Enviar</button>
</form>
{enviado && <p className="mensaje-exito">✅ Mensaje enviado</p>}
</div>
);
}
export default App;//xd