import React from 'react'

export const TaskCardDeleteButton = (props) =>  {
  const {taskCardsList,
    setTaskCardsList,
    taskCard} = props;
  const taskCardDeleteAction = (id) => {
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));

  }
  return (
    <div>
      <button className='taskCardDeleteButton' onClick={()=> taskCardDeleteAction(taskCard.id)}><i className="fas fa-times"></i></button>
    </div>
  )
}
