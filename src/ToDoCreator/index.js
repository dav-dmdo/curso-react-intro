import './ToDoCreator.css'
import { ToDoContext } from '../ToDoContext';
import { useContext } from 'react';

function ToDoCreator() {
    const { searchValue, todos, setTodos } = useContext(ToDoContext);
    
    const toAddTodo = (text) => {
        if (text) {
            let newTodos = [...todos];
            let newTodo = { text, completed: false };
            newTodos.unshift(newTodo);
            setTodos(newTodos);
        }
    }
    return (
        <button
            className="ToDoCreator"
            onClick={() => toAddTodo(searchValue)}
        > + </button>
    );
}

export { ToDoCreator };