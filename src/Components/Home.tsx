import { useState } from "react";
import "./Home.style.css";
import {Iemployee, PageEnum } from "./Employee.type"
import dummyEmployeeList from "./Employee.type";
import Employee from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import { on } from "events";
import Edit from "./Edit";
const Home = () => {
    const [employee,setEmployee]=useState(dummyEmployeeList as Iemployee[]
        );
        const[shownPage,setShownPage]=useState(PageEnum.list)
        const onAddEmployeeclickHnd = () =>{
            setShownPage(PageEnum.add);
        }
        const showListPage =()=>{
            setShownPage(PageEnum.list)
        }
        const addEmployee = (data :Iemployee) =>{
          setEmployee([...employee ,data]);
        }
        const deleteemployee =(data : Iemployee) =>{
            const indexToDelete =employee.indexOf(data);
            const tempList =[...employee]

            tempList.splice(indexToDelete,1);
            setEmployee(tempList)
        };
    return (
        <>
            <article className="artical-header">
                <header>
      
                <h2>CRUD WITH TYPESCRIPT</h2>

                </header>
            </article>
          <section className="section-part">
            <div>
                {shownPage === PageEnum.list && (<>
                <input type="button" value="Add Employee" onClick={onAddEmployeeclickHnd} className="add-employee-btn"/>
                <Employee list={employee} onDeleteClickHnd={deleteemployee}></Employee>
                </>)}
                
            </div>
        {shownPage === PageEnum.add && <AddEmployee   onBackBtnClickHnd={showListPage} onsubmitclickHnd={addEmployee}/>}


        {shownPage === PageEnum.edit && <Edit/>}
          </section>

        </>
    )
}
export default Home;