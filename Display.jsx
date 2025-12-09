function display(datas){
    const {name,id,arr,obj}=datas
    return (
        <>
        <h1>Hello {name}</h1>
        <h2>Your Id:{id}</h2>
        <h2>Array: {arr}</h2>
        <h2>Object: {obj.name},{obj.age}</h2> 
        <button onClick={()=>{receive(mydata)}}>send Button</button>

        </>
    )
}

export default display