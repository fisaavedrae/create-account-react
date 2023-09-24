import { useState } from 'react'

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState(false);
    const [mensaje, setMensaje] = useState('');
    const [tipoMensaje, setTipoMensaje] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        //Validación;
        if (nombre === '' || password2 === '' || password === '' || email === '') {
            setMensaje("Todos los campos son obligatorios");
            setTipoMensaje("alert alert-danger");
            setError(true);
            return;
        }
        else {
            if (!validarEmail(email)) {
                setMensaje("El email no es valido");
                setTipoMensaje("alert alert-danger");
                setError(true);
                return;
            }

            if (password !== password2) {
                setMensaje("Las contraseñas no coinciden");
                setTipoMensaje("alert alert-danger");
                setError(true);
                return;
            } else if (!validarPassword(password)) {
                setMensaje("La contraseña debe cumplir con todos los requisitos");
                setTipoMensaje("alert alert-danger");
                setError(true);
            }
            else {
                setMensaje("Registro exitoso!!");
                setTipoMensaje("alert alert-success");
                setError(false);
            }
        }
        setError(false);
    };

    function validarPassword(password) {
        var re = {
            'capital': /[A-Z]/,
            'digit': /[0-9]/,
            'full': /^[A-Za-z0-9]{8,16}$/
        };
        return re.capital.test(password) &&
            re.digit.test(password) &&
            re.full.test(password);
    }

    function validarEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    return (

        <form method="post" onSubmit={handleSubmit}>
            <div className="mb-3">
                <input type="text" name="nombre" className="form-control" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)}
                    value={nombre} />
            </div>
            <div className="mb-3">
                <input type="text" name="email" className="form-control" placeholder="tuemail@ejemplo.com" onChange={(e) => setEmail(e.target.value)}
                    value={email} />
            </div>
            <div className="mb-3">
                <input type="password" id="password" className="form-control" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)}
                    value={password} />
            </div>
            <div className="mb-3">
                <input type="password" id="password2" className="form-control" placeholder="Confirma tu contraseña" onChange={(e) => setPassword2(e.target.value)}
                    value={password2} />
            </div>
            <div className="mb-3">
                <div id="emailHelp" class="form-text text-start">
                    La contraseña debe contener:
                    <ul className="text-start">
                        <li>al menos una mayúscula</li>
                        <li>al menos un dígito </li>
                        <li>tener entre 8 y 16 caracteres.</li>
                    </ul>
                </div>
            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-primary">Registrarse</button>
            </div>
            <div className={tipoMensaje} role="alert">{mensaje}</div>
        </form >

    )
}

export default Formulario
