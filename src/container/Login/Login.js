import React, { useState } from 'react';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import KErrorMessage from '../KErrorMessage/KErrorMessage';

const validationSchema = yup.object({
    email: yup.string().email('Invalid email').required('( Email is required! )'),
    password: yup.string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
});

function Login(props) {
    const { text } = props.form;
    const [value, setValues] = useState("")
    const updateForm = () => {
        props.updateForm();
    }
    const checkValues = (values) => {
        console.log(values)
        setValues(values)
    }
    if (value?.email == "admin@ksl.com" && value?.password == "admin123") {
        console.log("HLLLLLLLLoooo")
    }
    return (
        <div className="form">
            <Formik
                validationSchema={validationSchema}
                initialValues={{
                    email: "",
                    password: ""
                }}
                onSubmit={checkValues}
            >
                <Form className={props.formState ? 'myForm' : ''}>
                    <div className="group">
                        <label htmlFor="email" >Email</label>
                        <Field type="email" className="control" name='email' id="email" placeholder="Enter Your Email..." />
                        <KErrorMessage name="email" />
                    </div>
                    <div className="group">
                        <label htmlFor="password" >Password</label>
                        <Field type="password" className="control" id="password" name='password' placeholder="Enter Your Password..." />
                        <KErrorMessage name="password" />
                    </div>
                    <div className="group">
                        <input type="submit" className="btn" value="Login" />
                    </div>

                </Form>
            </Formik>
        </div>
    )
}

export default Login
