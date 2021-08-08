import React from 'react'

import './CSS/Table.css'
import Edit from './Images/Editimg.png'
import Delete from './Images/Deleteimg.png'
import { Link } from 'react-router-dom'

function Table(Probs) {
    return (
        <table className="tablemaincontainer">
            <tr className="tableheading">
                <th className="tableheading">Name</th>
                <th className="tableheading">Phone No.</th>
                <th className="tableheading">Email ID</th>
                <th className="tableheading">Actions</th>
            </tr>
            {Probs.Data.map(((data, index) => <tr key={index}>
                <td>{data.Name}</td>
                <td>{data.PhoneNo}</td>
                <td>{data.Email}</td>
                <td><Link to={`/${data.id}/`}><img src={Edit} alt="Edit Image" title="Edit" /></Link><button><img onClick={() => { Probs.DeleteHandler(data.id) }} className="deletebutton" src={Delete} alt="Delete Image" title="Delete" /></button></td>
            </tr>))}
        </table>
    )
}

export default Table;