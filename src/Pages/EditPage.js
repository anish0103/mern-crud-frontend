import React from 'react'

import EditForm from '../Components/EditForm';

function EditPage(Probs) {

    const UpdateHandler = (data) => {
        Probs.UpdateHandler(data)
    }

    return (
        <div>
            <EditForm Data={Probs.Data} UpdateHandler={UpdateHandler}/>
        </div>
    )
}

export default EditPage;
