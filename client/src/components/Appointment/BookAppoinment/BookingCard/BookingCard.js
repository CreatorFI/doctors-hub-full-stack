import React, { useState } from 'react';
import AppointmentForm from '../../AppointmentForm/AppointmentForm';

import Modal from "react-modal";

const BookingCard = ({booking,date}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3 h-100 rounded-lg shadow">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p> {booking.totalSpace} Spaces Available</p>
                    <button onClick={openModal} className="btn btn-brand text-uppercase">Book Now ! </button>
                    <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} appointment={booking.subject} date={date}></AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;