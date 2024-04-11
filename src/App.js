import './App.css';
import {useState} from 'react';
import Create from './components/Create';
import Read from './components/Read';
import ReadAll from './components/ReadAll';
import Update from './components/Update';
import Delete from './components/Delete';
import Button from './components/Button'

function App() {
  const [operation,setOperation]=useState("create"); //operation=create|read|readall|update|delete
  var Comp=operation==="create"?Create:operation==="readall"?ReadAll:operation==="read"?Read:operation==="update"?Update:Delete;
  function handleCreate()
  {
    setOperation('create')
  }
  function handleRead()
  {
    setOperation('read');
  }
  function handleReadAll()
  {
    setOperation('readall');
  }
  function handleUpdate()
  {
    setOperation('update');
  }
  function handleDelete()
  {
    setOperation('delete');
  }
  

  return (
    <>
      <div className="nav  grid grid-cols-5 gap-1 p-2 rounded-md bg-sky-300 text-white">
        <Button clickHandler={handleCreate} active={operation==='create'}>Create a Student</Button>
        <Button clickHandler={handleReadAll} active={operation==='readall'}>Read All</Button>
        <Button clickHandler={handleRead} active={operation==='read'}>Read by ID</Button>
        <Button clickHandler={handleUpdate} active={operation==='update'}>Update a Student</Button>
        <Button clickHandler={handleDelete} active={operation==='delete'}>Delete a Student</Button>
      </div>
      <div className='result bg-black/90 h-[100vh] text-white'>
        <Comp/>
      </div>
    </>
  );
}

export default App;
