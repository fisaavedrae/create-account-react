import { useState } from 'react'

import '../App.css'

import Formulario from './Formulario.jsx'
import Titulo from './Titulo.jsx'

function Registro() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="container">
                <div className="card mb-md-5">
                    <Titulo titulo="Crear una cuenta" />
                    {/* Cristian */}
                    <div className="social">
                        <div className="icono">
                            <div className="socialButton"><i className="fa-brands fa-facebook"></i></div>
                            <div className="socialButton"><i className="fa-brands fa-github"></i></div>
                            <div className="socialButton"><i className="fa-brands fa-linkedin-in"></i></div>
                        </div>
                        <div className="card-subtitle mb-2 text-body-secondary">O usa tu email para registrarte</div>
                    </div>
                    {/* Cristian */}
                    <div className="formulario">
                        {/* Felipe */}
                        <Formulario />
                        {/* Felipe */}
                        {/* Conjunto */}
                        {/*<Alert />*/}
                        {/* Conjunto */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registro