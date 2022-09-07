import React from "react";
import 'bootstrap/dist/css/bootstrap.css';


const Footer=()=>{
    return(
        <>
        <div className="row" id="row">
            <div className="column" id="col">
                <h3>AboutUs</h3>
                <p>Comprehending all prerequisites of a students' career, we've established the core of our Aurora Consortium. We’re committed to surpassing any odds that stand in the way of a great education.</p>
            </div>
            <div className="column" id="col">
                <h2 className="fm">Newsletter</h2>
                <br></br><br></br>
            <form action="" className="fm">
                <input className="input" type="text" placeholder="Name" /><br></br><br></br>
                <input className="input" type="text" placeholder="Email" /><br></br><br></br>
                <button  className="btn btn-primary">Submit</button>
            </form>
            </div>
            <div className="column" id="col">
            <h3>Contact Info</h3>
            <p><i class="fa fa-phone"></i>1800-425-0220<br></br>
            <i class="fa fa-envelope"></i>info@livewireindia.com<br></br>
            <i class="fa fa-map"></i>1st Floor, K.R. Ahamed Sha office complex, No.<br></br> 25, Dr. Radhakrishnan Salai, Mylapore,<br></br>
Chennai - 600 004,
Tamil Nadu, India.</p>
            </div>

        </div>


      


    


        </>
    )
}
export default Footer;