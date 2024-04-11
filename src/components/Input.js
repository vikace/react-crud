import React from 'react'

export default function ({info}) { //info={type:___,name:____,id:___,label:___}
  const Comp=info.type!=='submit'?<><label htmlFor={info.id} className='font-semibold'>{info.label}:</label>
  <br/>
  <input type={info.type} name={info.name} id={info.id} className='h-8 text-black py-2 px-2 rounded-sm w-full'/></>:
  <><input type={info.type} value={info.value} className='bg-sky-400 h-8 py-1 text-center w-full rounded-sm font-semibold mt-2'/></> ;
  return (
    <div className='mb-2'>
       {Comp}
    </div>
  )
}
