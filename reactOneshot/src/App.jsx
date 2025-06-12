// JSX
import React from 'react'
const App = () =>{
  const user ="naman"
  return(
    <div>
     <h1>Username is {user}</h1>
     {/* {} bracker are used to a call a parameter or a variable in the function  */}
     <button>Change User</button>
    </div>
    
  )
}

export default App