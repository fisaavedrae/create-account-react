import { useState } from 'react'

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState(false);
    const [mensaje, setMensaje] = useState('');
    const [tipoMensaje, setTipoMensaje] = useState('');


    const validarDatos = (e) => {
        e.preventDefault();
        //Validación;
        if (nombre === '' || password2 === '' || password === '' || email === '') {
            setMensaje("Todos los campos son obligatorios");
            setTipoMensaje("alert-danger");
            setError(true);
            return;
        }
        if (password !== password2) {
            setMensaje("Las contraseñas no coinciden");
            setTipoMensaje("alert-danger");
            setError(true);
            return;
        }
        setError(false);
    };
    return (

        <form onSubmit={validarDatos}>
            <div className="mb-3">
                <input type="text" name="nombre" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)}
                    value={nombre} />
            </div>
            <div className="mb-3">
                <input type="email" name="email" placeholder="tuemail@ejemplo.com" onChange={(e) => setEmail(e.target.value)}
                    value={email} />
            </div>
            <div className="mb-3">
                <input type="password" id="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)}
                    value={password} />
            </div>
            <div className="mb-3">
                <input type="password" id="password2" placeholder="Confirma tu contraseña" onChange={(e) => setPassword2(e.target.value)}
                    value={password2} />
            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-primary">Registrarse</button>
            </div>
            <div className={tipoMensaje} role="alert">{mensaje}</div>
        </form>

    )
}

export default Formulario
