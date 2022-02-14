import React, { Fragment } from "react";
import './estiloAddWorker.css';

const AddWorker =(props)=>{

    const [data,setData]= React.useState({
        name: '',
        lastName: '',
        age: '',
        adress: '',
        email: '',
        phone: '',
        department: ''
    });

    const handleChange =(event)=>{
        setData({
            ...data,[event.target.name]:event.target.value
        });
    };

    const handleSubmit =(event)=>{
        event.preventDefault();
        props.addNew(data);
        event.target.reset();
    };

    return(
        <Fragment>
            <div className="container-title-add">
                <i className="fas fa-user-tie"></i>
                <span className="title-add">Ingreso nuevos colaboradores</span>
            </div>

            <form
            onSubmit={handleSubmit} 
            className="row g-3 needs-validation" 
            noValidate>

                <div className="col-md-3">
                    <label className="form-label">Name</label>
                    <input
                    name="name" 
                    type="text" 
                    className="form-control" 
                    id="validationCustom01"
                    onChange={handleChange}
                    autoComplete="off" 
                    required/>
                </div>

                <div className="col-md-3">
                    <label className="form-label">Last name</label>
                    <input
                    name="lastName" 
                    type="text" 
                    className="form-control" 
                    id="validationCustom01"
                    onChange={handleChange} 
                    autoComplete="off"  
                    required/>
                </div>

                <div className="col-md-1">
                    <label className="form-label">Age</label>
                    <input 
                    name="age"
                    type="text" 
                    className="form-control" 
                    id="validationCustom01"
                    onChange={handleChange}  
                    autoComplete="off" 
                    required/>
                </div>

                <div className="col-md-5">
                    <label className="form-label">Adress</label>
                    <input 
                    name="adress"
                    type="text" 
                    className="form-control" 
                    id="validationCustom01" 
                    onChange={handleChange} 
                    autoComplete="off" 
                    required/>
                </div>

                <div className="col-md-4">
                    <label className="form-label">Email</label>
                    <input
                    name="email"
                    type="text" 
                    className="form-control" 
                    id="validationCustom01" 
                    onChange={handleChange} 
                    autoComplete="off" 
                    required/>
                </div>

                <div className="col-md-4">
                    <label className="form-label">Phone</label>
                    <input
                    name="phone" 
                    type="text" 
                    className="form-control" 
                    id="validationCustom01" 
                    onChange={handleChange} 
                    autoComplete="off" 
                    required/>
                </div>

                <div className="col-md-4">
                    <label className="form-label">Department</label>
                    <input 
                    name="department"
                    type="text" 
                    className="form-control" 
                    id="validationCustom01" 
                    onChange={handleChange} 
                    autoComplete="off" 
                    required/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>

            </form>

        </Fragment>
    );
};

export default AddWorker;