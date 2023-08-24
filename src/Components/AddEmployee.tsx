/* eslint-disable semi,no-multi-spaces */
import React,{useState} from "react";
//component
import { Iemployee } from "./Employee.type";
import "./EmployeeForm.style.css";

type props ={
    onBackBtnClickHnd :() => void
    onsubmitclickHnd :(data :Iemployee) => void
}
const AddEmployee = (props:props) => {
     const[firstName, setFirstName] = useState("");
     const[lastName,setLastName] = useState("");
     const[email,setEmail] = useState("");
     const{ onBackBtnClickHnd ,onsubmitclickHnd } = props;
    const onfirstNamechangeHnd =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setFirstName(e.target.value);
    };// eslint-disable-line semi

    const onLastNamechangeHnd =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setLastName(e.target.value);
        /* eslint-disable-next-line  semi */
    };
    const onemailchangeHnd =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value);
    };
    const onsubmitBtnclickHnd = () =>{
        const data :Iemployee ={
            id: new Date().toJSON().toString(),
            firstName: firstName,
            lastName: lastName,
            email:email
           };
           onsubmitclickHnd(data);
           onBackBtnClickHnd();        
    };
  return (
    <div className="form-container">
         <div>
            <h3>Add Employee Form</h3>
        </div>
    <form onSubmit={onsubmitBtnclickHnd}>
        <div>
            <label>FirstName :</label>
            <input type="text" value={firstName} onChange={(e)=>onfirstNamechangeHnd(e)}/>
        </div>
        <div>
            <label>LastName:</label>
            <input type="text" value={lastName} onChange={(e)=>onLastNamechangeHnd(e)} />
        </div>
        <div>
            <label>Email Add:</label>
            <input type="text" value={email} onChange={(e)=>onemailchangeHnd(e)} />
        </div>
        <div>
            <input type="button" value="Back" onClick={ onBackBtnClickHnd} />
            <input type="Submit" value="Add Employee" />
        </div>
    </form>
    </div>
  );
};
export default AddEmployee;