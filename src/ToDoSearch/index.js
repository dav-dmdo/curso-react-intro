import React from 'react'
import './ToDoSearch.css'
import { useContext } from 'react';
import { ToDoContext } from '../ToDoContext';

function ToDoSearch() {
    const { searchValue, setSearchValue } = useContext(ToDoContext);
    return (
        <input
            className='ToDoSearch'
            placeholder="Inserta un To-Do..."
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value)
            }}
        />
    );
}

export { ToDoSearch };