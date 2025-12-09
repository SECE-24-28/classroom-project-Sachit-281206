import {useState} from 'react'

const Display4=()=>{

    const[student,setStudent]=useState({name:"sachit",gender:"M",age:19});
    console.log("The current state:",student)


    function updateName(){
        setStudent((previousData)=>{
            console.log("Pre Data:",previousData)
            return(
                {...previousData,name:"demo",age:20}
            )
        })
    }
    return (
        <>
        <h1>Name:{student.name}</h1>
        <h1>gender:{student.gender}</h1>
        <h1>Age:{student.age}</h1>
        <button onClick={updateName}>change Name</button>
        </>
    )
}
export default Display4