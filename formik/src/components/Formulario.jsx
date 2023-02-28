import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";


const Formulario = () => {
    return (
        <Formik
        //valores iniciales
        initialValues={{
            nombre: '',
            correo: '',
            edad: '',
            telefono: '',
            sexo: '',
            password: '',
            confirmar: ''            
        }}
        //validacion
        validate={values => {
            const errors = {};
            const { nombre, correo, edad, telefono, sexo, password, confirmar } = values;

            const expresionNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
            const expresionEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
            const expresionEdad = /^[0-9]{2}$/;
            const expresionTelefono = /^[0-9]{10}$/;
            const expresionPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

            if(!nombre){
                errors.nombre = 'El nombre es obligatorio';
            }else if(!expresionNombre.test(nombre)){
                errors.nombre = 'El nombre no es valido';
            }
            
            if(!correo){
                errors.correo = 'El correo es obligatorio';
            }else if(!expresionEmail.test(correo)){
                errors.correo = 'El correo no es valido';
            }

            if(!edad){
                errors.edad = 'La edad es obligatoria';
            }else if(!expresionEdad.test(edad)){
                errors.edad = 'La edad no es valida';
            }

            if(!telefono){
                errors.telefono = 'El telefono es obligatorio';
            }else if(!expresionTelefono.test(telefono)){
                errors.telefono = 'El telefono no es valido';
            }

            if(!sexo){
                errors.sexo = 'El sexo es obligatorio';
            }else if(sexo !== 'masculino' && sexo !== 'femenino'){
                errors.sexo = 'El sexo no es valido';
            }            

            if(!password){
                errors.password = 'La contraseña es obligatoria';
            }else if(!expresionPassword.test(password)){
                errors.password = 'La contraseña no es valida (6-12 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula)';
            }

            if(!confirmar){
                errors.confirmar = 'La confirmacion de la contraseña es obligatoria';
            }else if(password !== confirmar){
                errors.confirmar = 'Las contraseñas no coinciden';
            }            
                        
            return errors;
        }}      
        //envio de datos
        onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));            
        }}
        >
        {({ isSubmitting }) => ( 
            <div>
                <Form>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <Field type="text" name="nombre" className="form-control" />
                        <ErrorMessage name="nombre" component="div" className="text-danger" />

                        <label htmlFor="correo">Correo</label>
                        <Field type="email" name="correo" className="form-control" />
                        <ErrorMessage name="correo" component="div" className="text-danger" />

                        <label htmlFor="edad">Edad</label>
                        <Field type="text" name="edad" className="form-control" />
                        <ErrorMessage name="edad" component="div" className="text-danger" />

                        <label htmlFor="telefono">Telefono</label>
                        <Field type="text" name="telefono" className="form-control" />
                        <ErrorMessage name="telefono" component="div" className="text-danger" />

                        <label htmlFor="sexo">Sexo</label>
                        <Field as="select" name="sexo" className="form-control">
                            <option value="">Selecciona una opcion</option>
                            <option value="masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                        </Field>

                        <label htmlFor="password">Contraseña</label>
                        <Field type="password" name="password" className="form-control" />
                        <ErrorMessage name="password" component="div" className="text-danger" />

                        <label htmlFor="confirmar">Confirmar contraseña</label>
                        <Field type="password" name="confirmar" className="form-control" />
                        <ErrorMessage name="confirmar" component="div" className="text-danger" />
                        
                        <button 
                            type="submit"
                            disabled={isSubmitting}  
                            className="btn btn-primary"> Enviar 
                        </button> 
                    </div>
                </Form>   
            </div>
        )}     
        </Formik>
    );
}

export default Formulario;