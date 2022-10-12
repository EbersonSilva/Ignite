import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import styles from './NewTask.module.css'
import { Task } from "./Task";

export function NewTask(){

  const [tasks, setTasks] = useState([
   'Tarefa de teste'
  ])

  const [newTaskText, setNewTaskText] = useState('')

  // const [countTask, setCountTask] = useState(0)

 // função para  Criação de nova tarefa
  function handleCreateNewTask(event: FormEvent){
    event.preventDefault()

    setTasks([...tasks, newTaskText]) 
    setNewTaskText('')

  }

  function handleNewTaskChange(event:ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity('')
    setNewTaskText(event.target.value)
  }

  function handleNewTaskInvalid(event:InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteTask(taskToDelete: string){
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task !== taskToDelete
    } )

    setTasks(tasksWithoutDeletedOne)

  }

  const isNewTaskEmpty = newTaskText.length === 0

  const countTask = tasks.length

  return(
    <div>
    <div className={styles.body}>

    <form 
    onSubmit={handleCreateNewTask} 
    className={styles.newtask}>
      <input 
      type="text" 
      value={newTaskText}
      name="task" 
      placeholder="Adicione uma nova tarefa" 
      onChange={handleNewTaskChange}
      onInvalid={handleNewTaskInvalid}
      required
      />
      <button type="submit" disabled={isNewTaskEmpty}>Criar <PlusCircle size={16}/></button>
    </form>

    <div className={styles.info}> 
    <p className={styles.infoCreate}>Tarefas criadas <span>{countTask}</span></p>
    <p className={styles.infoDone}>Concluidas <span>0</span></p>
    </div>
    </div>

    <div className={styles.taskList}>
      {tasks.map(task => {
        return <Task
        key={task} 
        content={task} 
        onDeleteTask={deleteTask} /> 
      })}
    </div>
    </div>
  )
}