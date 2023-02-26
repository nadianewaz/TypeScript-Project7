import React, { useState } from 'react'

const NewUser = () => {
    const [userName, setUserName] = useState("")
    const handleUserName = (event : React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event?.target.value);
    }
    const handleClick = (event : React.MouseEvent<HTMLButtonElement>) => {
        console.log(userName);
    }

  return (
    <>
    <h2>Create NewUser</h2>
    <input type="text" placeholder='Enter your name' value={userName} onChange={handleUserName}/>
    
   <button onClick={handleClick}>Show name</button>
    
    
    
    </>
  )
}

export default NewUser