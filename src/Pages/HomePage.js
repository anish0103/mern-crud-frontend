import React from 'react'
import { Link } from 'react-router-dom';

import CustomerCard from '../Components/CustomerCard';
import './CSS/HomePage.css'

function HomePage(props) {

    const DeleteHandler = (data) => {
        props.DeleteHandler(data)
    }

    return (
        <div class="homepage-maincontainer">
            <div class="homepage-createcontainer">
                Customer List
                <Link class="homepage-createbutton" to="/add/">Create Customer</Link>
            </div>
            <div class="homepage-container">
                {props.Data.length === 0
                    ? <p class="homepage-notext">No Customer to show. Click on create customer to create one.</p>
                    : props.Data.map((data) => <CustomerCard data={data} DeleteHandler={DeleteHandler} />)
                }
            </div>
        </div>
    )
}

export default HomePage;