import './ToDoCount.css';
import { useContext } from 'react';
import { ToDoContext } from '../ToDoContext';



function ToDoCount() {
  const {
    completedTodos: completed,
     totalTodos: total
  } = useContext(ToDoContext);
  return (
    <h1 className='ToDoCount'>
      Has completado <span>{completed}</span> de <span>{total}</span> ToDos
    </h1>
  );
}

export { ToDoCount };

