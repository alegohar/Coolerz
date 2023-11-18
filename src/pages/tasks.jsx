import React from "react";
import { useState } from 'react'
import { Header } from "../Components/Header";
import swal from "sweetalert2"
function Task() {
  const [count, setCount] = useState(0)
  const [email,setEmail] = useState("")

  const [name,setName] = useState("")
  const [ename,seteName] = useState("")
const [taskStatus,settaskStatus] = useState("")
const [uStatus,setuStatus] = useState()
const[message,setMessage]=useState("")
const newArr = [];
const [arrayPrint,setarrayPrint] = useState([]);

const [fpassword, setFpassword] = useState(true);
var a = 0;
const handleSubmit = (e)=>{
  e.preventDefault()
  swal.fire( 
  "form submitted",`name: ${name}, employee name: ${ename}, websie: ${taskStatus}, message: ${message}`);
  const copy = [...arrayPrint];
  copy.push({ name, ename, taskStatus, message });
  setarrayPrint(copy);
  

}
  return (
    <>
    <div className="flex">
<div className="flex-5">

    <form onSubmit={handleSubmit} className='flex-col justify-center bg-purple-100'>
    <h1 className='font-extrabold text-2xl mt-3 italic bg-purple-700 text-white'>Task Assignment Form</h1>
    <div>
      <input 
      onChange={(valuez)=>{
        setName(valuez.target.value);
        if(name === " ")
        {
          alert("Please Enter Correct Name");
        }
        else if(!isNaN(name))
        {
          alert("Please Enter Characters");
        }

      }} 
      required
    
      type="text" className='h-10 border  mt-7 p-3' placeholder="Task Name" />
    </div>
    <div>
      <input 
      onChange={(e)=>{
        seteName(e.target.value);
        if(ename === " ")
        {
          alert("Please Enter Correct Name");
        }
        if(!isNaN(ename))
        {
          alert("Please Enter Characters");
        }

      }} 
      required
    
      type="text" className='h-10 border  mt-7 p-3' placeholder="Assigned to" />
    </div>
<div>
<select onChange={(event)=>{
        settaskStatus(event.target.value)
      }} >
<option value="..">Select</option>
  <option value="Complete">Complete</option>
  <option value="InComplete">InComplete</option>
  <option value="Assigned">Assigned</option>
  </select>
</div>
    <div>
       
      <input
      onChange={(event)=>{
        setEmail(event.target.value)
      }} 
      required
      type="text" className='h-10 border  mt-7 p-3'placeholder="example123@gmail.com" />
    </div>

    <div>
      <textarea 
      required
      onChange={(e)=>{
        setMessage(e.target.value)
      }}
      name="" id="" cols="30" rows="10" className='  border  mt-7 p-3 h-80 w-96' placeholder='Task Details'></textarea>
    </div>

    <button className='border mt-10 rounded-lg' type='Submit'>Submit</button>
    </form>
  
    
</div>

<div className="flex-7 p-10">

<table>
<thead>
  <tr>
    <td>Task Name</td>
    <td>Task Status</td>
    <td>Assigned to</td>
    <td>Details</td>
    <td>Change Status</td>
  </tr>
  </thead>
  {arrayPrint.map(
        (detailz, index) => {
           return <>
            <tr key={index}> 
    <td>{detailz.name}</td>
    <td>{detailz.taskStatus}</td>
    <td>{detailz.ename}</td>
    <td>{detailz.message}</td>
    <td><select value={detailz.taskStatus} onChange={(event) => {
                      const updatedArray = [...arrayPrint];
                      updatedArray[index].taskStatus = event.target.value;
                      setarrayPrint(updatedArray);
      }} >
<option value="..">Select</option>
  <option value="Complete">Complete</option>
  <option value="InComplete">InComplete</option>
  <option value="Assigned">Assigned</option>
  </select></td>
  <td><button onClick={
    (event) => {
      const updatedArray = [...arrayPrint];
      updatedArray.splice(index, 1);
      setarrayPrint(updatedArray);
}
  }><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg></button>
</td>
    </tr>
           </>
        }

    )}
</table>
</div>
    </div>
    
    </>
  )
}

export default Task
