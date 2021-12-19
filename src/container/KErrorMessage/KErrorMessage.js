import React from 'react'
import { ErrorMessage } from 'formik';

function KErrorMessage({ name }) {

const styles = {
    color:'red',
    fontSize:'10px',
    marginTop:'7px'
}

    return (
    <div style={styles}>
        <ErrorMessage name={name} />
    </div>
    )
}

export default KErrorMessage
