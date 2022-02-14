import React from "react";
//Importamos el creador de id's uuid: npm install uuid
import { v4 as uuidv4 } from 'uuid';
import './estiloApp.css';

import DataBase from "./DataBase";
import AddWorker from "./AddWorker";

function App() {

  const dataWorker = [
    {id: uuidv4(), name: "Edwin", lastName: "Lee", age: "32", adress: "Antigua Guatemala", 
    email: "leonellee2016@gmail.com", phone: "4087-3658", department: "Development"},
    {id: uuidv4(), name: "Marcos", lastName: "Miranda", age: "30", adress: "Ciudad de Guatemala", 
    email: "example01@gmail.com", phone: "0000-0000", department: "Business Intelligence"},
    {id: uuidv4(), name: "Karen", lastName: "Martinez", age: "28", adress: "El Tejar Chimaltenango", 
    email: "example02@gmail.com", phone: "8888-8888", department: "Quality"}
  ];

  //State:

  const [workers,getWorkers] = React.useState(dataWorker);

  const addNew =(newWorker)=>{
    newWorker.id = uuidv4();
    getWorkers([...workers,newWorker]);
  }

  return (
    <div className="App">
      <DataBase workers={workers}/>
      <AddWorker addNew={addNew}/>
      <span className="creator">Created by Edwin Lee</span>
    </div>
  );
}

export default App;
