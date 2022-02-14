import React, { Fragment } from "react";
import './estiloDataBase.css';

const DataBase =(props)=>{
    return(
        <Fragment>
            <div className="container-title-db">
                <i className="fas fa-database"></i>
                <span className="title-db">Base de datos colaboradores</span>
            </div>

            {/*Formato Bootstrap */}
            <table className="table">

                <thead className="table-title">
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Adress</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Department</th>
                    </tr>
                </thead>

                <tbody>
                    {   props.workers.length > 0
                        ? props.workers.map(worker=>(
                            <tr key={worker.id}>
                                <td data-titulo="Name">{worker.name}</td>
                                <td data-titulo="Last name">{worker.lastName}</td>
                                <td data-titulo="Age">{worker.age}</td>
                                <td data-titulo="Adress">{worker.adress}</td>
                                <td data-titulo="Email">{worker.email}</td>
                                <td data-titulo="Phone">{worker.phone}</td>
                                <td data-titulo="Department">{worker.department}</td>
                            </tr>
                        ))
                        :(
                            <tr>
                                <td colSpan={7}>No hay colaboradores registrados</td>
                            </tr>
                        )
                    }
                </tbody>

            </table>
            
        </Fragment>
    );
};

export default DataBase;