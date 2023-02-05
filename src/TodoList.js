import React from 'react'

const TodoList = ({todolist}) => {
  return (
    <div>
        {todolist.map((todo,index)=>
        <div>
            <h5>{todo} &nbsp; <button>Delete</button></h5>
        </div>
        )}
        
    </div>
  )
}

export default TodoList