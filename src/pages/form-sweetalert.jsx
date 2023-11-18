import React from "react";
import { useState } from 'react'
import { Header } from "../Components/Header";
import swal from "sweetalert2"
function CustForm() {
  const [count, setCount] = useState(0)
  const [name,setName] = useState("")
const [email,setEmail] = useState("")
const[message,setMessage]=useState("")
const [website,setWebsite]=useState("")
const newArr = [];
const [fpassword, setFpassword] = useState(true);
var a = 0;
const handleSubmit = (e)=>{
  e.preventDefault()
  swal.fire( 
  "form submitted",`name: ${name}, email: ${email}, websie: ${website}, message: ${message}`);
newArr.splice(a,4,{name},{email},{website},{message});
console.log(newArr);
a++;
}
  return (
    <>
    <center>
    <form onSubmit={handleSubmit} className='flex-col justify-center bg-purple-100'>
    <h1 className='font-extrabold text-5xl mt-3 italic bg-purple-700 text-white'>Contact Form</h1>
    <div>
      <input 
      onChange={(e)=>{
        setName(e.target.value);
        if(name === " ")
        {
          alert("Please Enter Correct Name");
        }
        if(!isNaN(name))
        {
          alert("Please Enter Characters");
        }

      }} 
      required
    
      type="text" className='h-10 border  mt-7 p-3' placeholder="Name" />
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
      <input 
      required
      onChange={(e)=>{
        setWebsite(e.target.value)
      }}
      type="text" className='h-10 border  mt-7 p-3' placeholder='Website'/>
    </div>
      <div>
      <input type={fpassword ? "password" : "text"}></input><button onClick={() => {
        setFpassword(!fpassword);
      }}>
        {fpassword ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
</svg>)}




</button>

      </div>
    <div>
      <textarea 
      required
      onChange={(e)=>{
        setMessage(e.target.value)
      }}
      name="" id="" cols="30" rows="10" className='  border  mt-7 p-3 h-80 w-96' placeholder='Type Your Feedback'></textarea>
    </div>

    <button className='border mt-10 rounded-lg' type='Submit'>Submit</button>
    </form>
  
      </center>  
    </>
  )
}

export default CustForm
