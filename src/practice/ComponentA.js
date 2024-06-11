import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ErrorFallback from './ErrorFallback'
//import ErrorBoundary from './ErrorBoundary'

const ComponentA = () => {
    const[count,setCount]=useState(0)
    const navigate = useNavigate()
    const clickhandler = () => {
        setCount(count+1);
        console.log(`Component-A count is clicked ${count} times`);
        if(count > 5){
            // throw new Error(" Count exceeded 5")
            navigate('/ErrorFallback')
        }

    }
  return (
    <div>
        <center>
            <h5>Component-A count is {count}</h5>
            <button onClick={()=>{clickhandler()}} >Click ComponentA</button>
        </center>
    </div>
  )
}

export default ComponentA