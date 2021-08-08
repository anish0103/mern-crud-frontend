import React from 'react'
import { Link } from 'react-router-dom'

import './CSS/Navigation.css'

function Navigation() {
    return (
        <div className='header-maincontainer'>
            <div className='header-projectname'>
                <h2>CRUD Operation</h2>
            </div>
            <div className='header-button'>
                <Link to="/add/" >Add</Link>
            </div>
        </div>
    )
}

export default Navigation;
