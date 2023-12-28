import './ToDoForm.css'
import { useContext, useState } from 'react';
import { ToDoContext } from '../ToDoContext';

function ToDoForm() {
    const {setOpenModal,
        toAddTodo
    } = useContext(ToDoContext);

    const [newToDovalue, setNewToDoValue]  = useState('');


    const onSubmit = (event) =>{
        event.preventDefault();
        console.log(event)
        console.log(newToDovalue);
        const flag = toAddTodo(newToDovalue);
        if (flag){
            setOpenModal(false);
        }
    }
    
    const onCancel = (event) =>{
        event.preventDefault();
        console.log(event);
        setOpenModal(false);
    }

    const onChange = (event) =>{
        setNewToDoValue(event.target.value);
    } 

    return (
        <form onSubmit={onSubmit} onReset={onCancel}>
            <label>Agrega un nuevo ToDo</label>
            <textarea 
            className="ToDoTextArea" 
            name="ToDoTextArea" 
            placeholder='justo aqui...'
            autoFocus 
            value={newToDovalue}
            onChange={onChange}
            />
            <div className='button-container'>
                <button 
                className="ToDoForm-button cancel-button"
                type='reset'
                >Cancelar
                </button>

                <button 
                className="ToDoForm-button add-button"
                type='submit'
                >Añadir
                </button>
            </div>
        </form>
    );
}

export { ToDoForm };