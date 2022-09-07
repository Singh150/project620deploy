import React, { useState } from 'react';
import { NavLink, useHistory } from "react-router-dom";
//import signup from '../images/signup.png';
//import { NavLink } from "react-router-dom";


const Register= () =>{

    const history = useHistory()

    const [user, setUser] = useState({
        firstname : "",
        lastname : "",
        email : "",
        password : ""

    });

    //Handle Inputs
    const handleInput = (event)=>{
        let name = event.target.name;
        let value = event.target.value;

        setUser({...user,[name]:value});
    }

    //Handle submit
    const handleSubmit = async (event)=>{
        event.preventDefault();

        const {firstname, lastname, email, password} = user;
        try{

            const res = await fetch('/register',{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    firstname, lastname, email, password
                })
            })
            console.log(res.status)
            if(res.status === 400 || !res){
                window.alert("Already used Details")
            }else{
                window.alert("Registered successfully");
                history.push('/login')
            }
        }catch(error) {
            console.log(error);
        }
    }

    return(
        <>
       
        <div>
        <form  className="signup_form" onSubmit={handleSubmit} method="POST" >
        <h1 className='hh1'>Join Us</h1>
        <   br></br>
            <input 
             type="text"
            className="input" 
             placeholder="First Name" 
             name="firstname"
             value={user.firstname}
             onChange={handleInput}
             ></input>
            <br></br><br></br>
            <input 
            type="text"
            className="input"  
            placeholder="Last Name"
            name="lastname"
            value={user.lastname}
            onChange={handleInput}
            ></input>
            <br></br><br></br>
            <input 
            type="email"
            className="input"  
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleInput}
            ></input>
            <br></br><br></br>
            <input 
            type="password"
            className="input"  
            placeholder="password"
            name="password"
            value={user.password} 
            onChange={handleInput}
            ></input>
            <br></br><br></br>
            <button type="submit"  className="sinbutton">Submit</button>
            <br /><br />
            <NavLink className="rout" to="/login">Already Registered??</NavLink>
        </form>
        <br></br>
        </div>
        </>
    );
}
export default Register;