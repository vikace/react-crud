import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import Output from './Output';
import Form from './Form';
export default function Delete({id}) {
  const [input,setInput]=useState(id);
  const formFields=[{type:'number',id:'sid',"name":'id',"label":'Student id',value:input},{type:"submit",id:"submit",value:"Delete"}];
  const [output,setOutput]=useState(null);
  async function onSubmit(e)
  {
    e.preventDefault();
    const uri="/api/students/"+input;
    await axios.delete(uri).then((response)=>{
      setOutput({...response.data,["status"]:response.status});
    }).catch((error)=>{
      console.log(JSON.stringify(error));
      setOutput({'message':error.message,"status":error.code});
    });
    
  }
  function onChange(e)
  {
    setInput(e.target.value);
  }

  
  return (
    <div className='flex justify-center p-3'>
      
      {!output?<div className='flex flex-col w-full items-center'>
        <h1 className='text-3xl font-semibold'>Delete Student:</h1><Form inputDetails={formFields}
              submitForm={onSubmit}
              formChange={onChange} /></div>:<div className='w-full flex justify-center items-center flex-col'>
                <h1 className='text-3xl font-semibold'>Deletion result: </h1>
                <Output data={output}/>
              </div>
      }
      
    </div>
  )
}
