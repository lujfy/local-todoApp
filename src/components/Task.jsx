
import React, { useState } from 'react'
import styles from './task.module.css'
import trash from '../assets/trash.svg'
import Checkbox from './Checkbox'




const Task = ({ name , done , onToggle , onTrash , onRename}) => {
  
  const [editMode , setEditMode ] = useState(false)

  
  return (
    <div className={`${styles.container} ${done? `${styles.done}` : `${styles.notdone}`}`} >
        
        <Checkbox checked={done} onClick={() => onToggle(!done)}/>
        {
          editMode?
          <form onSubmit={ev => {ev.preventDefault();setEditMode(false);}}>
            <input type="text" value={name} onChange={ev => onRename(ev.target.value)}/>
          </form>
          : 
          <span onClick={() => setEditMode((prev) => !prev)}>{name}</span>
        }
        <button className={styles.trash} onClick={onTrash}>
          <img src={trash} alt="" />
        </button>
    </div>
  )
}

export default Task