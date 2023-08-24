/* eslint-disable semi,no-multi-spaces */
import React from "react";
//component
import { Iemployee } from "./Employee.type";
import "./EmployeeModal.style.css";
type props ={
    onClose:() =>void
    data:Iemployee
};
const EmployeeModal = (props:props) => {
    const {onClose ,data}= props;
  return (
    <div>
        <div id="myModal" className="modal">
<div className="modal-content">
  <span className="close" onClick={onClose}>&times;</span>
 <div>
    <h1>Employee Data</h1>
    <div>
        <div>
            <label>First Name :{data.firstName}</label>
        </div>
        <div>
            <label>Last Name :{data.lastName}</label>
        </div>
        <div>
            <label>Email Add :{data.email}</label>
        </div>
    </div>
    </div>
 </div>
</div>
</div>
  );
};
export default EmployeeModal;
   







