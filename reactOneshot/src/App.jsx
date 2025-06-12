// Hooks - special type of functions 
import React, {useState} from 'react'
const App = () =>{

 const [num , setNum] = useState(0)

  return(
    <div>
      <h3>Number is {num}</h3>
      <button onClick = {function(){
        setNum(num+10)
      }}>Increment</button>
      <button onClick = {
        function (){
          setNum(num-10)
        }
      }>Decrement</button>
    </div>
    
  )
}

export default App