import './ToDoCreator.css'
import { ToDoContext } from '../ToDoContext';
import { useContext } from 'react';

function ToDoCreator() {
    const { setOpenModal } = useContext(ToDoContext);
    

    return (
        <button
            className="ToDoCreator"
            onClick={() => setOpenModal(state => !state )}
        > + </button>
    );
}

export { ToDoCreator };