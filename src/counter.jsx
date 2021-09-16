import React,{useEffect} from 'react'

function Counter(props) {
    useEffect(()=>{
        console.log('Mounting...');
        return ()=>{console.log('Unmounting...');}
    })

    return (
        <div>
        
        <h1>counter :{props.count}</h1>
        </div>
    )
}

export default Counter
