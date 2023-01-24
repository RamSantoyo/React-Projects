const Button = (props) => (
    <button {...props} style={estiloBoton}/>
);

//css del boton
const estiloBoton = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    margin: '10px',
    outline: 'none',
    boxShadow: '0 0 5px 0 rgba(0,0,0,0.5)',
    transition: 'all 0.3s ease-in-out',
    ':hover': {
        backgroundColor: 'white',
        color: 'blue',
        boxShadow: '0 0 10px 0 rgba(0,0,0,0.5)',
    },
    ':active': {
        transform: 'scale(0.95)',
    },
};


export default Button;