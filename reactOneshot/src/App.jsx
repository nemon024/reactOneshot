// Hooks - special type of functions 
import React, {useState} from 'react'
const App = () =>{

 const [num , setNum] = useState(0)

 const submitHandler = (e) =>{
  e.preventDefault()
  console.log("submitted")
 }

  return(
    <div>
      <form action="" onSubmit={(e) =>{
        submitHandler(e)
      }}>
        <input className="px-4 py-3 text-xl m-5" type="" placeholder="Enter you name" />
        <button className="px-4 m-5 py-3 text-xl font-semibold bg-emerald-600 rounded text-white">Submit</button>
      </form>
    </div>  
  )
}

export default App