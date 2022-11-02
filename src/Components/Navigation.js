import React from 'react'
import { Link } from 'react-router-dom'

import './CSS/Navigation.css'

function Navigation() {
    return (
        <div class="navbar">
            <div class="navbar-container">
                <div>
                    <Link to="/" >CRUD Application</Link>
                </div>
            </div>
        </div>
    )
}

export default Navigation;
