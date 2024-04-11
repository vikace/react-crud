import React from 'react'
import {useState} from 'react';
import axios from 'axios';
import Form from './Form';
import Output from './Output';
export default function Update() {
  const [input,setInput]=useState({});
    const [output,setOutput]=useState(null);
    function handleChange(e)
    {
        const {name,value}=e.target;
        setInput({...input, [name]:value});
    }
   async function handleSubmit(e)
    {
        
        e.preventDefault();
        const headers={"Content-Type":"application/json"}
        const uri='/api/students/'+input.id;
        delete input.id;
       await axios.put(uri,JSON.stringify(input),{headers}).then((response)=>{
            setOutput({...response.data,["status"]:response.status});
        }).catch((error)=>{
            console.log(JSON.stringify(error));
            setOutput({...error.data,["status"]:error.status});
        });
    }
    const inputDetails=[{type:'number',id:'id',"name":'id',"label":'Student Id',value:input.id},{type:'text',id:'fname',"name":'fname',"label":'First name',value:input.fname},{type:'text',id:'lname',name:'lname',label:'Last name',value:input.fname},{type:'email',id:'email',name:'email',label:'Email',value:input.fname},{type:"submit",value:"Update"}];

    return output===null? <div className='text-white flex justify-center flex-col items-center'>
        <h1 className='font-semibold text-3xl text-center mb-2'>Update:</h1>
        <Form
    inputDetails={inputDetails}
    submitForm={handleSubmit}
    formChange={handleChange}/>
    </div>:<div className='flex flex-col items-center rounded-md'>
    <h1 className='font-semibold text-3xl text-center mb-2 text-white'>Updated Result:</h1>
    <Output data={output}/></div>;
}
