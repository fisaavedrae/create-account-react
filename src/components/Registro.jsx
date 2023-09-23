import { useState } from 'react'

import '../App.css'

function Registro() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div class="container">
                <div class="card mb-md-5">

                    <h3 class="card-title text-center">Crea una cuenta</h3>
                    {/* Cristian */}
                    <div class="social">
                        <div class="icono">
                            <div class="socialButton"><i class="fa-brands fa-facebook"></i></div>
                            <div class="socialButton"><i class="fa-brands fa-github"></i></div>
                            <div class="socialButton"><i class="fa-brands fa-linkedin-in"></i></div>
                        </div>
                        <div class="card-subtitle mb-2 text-body-secondary">O usa tu email para registrarte</div>
                    </div>
                    {/* Cristian */}
                    {/* Felipe */}
                    <div class="formulario">
                        <form>
                            <div class="mb-3">
                                <input type="text" id="nombre" placeholder="Nombre" />
                            </div>
                            <div class="mb-3">
                                <input type="email" id="email" placeholder="tuemail@ejemplo.com" />
                            </div>
                            <div class="mb-3">
                                <input type="password" id="password" placeholder="Contraseña" />
                            </div>
                            <div class="mb-3">
                                <input type="password" id="password2" placeholder="Confirma tu contraseña" />
                            </div>
                            <div class="mb-3">
                                <button type="submit" class="btn btn-primary">Registrarse</button>
                            </div>
                        </form>
                        {/* Felipe */}
                        {/* Conjunto */}
                        <div class="alert alert-primary" role="alert">Completa todos los campos!</div>
                        {/* Conjunto */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registro