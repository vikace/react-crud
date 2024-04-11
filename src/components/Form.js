import React from 'react'
import Input from './Input'
export default function Form({inputDetails,submitForm,formChange}) {
  
  return (
    <form onSubmit={(e)=>{submitForm(e)}} onChange={(e)=>formChange(e)} className='w-1/2'>
      {inputDetails.map((input=>{
        return <Input info={{...input}}/>
      }))}
    </form>
  )
}
