import React from 'react'

export default function Button({children,clickHandler,active}) {
    var temp=active?'bg-sky-500':'hover:bg-sky-400';
    const cn="p-2 rounded-md font-semibold  w-full cursor-pointer "+temp;
  return (
    <button onClick={clickHandler} className={cn}>{children}</button>
  )
}
