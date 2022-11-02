import { React, useState } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom';

import './CSS/Form.css'

function Form(props) {

    const namevalid = "^[a-zA-Z.,?\\s]*$";
    const emailvalid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const history = useHistory();

    const [Name, SetName] = useState('');
    const [PhoneNo, SetPhoneNo] = useState('');
    const [Email, SetEmail] = useState('');
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
        const data = { Name: Name, PhoneNo: PhoneNo, Email: Email }
        SetName('')
        SetPhoneNo('')
        SetEmail('')
        SetValid(true)
        SetClose(true)
        props.SubmitHandler(data)
        history.push('/')
    }


    return (
        <div class="formpage-maincontainer">
            <div class="formpage-container">
                <div class="formpage-namecontainer">
                    Create Customer
                </div>
                <form>
                    {!Valid && <span style={{ color: "#f56d6d", margin: "3px" }}>Please Enter Valid Details!!!</span>}
                    <label>Name</label>
                    <input value={Name} onChange={Namehandler} type="text" placeholder='Enter customer name'></input>
                    <label>Phone No.</label>
                    <input value={PhoneNo} onChange={Phonehandler} type="number" placeholder='Enter customer number'></input>
                    <label>Email Id</label>
                    <input value={Email} onChange={Emailhandler} type="email" placeholder='Enter customer emailid'></input>
                    <div className='formpage-buttonaction'>
                        <Link to="/" onClick={Submithandler} className="formpage-formbutton" >Create</Link>
                        <Link to="/">Cancel</Link>
                    </div>
                    {Close && <Redirect to="/" />}
                </form>
            </div>
        </div>
    )
}

export default Form;