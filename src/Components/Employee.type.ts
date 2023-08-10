  export interface Iemployee{
    id:string;
    firstName:string;
    lastName:string;
    email:string;
}

  const dummyEmployeeList : Iemployee [] = [{
    id:new Date().toJSON().toString(),
    firstName:"Dummy1",
    lastName :"Dummy11",
    email:"Dummy1@gmail.com",
},
];
export default dummyEmployeeList;
export  enum PageEnum{
    list,
    add,
    edit,
}