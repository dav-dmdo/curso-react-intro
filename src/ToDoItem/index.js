import { CompleteIcon } from '../ToDoIcon/CompleteIcon.js'
import { DeleteIcon } from '../ToDoIcon/DeleteIcon.js'
import '../styles/ToDoItem.css'

function ToDoItem({text, completed, onComplete, onDelete}){
    return(
      <li className="ToDoItem">
        <CompleteIcon 
          completed={completed}
          onComplete={onComplete}
        />

        <p className={`ToDoItem-p ${completed && 'ToDoItem-p--completed'}`}>
          {text}
        </p>
        
        <DeleteIcon 
          onDelete = {onDelete}
        />
        
      </li>
    );
  }

export { ToDoItem };