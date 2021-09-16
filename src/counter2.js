import React,{useEffect,useState} from 'react'

function Counter2() {
    const [count2,setCount] =useState(0)

    useEffect(()=>{
        console.log('Mounting...');
        console.log('Updating...'+count2);
        return()=>{
            console.log('Unmounting...');
            console.log('Cleaning count2::value='+count2);
        }
    },
    [count2]

    )
    return (
        <div>
            <button onClick={()=>setCount(count2+1)}>Increment</button>
            <h1>Hello iam counter2:{count2}</h1>
        </div>
    )
}

export default Counter2