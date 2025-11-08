import React from 'react'
import { useState, useEffect} from 'react'


const URL_API = "http://localhost:3000/juegos";

export const Juegos = () => {
  return (
    <div>
      <h1 className='principal'>BIENVENIDO A JUEGOS</h1>
      <p className='subtitulo'>JUEGOS DISPONIBLES</p>
      <div className='tarjetas'>
        <div className='tarjeta'>
          <h2 className='nombre-juego'>JUEGO 1</h2>
          <p className='descripcion-juego'>DESCRIPCION DEL JUEGO 1</p>
        </div>
      </div>

    </div>
  )
}


