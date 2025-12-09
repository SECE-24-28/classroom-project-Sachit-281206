import {useState} from 'react'

const Display2=()=>{
    const [name,setName]=useState("");
    return(
        <>
        <h2>Hii Display2 </h2>
        <input type="text"  onChange={(e)=>{setName(e.target.value)}}></input>
        <h3>You typed:{name}</h3>
        </>
    )
}

export default Display2


// useState is used to store a value when ,  value is shown in UI , value remain same after render.
// To show value in UI , react render the component . It rerender to show the updated value in UI.