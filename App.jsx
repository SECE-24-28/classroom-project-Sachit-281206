import { useState } from 'react';
import Display from './Display'

function App() {

  var name="sachit";
  var id=10;
  const arr=[1,2,3,4,5]
  const person={name:"sibi",age:20};

  const recieve=(d)=>{
    data,senddata
  }

  return (
    <>
    <h1>Welcome</h1>
    <Display name={name} id={id} arr={arr} obj={person} />
    </>
  )
}

export default App
