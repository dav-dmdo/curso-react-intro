import React, { createContext, useState} from "react";
import { useLocalStorage } from "./useLocalStorage";

const ToDoContext = createContext();

const filterTodos = (searchValue, todos, searchedTodos) => {
    if (searchValue !== '') {
        searchedTodos = todos.filter(
            (todo) => { return todo.text.toLowerCase().includes(searchValue.toLowerCase()) }
        )
    }
    return searchedTodos;
}

function ToDoProvider({ children }) {
    const {
        item: todos,
        saveItem: setTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [...todos]

    searchedTodos = filterTodos(searchValue, todos, searchedTodos);

    const toCompleteToDo = (text) => {
        let newTodos = [...todos];
        let index = newTodos.findIndex((e) => e.text === text);
        newTodos[index].completed = !(newTodos[index].completed);
        setTodos(newTodos);
    }

    const toDeleteToDo = (text) => {
        let newTodos = [...todos];
        let index = newTodos.findIndex((e) => e.text === text);
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    const toAddTodo = (text) => {
        let flag = false;
        if (text && !(exists(text))) {
            let newTodos = [...todos];
            let newTodo = { text, completed: false };
            newTodos.unshift(newTodo);
            setTodos(newTodos);
            flag= true;
        }
        return flag;
    }

    const exists = (text) =>{
        for (const todo of todos) {
            if (todo.text.includes(text)){
                return true;
            }
        }
        return false;
    }

    return (
        <ToDoContext.Provider value={{loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            toCompleteToDo,
            toDeleteToDo,
            todos,
            setTodos,
            openModal,
            setOpenModal,
            toAddTodo
        }} >
            {children}
        </ToDoContext.Provider>


    )
}

export { ToDoContext, ToDoProvider };
