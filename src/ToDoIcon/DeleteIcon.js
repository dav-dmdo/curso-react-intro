import { ToDoIcon } from './index.js'

function DeleteIcon({ onDelete }) {
    return (
        <ToDoIcon
            type='delete'
            color='gray'
            onClick={onDelete}
        />
    );
}

export { DeleteIcon };