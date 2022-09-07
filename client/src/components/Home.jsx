import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import bg from '../images/bg.jpg';
import bg2 from '../images/bg2.png';
import F1 from '../images/F1.png';
import F2 from '../images/F2.png';
import F3 from '../images/F3.png';

import { NavLink } from "react-router-dom";

const Home=()=>{
    return(
        <>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  src={bg} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img  src="https://3.imimg.com/data3/CA/HS/MY-15585608/education-500x500.png" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img  src={bg2} class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<h2 align="center">OUR PROGRAMS</h2>
<h2 align="center">______________________________________________________________________________________</h2>


<div>
<div class="row" id='cs'>
  <div class="col-sm-6 col-md-4">
      <div class="thumbnail">
      <img className='tg' src={F1} alt="..."/>
      <div class="caption">
       
        <button id='cb'><NavLink   to='/contact'>Enquire Now</NavLink ></button>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-md-4">
    <div class="thumbnail">
      <img className='tg' src={F2} alt="..."/>
      <div class="caption">
       
        <button id='cb'><NavLink  to='/contact'>Enquire Now</NavLink></button>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-md-4" >
    <div class="thumbnail">
      <img className='tg' src={F3} alt="..."/>
      <div class="caption">
       
        <button id='cb'><NavLink  to='/contact'>Enquire Now</NavLink></button>
      </div>
    </div>
  </div>



</div>
</div>

        </>
    )

}
export default Home;