import React from 'react'
import { useLinkClickHandler } from 'react-router-dom'

const Dropdown = () => {
  return (
    <center>
        <div className="dropdown-Container">
            <h4>Select from Dropdown</h4>
            <select name="dropdown" id="dropdown" >
                <option value="0">Select</option>
                <option value="Gowthami">One</option>
                <option value="Shabana">Two</option>
                <option value="Kalyani">Three</option>
            </select>
        </div>
    </center>
  )
}

export default Dropdown