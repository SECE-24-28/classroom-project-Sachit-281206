import {useState} from 'react'
const Display5=()=>{

    const [student,setStudent]=useState({username:"",email:""});
    return (
        <>
        <h2>UseState in form</h2>
        <label>UserName:</label>
        <input type="text" onChange={(e)=>{setStudent((prev)=>({...prev,username:e.target.value}))}}></input>
        <label>Email:</label>
        <input type="email" onChange={(e)=>{setStudent((prev)=>({...prev,email:e.target.value}))}}></input>
        <h3>UserName:{student.username}</h3>
        <h3>Email:{student.email}</h3>
        </>
    )
}
export default Display5