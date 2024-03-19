
import React, { useState } from 'react'
import styles from './taskform.module.css'

const TaskForm = ({onAdd}) => {
    const [taskName , setTaskName] = useState('')
    function handleSubmit(ev) {
      ev.preventDefault();
      onAdd(taskName);
      setTaskName('')
    }
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
        <button className={styles.btn}>+</button>
        <input className={styles.input} type='text'  value={taskName} onChange={ ev => setTaskName(ev.target.value)}  placeholder='write something'/>
        
    </form>
  )
}

export default TaskForm