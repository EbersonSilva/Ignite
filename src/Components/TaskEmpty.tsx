import styles from './TaskEmpty.module.css'
import imgNote from '../assets/Clipboard.png'

export function TaskEmpty(){
  return(
    <div>
      <div className={styles.taskEmpty}>
        <img src={imgNote} alt="" />
        <p><span>Você ainda não tem tarefas cadastradas</span></p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}