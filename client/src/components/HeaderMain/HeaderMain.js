import React from 'react';
import { Link } from 'react-router-dom';
import Chair from '../../images/Mask Group 1.png';
const HeaderMain = () => {
    return (
       <main style={{height:"600px"}} className ="row d-flex align-items-center">
           <div className="col-md-4 offset-md-1">
            <h1 style={{color:'#3A4256'}}>Your New Smile <br/> Starts Here</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo harum quos repudiandae fugit doloremque earum modi qui saepe porro neque optio veniam, ipsam nisi eius enim. Iure adipisci asperiores omnis.</p>
            <Link to ="/appointment" className="btn button btn-primary">GET APPOINTMENT</Link>
           </div>
           <div className="col-md-6">
               <img className="img-fluid" src={Chair} alt=""/>
           </div>
       </main>
    );
};

export default HeaderMain;