import React, { useState } from "react";
//component
import { Iemployee } from "./Employee.type";
import "./EmployeeList.style.css";
import EmployeeModal from "./EmployeeModal";
type props ={
    list:Iemployee[]
    onDeleteClickHnd:(data:Iemployee)=> void
};
const Employee = (props:props) =>{
    const {list,onDeleteClickHnd} =props;
    const [showModal ,setShowModal] = useState(false);
    const [dataToShow,setDataToShow] =useState(null as Iemployee| null);
    const viewEmployee = (data : Iemployee) =>{
        setDataToShow(data);
        setShowModal(true);
    };   
    const oncloseModal = () => setShowModal(false);
    return(
        <div>
            <table>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Actions</th>
  </tr>
  {list.map(employee =>{
    console.log(employee);
    return(
        <tr key={employee.id}>
    <td>{`${employee.firstName} ${employee.lastName}`}</td>
    <td>{employee.email}</td>
    <td>
      <div>
        <input type="button" value="view" onClick={() =>viewEmployee (employee)} />
        <input type="button" value="Edit" />
        <input type="button" value="Delete" onClick={() =>onDeleteClickHnd(employee)} />
      </div>
    </td>
  </tr>
    );
  })}
</table>
  {showModal && dataToShow!==null && (<EmployeeModal onClose={oncloseModal} data={dataToShow}/> )}
        </div>
  );
};
export default Employee;
  
  
  


    