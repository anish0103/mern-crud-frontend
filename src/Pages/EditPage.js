import React from 'react'

import EditForm from '../Components/EditForm';

function EditPage(props) {

    const UpdateHandler = (data) => {
        props.UpdateHandler(data)
    }

    return (
        <div>
            <EditForm Data={props.Data} UpdateHandler={UpdateHandler}/>
        </div>
    )
}

export default EditPage;
