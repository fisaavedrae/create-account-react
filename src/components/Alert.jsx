
const Alert = ({ tipoMensaje, mensaje }) => {
    return (
        <div className={tipoMensaje} role="alert">{mensaje}</div>
    )

}

export default Alert;
