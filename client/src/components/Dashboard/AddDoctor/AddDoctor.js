import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';

const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file,setFile] = useState(null);
    const handleBlur = (event) =>{
        const newInfo = {...info};
        newInfo[event.target.name] = event.target.value; 
        setInfo(newInfo);
    }
    const handleSubmit = () =>{
        const formData = new FormData();
        formData.append('file',file)
        formData.append('name',info.name)
        formData.append('email',info.email)
        fetch('http://localhost:5000/addDoctor',{
            method:'POST',
            body: formData
        })
        .then(res => res.json())
        .then( data => {
            console.log(data)
        })
    }
    const handleFileChange = (event) =>{
        const newFile = event.target.files[0];
        setFile(newFile);
    }
    console.log(file);
    return (
     <section className="container-fluid row">
         <div className="col-md-2">
         <SideBar></SideBar>
         </div>
         <div className="col-md-10 p-5 px-5">
             <h5 ClassName="text-brand">Add A Doctor</h5>
             <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
         </div>
     </section>
    );
};

export default AddDoctor;