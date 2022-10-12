import { Trash } from "phosphor-react";
import styles from './Task.module.css'

interface TaskProps{
  content:string
  onDeleteTask:(task: string) => void
}

export function Task({content, onDeleteTask} : TaskProps){

  function handleDeleteTask(){
    onDeleteTask(content)
  } 

  return(
    <div className={styles.task}>
      <div className={styles.taskText}>
      <input type="checkbox"id="checkboxId"/>
      <label htmlFor='checkboxId'><p>{content}</p></label>
      </div>
      <button 
      onClick={handleDeleteTask}  
      title="Deletar comentário">
        <Trash size={14} />
      </button>
    </div>
  )
}