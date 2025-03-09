import { use } from 'react';
import {useState,useEffect} from 'react';
function App(){
  const [count,setCount]=useState(5);
  const [stop,setStop]=useState(true);
  useEffect(()=>{
    console.log(stop);
      if(stop){
    const interval=setInterval(()=>{
      
    setCount((prev)=>prev-1);
  },1000);
  return ()=> {
        clearInterval(interval);
  }
  }


  },[stop])
  const handle=()=>{
      console.log("finish");
      setStop(!stop);
  }

  return(
    <div>
    <div><h1>{count}</h1></div>
    <button onClick={handle}>Resume</button>
    </div>
  )
}
export default App;