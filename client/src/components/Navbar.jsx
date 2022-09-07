import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import logobhaiya from '../images/logo.png';


const Navbar= () =>{
    return(
        <>
       <nav className="navbar navbar-expand-lg bg">
      <div className="container-fluid"id="header">
    <NavLink className="navbar-brand" to="/"><img className="logo" src={logobhaiya} alt="imgg"></img></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li id="head" className="nav-item">
          <NavLink    className="nav-link active nv " id="home" aria-current="page" to= "/">Home</NavLink>
        </li>
        <li  className="nav-item">
          <NavLink  className="nav-link active" id="home"  to="/contact">ContactUs</NavLink>
        </li>
        <li  className="nav-item">
          <NavLink  className ="nav-link active" id="home" to="/about">AboutUs</NavLink>
        </li>
        <li  className="nav-item">
          <NavLink  className="nav-link active" id="home" to="/service">Services</NavLink>
        </li>
       
        <li  className="nav-item">
          <NavLink  className="nav-link active" id="home" to="/register">Signup</NavLink>
        </li>
        <li  className="nav-item">
          <NavLink  className="nav-link active" id="home" to="/login">Signin</NavLink>
        </li>
        <li  className="nav-item">
          <NavLink  className="nav-link active" id="home" to="/logout">Signout</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}
export default Navbar;