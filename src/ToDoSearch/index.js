import React from 'react'
import '../styles/ToDoSearch.css'

function ToDoSearch({ searchValue, setSearchValue }) {

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