import React, { useState } from 'react'

export const TaskCardTitle = () => {
  const [isClick, setIsClick] =  useState(false);
  const [inputCardTitle, setInputCardTitle] = useState('today');
  const handleClick = () => {
    setIsClick(true);
  }
  const handleChange = (e) => {
    setInputCardTitle(e.target.value);
  }

  const handleBlur = () => {
    setIsClick(false);
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      setIsClick(false);
  }

  return (
    <div onClick={handleClick} className="TaskCardTitleArea">
        {isClick ? (
            <form onSubmit={handleSubmit}>
            <input className="taskCardTitleInput" 
            type="text" 
            autoFocus 
            onChange={handleChange} 
            onBlur={handleBlur} 
            value={inputCardTitle} 
            maxLength={10} /></form>
            ) :(  
            <h3>{inputCardTitle}</h3>)}
    </div>
  )
}
