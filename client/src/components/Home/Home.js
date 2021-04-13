import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Footer from '../Shared/Footer/Footer';
import Blogs from './Blogs/Blogs';
import Contact from './Contact/Contact';
import DentalCare from './DentalCare/DentalCare';
import Doctors from './Doctors/Doctors';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;