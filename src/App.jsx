import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="container">
        <div class="layout">
          <div class="titulo">
            <h1>Crea una cuenta</h1>
          </div>
          //Cristian
          <div class="social">
            <div class="icono">
              <i class="fa-brands fa-square-facebook"></i>
              <i class="fa-brands fa-square-github"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
            <div class="bajadaIcono">O usa tu email para registrarte</div>
          </div>
          //Cristian
          <div class="formulario">
            //Felipe
            <input type="text" id="nombre" placeholder="Nombre" />
            <input type="email" id="email" placeholder="tuemail@ejemplo.com" />
            <input type="password" id="password" placeholder="Contraseña" />
            <input type="password" id="password2" placeholder="Confirma tu contraseña" />
            <button class="registro">Registrarse</button>
            //Felipe
            //Conjunto
            <div class="mensajeError">Completa todos los campos!</div>
            //Conjunto
          </div>
        </div>
      </div>
    </>
  )
}

export default App
