import React from 'react'
import Button from './Button'
export default function Pagination({page,clickHandler}) {
    function getOthers()
    {
        
    }
  return (
    <div className='flex flex-row w-1/5 align-baseline justify-evenly'>{page.number!=0?<div className='w-fit'><Button clickHandler={()=>clickHandler(page.number-1)} active={false} >Prev</Button></div>:null}
    <div className='w-fit p-2 rounded-lg bg-sky-500'>Page no: {page.number+1}</div>{page.number!=page.totalPages-1?<div className='w-fit'><Button clickHandler={()=>clickHandler(page.number+1)} active={false} >next</Button></div>:null}</div>
  )
}
