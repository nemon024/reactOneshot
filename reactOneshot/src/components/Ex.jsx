import React from 'react'
import Ex2 from './Ex2'

const Ex = (props) =>{
  return(
    <>
    <div>
      Example {props.name}
    </div>
    <Ex2 username={props.name}/>
    </>
  )
}

export default Ex;