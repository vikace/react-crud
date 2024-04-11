import React from 'react'

export default function Table({dataArray}) {

  return (
    <table className='w-full'>
        <thead className='bg-sky-900'>
            <tr className='h-[32px] text-left'>
            <th className='p-2'>Id</th>
                <th >First name</th>
                <th>Last name</th>
                <th>Email</th>
                
            </tr>
        </thead>
       { dataArray.map((e,i)=>{
            const cn=i%2===0?'bg-sky-400':'bg-sky-500';
           return <tr className={'h-[32px]  '+cn}>
            <td className='p-2'>{e._links.self.href.split("/")[e._links.self.href.split("/").length-1]}</td>
                <td >{e.fname}</td>
                <td>{e.lname}</td>
                <td>{e.email}</td>
                
            </tr>
       })}
    </table>
  )
}
