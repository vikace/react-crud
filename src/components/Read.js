import axios from 'axios';
import React, { useState } from 'react'
import Output from './Output';
import Form from './Form';

export default function Read({id}) {
  const [input,setInput]=useState(id);
  const formFields=[{type:'number',id:'sid',"name":'id',"label":'Student id',value:input},{type:"submit",id:"submit",value:"Fetch"}];
  const [output,setOutput]=useState(null);
  async function onSubmit(e)
  {
    e.preventDefault();
    const uri="/api/students/"+input;
    await axios.get(uri).then((response)=>{
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
      {!output?<div className='flex flex-col items-center w-full'>
        <h1 className='text-3xl font-semibold'>Read student by id:</h1>
      <Form inputDetails={formFields}
              submitForm={onSubmit}
              formChange={onChange} />
      </div>:<div className='flex flex-col items-center w-full'>
      <h1 className='text-3xl font-semibold'>Read Result:</h1><Output data={output}/></div>
      }
      
    </div>
  )
}
