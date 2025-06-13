import React,{useState} from 'react'
const App = () =>{

  const [username , setUsername] = useState('')
  const submitHandler = (e) =>{
    e.preventDefault()
    console.log(username)
    setUsername('')
  }
  return(
    <div>
      <form onSubmit = {
        (e)=>{
          submitHandler(e)        
        }
      }>
        <input 
        value={username}
        onChange = {(e)=>{
          setUsername(e.target.value)
        }}
        className="px-4 py-3 text-xl m-5" type="text" placeholder="Enter you name" />
        <button className="px-4 m-5 py-3 text-xl font-semibold bg-emerald-600 rounded text-white">Submit</button>
      </form>
    </div>  
  )
}

export default App