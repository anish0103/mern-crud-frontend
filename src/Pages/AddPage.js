import React from 'react'

import Form from '../Components/Form';
import './CSS/AddPage.css'

function AddPage(Probs) {

    const SubmitHandler = (data) => {
        Probs.SubmitHandler(data)
    }

    return (
        <div className="addpage-maincontainer">
            <div>
                <Form SubmitHandler={SubmitHandler} />
            </div>
        </div>
    )
}

export default AddPage;