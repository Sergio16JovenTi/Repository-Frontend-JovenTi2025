import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Game from './components/Game.jsx'
import Formulario from './App.jsx' // Importar Formulario

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Game />
  </>
)