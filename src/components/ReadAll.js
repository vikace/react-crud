import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from './Table'
import Pagination from './Pagination';
export default function ReadAll() {
  const [page,setPage]=useState({"number":0});
  const [output,setOutput]=useState(null);
  const [err,setErr]=useState('');

  async function getData(Pgno)
  {
    var uri='/api/students?'+'page='+Pgno+'&'+'size=10';
    await axios.get(uri).then((response)=>{
      setOutput(response.data._embedded.students);
      setPage({...response.data.page});      
  }).catch((error)=>{
    setErr('request failed with error code: '+error.status);
  });
  }
  if(output==null)
  getData(page.number);
  if(output!=null)
 { 
  return (
    !err?<div className='flex flex-col justify-center items-center'>
      <div className='p-2'><h1 className='text-3xl font-semibold'>All Students({page.totalElements}):</h1></div>
      <div className=' w-4/5'>
      <Table dataArray={output}/>    
        <div className='flex flex-row justify-center p-2'><Pagination page={page}
          clickHandler={getData}/></div>  
    </div>
    
    </div>:<div>{err}</div>
  )}
}
