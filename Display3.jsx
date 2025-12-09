import {useRef} from 'react'

const Display3=()=>{
    const input=useRef();
    const view=()=>{
        console.log("Data : ",input.current.value);
    }
    return(
        <>
        <h2>Display3 </h2>
        <input type="text" ref={input}></input>
        <button onClick={view}>Click</button>
        </>
    )
}

export default Display3;

//useRef is used stores the value when ,  value remains same after render , value is not shown in UI
