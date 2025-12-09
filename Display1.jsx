function Display1(){
    var name="demo";
    console.log("I am inside",name);
  
    function changeName(d){
        var a=d;
        console.log("I am inside ",a);
        return (
            <h2>clicked {a}</h2>
        )
    }
    return (
        <>
        <h1>React Demo</h1>
        <button onClick={()=>{changeName('Clicked !')}}>Click Me</button>
        </>
    )
}

export default Display1 