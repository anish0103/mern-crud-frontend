import React from 'react'

import Form from '../Components/Form';
import './CSS/AddPage.css'

function AddPage(props) {

    const SubmitHandler = (data) => {
        props.SubmitHandler(data)
    }

    return (
        <Form SubmitHandler={SubmitHandler} />
    )
}

export default AddPage;