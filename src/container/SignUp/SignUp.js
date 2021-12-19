import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import KErrorMessage from '../KErrorMessage/KErrorMessage';

const validationSchema = yup.object({
    FirstName: yup.string().max(10).required('( First Name is required! )'),
    Lname: yup.string().max(10).required('( Last Name is required! )'),
    email: yup.string().email('Invalid email').required('( Email is required! )'),
    password: yup.string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    cPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

function SignUp(props) {
    const { text } = props.form;
    const updateForm = () => {
        props.updateForm();
    }
    return (
        <div className="form">
            <Formik
                validationSchema={validationSchema}
                initialValues={{
                    FirstName: "",
                    Lname: "",
                    email: "",
                    password: "",
                    cPassword: "",
                }}
                onSubmit={(values) => console.log(values)}>
                <Form className={props.formState ? 'myForm' : ''}>
                    <div className="group">
                        <label htmlFor="fName" >FirstName</label>
                        <Field type="text" name="FirstName" className="control" id="fName" placeholder="Enter Your FirstName..." />
                        <KErrorMessage name="FirstName" />
                    </div>
                    <div className="group">
                        <label htmlFor="lName" >LastName</label>
                        <Field type="text" name="Lname" className="control" id="lName" placeholder="Enter Your LastName..." />
                        <KErrorMessage name="Lname" />
                    </div>
                    <div className="group">
                        <label htmlFor="email" >Email</label>
                        <Field type="email" name="email" className="control" id="email" placeholder="Enter Your Email..." />
                        <KErrorMessage name="email" />
                    </div>
                    <div className="group">
                        <label htmlFor="password" >Password</label>
                        <Field type="password" name="password" className="control" id="password" placeholder="Enter Your Password..." />
                        <KErrorMessage name="password" />
                    </div>
                    <div className="group">
                        <label htmlFor="cPassword" >ConfirmPassword</label>
                        <Field type="password" name="cPassword" className="control" id="cPassword" placeholder="Enter Your ConfirmPassword..." />
                        <KErrorMessage name="cPassword" />
                    </div>
                    <div className="group">
                        <input type="submit" className="btn" value="SignUp" />
                    </div>
                    <div className="group">
                        <span className="link" onClick={updateForm}>{text}<i className="fas fa-door-open Icon"></i></span>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default SignUp
