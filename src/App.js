import { ToDoCount } from './ToDoCount.js'
import { ToDoSearch } from './ToDoSearch.js'
import { ToDoList } from './ToDoList.js'
import { ToDoItem } from './ToDoItem.js';
import { ToDoCreator } from './ToDoCreator.js';
import React, { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage.js';
// const defaultToDos = [
//   { text: 'Banarme', completed: true },
//   { text: 'Vestirme', completed: true },
//   { text: 'Elegir Pelicula', completed: true },
//   { text: 'Buscra a mama', completed: false },
//   { text: 'Buscra a Pierina', completed: false },
// ];

// localStorage.setItem('TODOS_V1', defaultToDos);
// localStorage.removeItem('TODOS_V1');


const filterTodos = (searchValue, todos, searchedTodos) => {
  if (searchValue !== '') {
    searchedTodos = todos.filter(
      (todo) => { return todo.text.toLowerCase().includes(searchValue.toLowerCase())}
    )
  }
  return searchedTodos;
}

function App() {

  const [todos, setTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = useState('');


  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [...todos]

  searchedTodos = filterTodos(searchValue, todos, searchedTodos);

  const toCompleteToDo = (text) => {
    let newTodos = [...todos];
    let index = newTodos.findIndex((e) => e.text === text );
    newTodos[index].completed = !(newTodos[index].completed);
    setTodos(newTodos);
  }

  const toDeleteToDo = (text) => {
    let newTodos = [...todos];
    let index = newTodos.findIndex((e) => e.text === text );
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <>
      <ToDoCount
        total={totalTodos}
        completed={completedTodos}
      />

      <ToDoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <ToDoList>
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

      <ToDoCreator 
      searchValue={searchValue}
      todos = {todos}
      setTodos={setTodos}
      />
    </>
  );
}


export default App;
