import { useState } from 'react'
import './App.css'
import Game from "./components/Game.jsx"
import logo from "./components/Images/logo.jpg"
import GameList from './components/GameList.jsx'


function App () {
  return (
<div>
    <header className='site-header'>
      <div className='logo'>
        <h1 id='title'>TheProject'S</h1>
        <img src={logo} alt="" />

      </div>
    
      <div> 
        <nav>
        <ul className='nav-items'>
          <li><a href="Game.jsx" className='nav-link'>JUEGOS</a></li>
          <li><a href="" className='nav-link'> LISTA </a></li>
          <li><a href="" className='nav-link'>FORM</a></li>
        </ul>
        </nav>
      </div>
    </header>
    <main>

      <div> <strong className="pmayor"> ¡BIENVENIDOS AL MEJOR SITIO DE DIVERSION!</strong>
      <Game />
    
        
        

      </div>
    </main>
    <footer>

    </footer>
</div>
  )
}

/* function Formulario() {
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
 */
export default App



