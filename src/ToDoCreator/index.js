import '../styles/ToDoCreator.css'


function ToDoCreator({ searchValue, todos, setTodos }) {

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