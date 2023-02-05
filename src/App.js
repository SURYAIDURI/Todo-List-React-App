import React,{useState} from 'react'

const App = () => {
  const [task,setTask]=useState('')
  
  const ChangeHandler=e=>{
    setTask(e.target.value)
  }
  const submitHandler=e=>{
    e.preventDefault()
    console.log(task)

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
          </div>

        </div>
      </center>
    </div>
  )
}

export default App