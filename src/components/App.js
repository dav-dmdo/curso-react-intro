import {ToDoCount} from './ToDoCount.js'
import {ToDoSearch} from './ToDoSearch.js'
import {ToDoList} from './ToDoList.js'
import { ToDoItem } from './ToDoItem.js';
import { ToDoCreator } from './ToDoCreator.js';

const defaultToDos  = [
  {text: 'Banarme', completed: true},
  {text: 'Vestirme', completed: false},
  {text: 'Elegir Pelicula', completed: false},
  {text: 'Buscra a mama', completed: false},
  {text: 'Buscra a Pierina', completed: false},
];

function App() {
  return (
    <>
      <ToDoCount total={20} completed={15} />
      <ToDoSearch />

      <ToDoList>
        {defaultToDos.map(({text, completed}) => (
          <ToDoItem 
            key={text} 
            text={text} 
            completed={completed}
          />
        ))}
      </ToDoList>

      <ToDoCreator/>
    </>
  );
}


export default App;
