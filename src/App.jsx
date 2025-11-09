import { useState } from 'react'
import './App.css'
import GameList from './components/GameList.jsx'
import GameForm from './components/GameForm.jsx'



function App() {
  return (
<div> 
    <header className='site-header'>
      <h1 id='title'>OUR WORK</h1>
      <div> 
        <nav>
        <ul className='nav-items'>
          <li><a href="" className='nav-link'>TARJETAS</a></li>
          <li><a href="#juegos" className='nav-link'> JUEGOS </a></li>
          <li><a href="#form" className='nav-link'>FORM</a></li>
        </ul>
        </nav>
      </div>
    </header>
<div/>

    <main>
    <GameList />
    <GameForm />
    <Formulario />
    



      
    </main>
    <footer>

    </footer>
</div>
  )
}

function Game () {
  const [selectedGame, setSelectedGame] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleEdit = (game) => {
    setSelectedGame(game);
    window.scrollTo({ top: 0, behavior: "smooth" }); // sube al formulario
  };

  const handleSave = () => {
    setSelectedGame(null);
    setRefreshKey((prev) => prev + 1); // fuerza que GameList recargue
  };

  return (
    <div className="app-container">
      <h1 className="main-title">🎮 Mi Biblioteca de Videojuegos</h1>

      <GameForm selectedGame={selectedGame} onSave={handleSave} />

      <GameList key={refreshKey} onEdit={handleEdit} />
    </div>
  );
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



