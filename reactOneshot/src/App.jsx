// Hooks - special type of functions 
import React, {useState} from 'react'
const App = () =>{

  // let user ="naman"

  const [user , nameChange] = useState('naman')
  const [a , setA] = useState(10)

  const changeUser =()=>{
    nameChange("mohit")
  }

  const changeA = () =>{
    setA(20)
  }

  return(
    <div>
     <h1>Username is {user}</h1>
     {/* {} bracker are used to a call a parameter or a variable in the function  */}
     <button onClick={changeUser}>Change User</button>


     <h1>Value of a is {a}</h1>
     <button onClick={changeA}>Change A </button>
    </div>
    
  )
}

export default App