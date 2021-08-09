import { React, useState } from 'react'
import { Link, Redirect, useParams } from 'react-router-dom';

import './CSS/Form.css'

function EditForm(Probs) {

    const paramdata = useParams()
    
    const Data = Probs.Data.filter((data)=> data._id === paramdata.params)

    const namevalid = "^[a-zA-Z.,?\\s]*$";
    const emailvalid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const [Name, SetName] = useState(Data[0].Name);
    const [PhoneNo, SetPhoneNo] = useState(Data[0].PhoneNo);
    const [Email, SetEmail] = useState(Data[0].Email);
    const [Valid, SetValid] = useState(true)
    const [Close, SetClose] = useState(false)

    const Namehandler = (e) => {
        SetName(e.target.value)
    }
    const Phonehandler = (e) => {
        SetPhoneNo(e.target.value)
    }
    const Emailhandler = (e) => {
        SetEmail(e.target.value)
    }
    
    const Submithandler = (e) => {
        e.preventDefault();
        if (!Name.match(namevalid) || PhoneNo.length > 10 || PhoneNo.length < 10 || !Email.match(emailvalid)) {
            SetValid(false)
            return
        }
        const data = {id: Data[0]._id, Name: Name, PhoneNo: PhoneNo, Email: Email }
        Probs.UpdateHandler(data)
        SetName('')
        SetPhoneNo('')
        SetEmail('')
        SetValid(true)
        SetClose(true)
    }

    return (
        <div className='add-formcontainer'>
            <div className='formcontainer'>
                <form>
                    {!Valid && <p>Please Enter Valid Details!!!</p>}
                    <label>Name</label>
                    <input value={Name} onChange={Namehandler} type="text" placeholder='Enter Your Name'></input>
                    <label>Phone No.</label>
                    <input value={PhoneNo} onChange={Phonehandler} type="number" placeholder='Enter Your Number'></input>
                    <label>Email Id</label>
                    <input value={Email} onChange={Emailhandler} type="email" placeholder='Enter Your Email id'></input>
                    <div className="formcontainer-buttoncontainer">
                        <Link to="/" onClick={Submithandler} className="formbutton" >Add</Link>
                        <Link className="formbutton" to="/">Cancel</Link>
                    </div>
                    {Close && <Redirect to="/" />}
                </form>
            </div>
        </div>
    )
}

export default EditForm;