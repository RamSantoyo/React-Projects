import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './styles/formulario.css'


const Formulario = () => {
    
    const [vista, setVista] = useState(false);

    const handleVista = () => {
        setVista(!vista);
    }
        
    return(        
        <div className='card-form'>
            <Formik
            //iniciar los valores del formulario
            initialValues={{ nombre: '', email: '', password: '', terminos: false }}

            //validar los valores del formulario 
            validate={(values) => {
                const errors = {};
                if (!values.nombre) {
                    errors.nombre = 'Nombre es requerido';
                }else if (!/^[a-zA-ZÀ-ÿ\s]{3,40}$/.test(values.nombre)) {
                    errors.nombre = 'Nombre inválido';
                }
                if (!values.email) {
                    errors.email = 'Email es requerido';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                    errors.email = 'Email inválido';
                }
                if (!values.password) {
                    errors.password = 'Password es requerido';
                } else if (values.password.length < 8) {
                    errors.password = 'Password debe tener al menos 8 caracteres';
                }
                return errors;
            }
            }
            //enviar los valores del formulario
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    console.log(values);
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}            

            >
            {({ isSubmitting, errors, touched, values}) => (            
                <div className="form-container">
                    {values.nombre && <p className="user">Hola {values.nombre}!</p>}
                    <Form>
                        <div className="group">                        
                            <i 
                            className={`fas fa-user 
                            ${errors.nombre && touched.nombre ? 'fas-error' : ''}`}></i>
                            <Field 
                            type="text" 
                            name="nombre" 
                            placeholder="Nombre"
                            className={`input ${errors.nombre && touched.nombre ? 'error' : 'check'}`} />
                            <ErrorMessage name="nombre" component="p" className="error-message" />
                        </div>
                        <div className="group">
                            <i 
                            className={`fas fa-envelope 
                            ${errors.nombre && touched.nombre ? 'fas-error' : ''}`}></i>  
                            <Field 
                            type="email" 
                            name="email" 
                            placeholder="Email"
                            className={`input ${errors.email && touched.email ? 'error' : 'check'}`} />
                            <ErrorMessage name="email" component="div" className="error-message" />
                        </div>
                        <div className="group">
                            <i
                            onClick={handleVista} 
                            className={
                                `fas ${vista === false ? 'fa-eye-slash' : 'fa-eye'}
                                ${errors.password && touched.password ? 'fas-error' : ''}`
                            }></i> 
                            <Field 
                            type={vista === false ? 'password' : 'text'}
                            name="password" 
                            placeholder="Password"
                            className={`input ${errors.password && touched.password ? 'error' : 'check'}`} />                            
                            <ErrorMessage name="password" component="div" className="error-message" />
                        </div>
                        <p className="olvidaste">Olviste tu contraseña?</p>                        
                        <div>
                            <button 
                            type="submit" 
                            disabled={isSubmitting} 
                            className="btn btn-primary"> Enviar 
                            </button>                       
                        </div>
                        <div className="newu">
                            <p>New User?</p>
                            <p className="sing">Sign Up</p>
                        </div>
                        <div>
                            <label className="terms">Acepto los términos y condiciones
                                <Field 
                                type="checkbox" 
                                name="terminos"  
                                className="check" />                                
                            </label>
                        </div>
                    </Form>
                </div>
            )}   
            </Formik>
        </div>
    )
}

export default Formulario;