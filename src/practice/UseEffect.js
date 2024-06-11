import React, { useState, useEffect } from 'react'

const UseEffectPractice = () => {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        console.log(`Component-A count is clicked ${count} times`)
    },[count])
  return (
    <div>
        <center>
            <h5>Component-A count is {count}</h5>
            <button onClick={()=> setCount(count+1)}> Click ComponentA</button>
        </center>
    </div>
  )
}

export default UseEffectPractice