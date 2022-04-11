import React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import {Task} from './Task'

export const Tasks = ({taskList,setTaskList}) => {

    const reorder =(taskList,startIndex, endIndex) => {
      
    //並び替え
    const removeList = taskList.splice(startIndex, 1);
    taskList.splice(endIndex,0, removeList[0]);
    setTaskList(taskList);

    }
    const handleDragEnd = (result) => {

      reorder(taskList, result.source.index, result.destination.index);
      
    }
    return (
      <div>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId='droppable'>
            {(provided) => (
              <div {...provided.droppableProps} 
                  ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                <Task 
                task={task}
                index={index}
                taskList={taskList} 
                setTaskList={setTaskList} />
                </div>)
              )}
              {provided.placeholder}
              </div>
            )}
        </Droppable>
            
      </DragDropContext>
      </div>
  )
}
