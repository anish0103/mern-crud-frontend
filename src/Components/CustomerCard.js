import React from 'react'
import { Link } from 'react-router-dom'

import './CSS/CustomerCard.css'

const CustomerCard = (props) => {
    return (
        <div class="customercard">
            <img src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt="User Picture" />
            <p>{props.data.Name}</p>
            <p>{props.data.PhoneNo}</p>
            <p>{props.data.Email}</p>
            <div>
                <Link to={`/${props.data._id}/`} class="customercard-editbutton">Edit</Link>
                <Link onClick={() => { props.DeleteHandler(props.data._id) }} class="customercard-deletebutton">Delete</Link>
            </div>
        </div>
    )
}

export default CustomerCard