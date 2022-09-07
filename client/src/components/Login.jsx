
import React, { useState } from "react";
//import { useHistory } from "react-router";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";



const Login = () =>{
 
    const history = useHistory()

    const [user, setUser] = useState({
  
    email : '',
    password : ''
  });


     //Handle Input
     const handleChange = (event) =>{
         let name = event.target.name
         let value = event.target.value

         setUser({...user, [name]:value})
     }

     //Handle Login
     const handleSubmit = async (event) =>{
         event.preventDefault();
         const { email, password } = user;
         try {
             const res = await fetch('/login',{
                 method : "POST",
                 headers : {
                     "Content-type": "application/json"
                 },
                 body : JSON.stringify({
                     email, password
                 })
             });

             if(res.status === 400 || !res){
                 window.alert("Invalid Credentials")
             }else{
                 window.alert("Login Successfull");
                 window.location.reload();
                 history.push('/')
             }
         }catch(error){
             console.log(error);
         }
     }

    return(
        <>
  
     <section>
     
         <form onSubmit={ handleSubmit } className="signup_form">
         <h1 className='hh1'>Signin</h1>
        
        
        

          <br></br><br></br>
          
         <br></br>
          <input 
           type="email"
           name="email" 
           className="input"
            placeholder="Enter Email"
            value={ user.email } 
            onChange={ handleChange } >
              
          </input>
         <br></br>
         <br></br>
          <input  
          type="password" 
          
          className="input" 
          placeholder="Enter Password"
          name="password"  
          value={ user.password } 
          onChange={ handleChange } 
          ></input>
          
          <br></br><br></br>
          <button className="sinbutton" type="submit" >Login</button>
          <br /><br /> <br /><br />
          <NavLink className="rout" to="/register">New User??</NavLink>
          </form>
          <br></br>
          <br></br>
     </section>
        </>
    );
};
export default Login;