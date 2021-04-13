import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import AppointmentDataTable from './AppointmentDataTable';

const AllPatients = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/appointments')
        .then(res => res.json())
        .then( data => setAppointments(data));
    },[])
    return (
        <div>
            <SideBar></SideBar>
            <div className="col-md-10 p-4 pr-5" style={{position:"absolute"}}>
                <h5 className="text-brand">All Patients</h5>
                <AppointmentDataTable appointments={appointments}></AppointmentDataTable>
            </div>
        </div>
    );
};

export default AllPatients;