import React from 'react'
import "./Form.css"
const form = () => {
  return (
    <form>
        <input type="text" placeholder='Enter a todo ...' className='todo-input'></input>
        <button type ="submit" className='add-button'> Add </button>
    </form>
  )
}

export default form