import React, { useState } from 'react'
import SignUp from '../SignUp/SignUp'
import Login from '../Login/Login'
import '../../index.css'


function Forms() {
    const [form, setForm] = useState({ signup: false, login: true, text: 'SignUp' });
    const [formState, setFormStatus] = useState(false)
    const updateForm = () => {
        setForm({ signup: !form.signup, login: !form.login, text: form.text === 'Login' ? "SignUp" : "Login" });
        setFormStatus(true)
    }
    return (
        <div className="row">
            <div className="left"></div>
            <div className="right">{form.signup ? <SignUp form={form} updateForm={updateForm} formState={formState} /> : <Login form={form} formState={formState} updateForm={updateForm} />}</div>
        </div>
    )
}

export default Forms
