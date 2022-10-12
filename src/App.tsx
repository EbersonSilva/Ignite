import { Header } from './Components/Header'
import { NewTask } from './Components/NewTask'
import './global.css'
import styles from './App.module.css'


export function App() {
  
 return (
  <div>
    <Header/>
    <div className={styles.body}>
    <div className={styles.newtask}>
    <NewTask/>
    </div>
    </div>
  </div>
 )
}

