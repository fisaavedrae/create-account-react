import { useState } from 'react'


const Formulario = ({ setAlert }) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        //Validación;
        if (nombre === '' || password2 === '' || password === '' || email === '') {
            setAlert({
                error: true,
                msg: "Todos los campos son obligatorios",
                color: "danger",
            });
            return;
        }
        else {
            if (!validarEmail(email)) {
                setAlert({
                    error: true,
                    msg: "El email no es valido",
                    color: "danger",
                });
                return;
            }

            if (password !== password2) {
                setAlert({
                    error: true,
                    msg: "Las contraseñas no coinciden",
                    color: "danger",
                });
                return;
            } else if (!validarPassword(password)) {
                setAlert({
                    error: true,
                    msg: "La contraseña debe cumplir con todos los requisitos",
                    color: "danger",
                });
                return;
            }

            setAlert({
                error: false,
                msg: "Registro exitoso!!",
                color: "success",
            });
        }
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
        <form onSubmit={handleSubmit}>
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
        </form >
    )
}

export default Formulario
