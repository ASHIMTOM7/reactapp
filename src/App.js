import './app.css'
import Header from './components/Header';
import {useState} from 'react'
import Counter from './counter'
import Employee from './employee'
import Counter2 from './counter2'


function App() {
  const [count,setCount] =useState(0)
  const [state,setState] =useState(false)
  const data = 'born for jesus christ who is the son of god'
  const addcount=()=>
  {
    setCount(count+1)
    console.log(count);
  }
  let obj =
  {
    title:'1st counter',
    count
  }

  let emp =[{name:'Jesus',description:'Son of god'},
            {name:'Joseph',description:'Father of jesus'},
            {name:'Mary',description:'Mother of jesus'}]
  return (
    <div>
      <Header/>
    <h1 style={{color:'red'}}   >hello world countervalue:{count}</h1>
    <p>hello i am pour soul {data}</p>
    <button onClick={addcount}> Counter: {count}</button>
    <Counter {...obj}/>
    <Counter title='2nd counter' count={count}/>
    <h2 onClick={()=>setState(!state)}>Show/Hide</h2>
    {state && <Counter counter={count}/>}

    {
      emp.map((obj,index)=>{
        return(
          <Employee key={index} {...obj}/>
        )
      })
    }

    <Counter2 />

    </div>
  );
}

export default App;
