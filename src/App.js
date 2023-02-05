import React,{useState} from 'react'
import TodoList from './TodoList'


const App = () => {
  const [task,setTask]=useState('')
  const [todo,setTodo] = useState([])
  const ChangeHandler=e=>{
    setTask(e.target.value)
  }
  const submitHandler=e=>{
    e.preventDefault()
    const newTodo=[...todo,task]
    setTodo(newTodo)
    setTask('')

  }

  const deleteHandler= (indexValue)=>{
    const newTodos=todo.filter((todo,index)=> index !==  indexValue)
  setTodo(newTodos)
  }
    return (
    <div>
      <center>
        <div className='card'>
          <div className='card-body'>
          <form onSubmit={submitHandler}>
          <input type='text'value={task} name='todo' onChange={ChangeHandler}/> &nbsp; &nbsp;
          <input type='submit' value='Add' name='todo'/>
        </form>
        <TodoList todolist={todo} deleteHandler={deleteHandler}/>
          </div>

        </div>
      </center>
    </div>
  )
}

export default App