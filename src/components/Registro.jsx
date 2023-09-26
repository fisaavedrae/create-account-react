import { useState } from 'react'

import '../App.css'
import SocialButton from './SocialButton.jsx'
import Formulario from './Formulario.jsx'
import Titulo from './Titulo.jsx'
import Alert from './Alert';

function Registro() {
    const [alert, setAlert] = useState({ error: "", msg: "", color: "" });

    return (
        <>
            <div className="container">
                <div className="card mb-md-5">
                    <Titulo titulo="Crear una cuenta" />
                    <div className="social">
                        <div className="icono">
                            <SocialButton icono="fa-brands fa-facebook" />
                            <SocialButton icono="fa-brands fa-github" />
                            <SocialButton icono="fa-brands fa-linkedin" />
                        </div>
                        <div className="card-subtitle mb-2 text-body-secondary">O usa tu email para registrarte</div>
                    </div>
                    <div className="formulario">
                        <Formulario setAlert={setAlert} />
                        <Alert color={alert.color} mensaje={alert.msg} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registro