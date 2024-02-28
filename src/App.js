import { useRef, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './fonts/ShadowsIntoLight-Regular.ttf'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  
  const [x , setx] = useState([])

  const inputRef = useRef()

  const add = () => {
    const task = {taskDone : false , value : inputRef.current.value}

    setx([...x , task])

    inputRef.current.value = ""
  }

  const done = (index) => {
    const newState = [...x]

    newState[index].taskDone = !newState[index].taskDone

    setx(newState)
  }

  const deleteTask = (index) => {
    const newState = [...x]

    newState.splice(index , 1)

    setx(newState)
  }
  
  return (
    <div className="App mx-auto col-11 col-sm-9 col-md-7 col-lg-5">
      <h2>ToDo List</h2>

      <ul>
        {
          x.map(({taskDone , value} , index) => {
            return <div className='item'>
                    <li onClick={() => done(index)} className={taskDone ? "taskDone" : ""}> {value} </li>
                    <span onClick={() => deleteTask(index)}><i class="far fa-times-circle"></i></span>
            </div>
          })
        }
      </ul>

      <div className='input-btn'>
        <input ref={inputRef} placeholder='Enter new task...'></input>
        <button onClick={add}><i class="fas fa-plus"></i></button>
      </div>
    </div>
  );
}

export default App;
