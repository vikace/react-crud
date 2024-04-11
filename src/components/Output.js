import React from 'react'

export default function Output({data}) {
    var keys=Object.keys(data);
    const newKeys=keys.filter((e)=>e!=="_links");
    keys=newKeys;
    const classCol= ' grid-rows-['+keys.length+']';
  return (
        <div className={'grid text-white grid-cols-2 p-2 rounded-md overflow-hidden w-1/2 '+classCol}>
            {keys.map((e,i)=>{
                const cn=i%2==0?' bg-sky-400':' bg-sky-500';
                return<><div className={'p-3 font-semibold '+cn}>{e}</div>
                <div className={'p-3 font-semibold '+cn}>{data[e]}</div></>   
            })}
        </div>
  )
}
