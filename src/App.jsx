import { useEffect, useState } from 'react'

import './App.css'
import TaskForm from './components/TaskForm'
import Task from './components/Task'
import confetti from 'canvas-confetti'
import Background from './components/background/Background'


function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem("tasks" , JSON.stringify(tasks))
  } , [tasks])

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    setTasks(tasks || [])
  } , [])

  function addTask(name) {
    setTasks(prev => {
      return [...prev, {name:name,done:false}];
    });
  }

  function removeTask(IndexToRemove) {
    
    setTasks(prev => {
      return (
        prev.filter((taskObject , id) => id !== IndexToRemove)
      )
    })
  }

  function updateTaskDone(taskIndex, newDone) {
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  }

  const numberComplete = tasks.filter(t => t.done).length ;
  const numberTotal = tasks.length ;

  function getMessage() {
    const percentage = numberComplete / numberTotal * 100 ;
    if (percentage === 0) {
      return "Try to do at least one! , please 🥺" ;
    }
    if (percentage === 100) {
      confetti({spread : 120 , particleCount : 100})
      return "Verry well done! , good job 😆👍"
    }
    
    return "Keep the streak continue 💪😤"
  }

  function renameTask(index,newName) {
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[index].name = newName;
      return newTasks;
    })
  }

  return (
    <>
    <Background className='background'/>
    <div className='app'>
      
      <h1>{numberComplete}/{numberTotal} COMPLETE</h1>
      <h2>{getMessage()}</h2>
      <TaskForm onAdd={addTask}/>
      <p>To update task , click on the task</p>
      {tasks?.map((task , id) => {
        return(
          <Task  {...task} 
                 onRename={newName => renameTask(id,newName)}
                 onToggle={done => {updateTaskDone(id , done)}}
                 onTrash={() => removeTask(id)}
                 />
        )
      })}
    </div>
    </>
  )
}

export default App
