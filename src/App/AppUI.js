import { ToDoCount } from '../ToDoCount/index.js'
import { ToDoSearch } from '../ToDoSearch/index.js'
import { ToDoList } from '../ToDoList/index.js'
import { ToDoItem } from '../ToDoItem/index.js';
import { ToDoCreator } from '../ToDoCreator/index.js';
import { ToDosLoading } from '../ToDosLoading/index.js';
import { ToDosError } from '../ToDosError/index.js';
import { ToDoContext } from '../ToDoContext/index.js';
import { Modal } from '../Modal/index.js';
import { useContext } from 'react';




function AppUI() {
    const {
        loading,
        error,
        todos,
        searchedTodos,
        toCompleteToDo,
        toDeleteToDo,
        openModal
    } = useContext(ToDoContext);
    return (
        <>
            <ToDoCount />
            <ToDoSearch />
            <ToDoList>
                {loading && (
                    <>
                        <ToDosLoading />
                        <ToDosLoading />
                        <ToDosLoading />
                    </>
                )}
                {error && (<ToDosError />)}
                {(!loading && todos.length === 0) && <p>'Crea tu primer To-Do'</p>}
                {searchedTodos.map(({ text, completed }) => (
                    <ToDoItem
                        key={text}
                        text={text}
                        completed={completed}
                        onComplete={() => toCompleteToDo(text)}
                        onDelete={() => toDeleteToDo(text)}
                    />
                ))}
            </ToDoList>
            <ToDoCreator />
            {openModal && (
                <Modal>
                    propiedad children de componente modal
                </Modal>)}
        </>
    );
}

export { AppUI };