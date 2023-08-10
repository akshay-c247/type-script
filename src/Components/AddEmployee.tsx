import { Iemployee } from "./Employee.type";
import "./EmployeeForm.style.css";
import {useState} from 'react';

type props ={
    onBackBtnClickHnd :() => void
    onsubmitclickHnd :(data :Iemployee) => void
}

const AddEmployee = (props:props) => {
     const[firstName, setFirstName] = useState("");
     const[lastName,setLastName] = useState("");
     const[email,setEmail] = useState("")



    const{ onBackBtnClickHnd ,onsubmitclickHnd } = props
    const onfirstNamechangeHnd =(e :any)=>{
        setFirstName(e.target.value)
    };
    const onLastNamechangeHnd =(e :any)=>{
        setLastName(e.target.value)
    };
    const onemailchangeHnd =(e :any)=>{
        setEmail(e.target.value)
    }
    const onsubmitBtnclickHnd = (e :any) =>{
        e.preventDefault()
           const data :Iemployee ={
            id: new Date().toJSON().toString(),
            firstName: firstName,
            lastName: lastName,
            email:email
           }
           onsubmitclickHnd(data);
           onBackBtnClickHnd();
           
    }
  return (
    <div className="form-container">
        
        <div>
            <h3>Add Employee Form</h3>
        </div>
    <form onSubmit={onsubmitBtnclickHnd}>
        <div>
            <label>FirstName :</label>
            <input type="text" value={firstName} onChange={onfirstNamechangeHnd}/>
        </div>
        <div>
            <label>LastName:</label>
            <input type="text" value={lastName} onChange={onLastNamechangeHnd} />
        </div>
        <div>
            <label>Email Add:</label>
            <input type="text" value={email} onChange={onemailchangeHnd} />
        </div>
        <div>
            <input type="button" value="Back" onClick={ onBackBtnClickHnd} />
            <input type="Submit" value="Add Employee" />
        </div>
    </form>
    
    
    </div>
  )
}

export default AddEmployee;