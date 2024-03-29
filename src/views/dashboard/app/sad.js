//src/App.js
import React, { useState } from "react";
import { Api } from '../constant/constant';
 
function Addmoreinput() {
  const [inputList, setinputList]= useState([{firstName:'', lastName:''}]);
 
  const handleinputchange=(e, index)=>{
    const {name, value}= e.target;
    const list= [...inputList];
    list[index][name]= value;
    setinputList(list);
    console.log("firstnamr>>>>>",inputList)
    console.log("lastnamr>>>>>",inputList )
 
 
  }
  const handleSubmit = async () => {
    const result = fetch(`${Api}/poattachments/asa`, {
        method: "POST",
        body: JSON.stringify({ inputList }),
        headers: { "Content-Type": "Application/json" },
    });
    if (result) {
       
     
   
    }
};
  const handleremove= index=>{
    const list=[...inputList];
    list.splice(index,1);
    setinputList(list);
  }
 
  const handleaddclick=()=>{ 
    setinputList([...inputList, { firstName:'', lastName:''}]);
  }
  return (
    <div className="container">
        <div className="row">
        <div className="col-sm-12">
         <h5 className="mt-3 mb-4 fw-bold">ReactJS Add Remove Inputs Fields Dynamically</h5>
            
            { 
            inputList.map( (x,i)=>{
              return(
              <div className="row mb-3">
                 <div class="form-group col-md-4">
                 <label >First Name</label>
                  <input type="text"  name="firstName" class="form-control"  placeholder="Enter First Name" onChange={ e=>handleinputchange(e,i)} />
               </div>
               <div class="form-group col-md-4">
               <label >Last Name</label>
                  <input type="text"  name="lastName" class="form-control"   placeholder="Enter Last Name" onChange={ e=>handleinputchange(e,i) }/>
               </div>
               <div class="form-group col-md-2 mt-4">
               {
                  inputList.length!==1 &&
                  <button  className="btn btn-danger mx-1" onClick={()=> handleremove(i)} style={{marginBottom: 10}}>Remove</button>
               }
               { inputList.length-1===i &&
               <button  className="btn btn-success" onClick={ handleaddclick}>Add More</button>
               }
               <button  className="btn btn-success" onClick={ handleSubmit}>  More</button>
               </div>
            </div>
              );
             } )} 
 
                
       </div>
     </div>
    </div>
  );
}
export default Addmoreinput;