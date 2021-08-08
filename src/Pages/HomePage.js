import React from 'react'

import Table from '../Components/Table';
import './CSS/HomePage.css'

function HomePage(Probs) {

    const DeleteHandler = (data) => {
        Probs.DeleteHandler(data)
    }

    return (
        <div className="homepage-maincontainer">
            <div className="homepage-tablecontainer">
                {Probs.Data.length===0 && <h1>Nothing to show Click on Add Button to Add Data</h1>}
                {Probs.Data.length!==0 && <Table Data={Probs.Data} DeleteHandler={DeleteHandler}/>}
            </div>
        </div>
    )
}

export default HomePage;