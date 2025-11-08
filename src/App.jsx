import { useState } from 'react'
import './App.css'
import { Juegos } from './components/juegos.jsx'



function App() {
  return (
<div> 
    <header>
      <h1 id='title'>OUR WORK</h1>
      <div> 
        <nav>
        <ul>
          <li><a href="#tarjetas">TARJETAS</a></li>
          <li><a href="#juegos"> JUEGOS </a></li>
          <li><a href="#form">FORM</a></li>
        </ul>
        </nav>
      </div>
    </header>
    <main>
      <Juegos />

      
    </main>
    <footer>

    </footer>
</div>
  )
}

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  return (
    <section id="form">
      <h2>FORMULARIO</h2>
      <form>
        <label>
          Nombre:
          <input type="text" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Mensaje:
          <textarea name="mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </section>
  )
}


export default App
