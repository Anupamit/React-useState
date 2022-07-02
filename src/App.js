import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount]= useState(0)
  return (
    <div className="App">
      <p>Count is: {count}</p>
      <div className='button'>
        <button className='btn1' onClick={()=>setCount(count+1)}>Add 1</button>
        <button className='btn2' onClick={()=>setCount(count-1)}>Decrease 1</button>
        <button className='btn3'  onClick={()=>setCount(count+20)}>Add 20</button>
        <button className='btn4'  onClick={()=>setCount(count-5)}>Decrease 5</button>
        <button className='btn5' onClick={()=>setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;
