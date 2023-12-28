import { ToDoProvider } from '../ToDoContext/index.js';
import { AppUI } from './AppUI.js'

function App() {
  return (
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  );
}


export default App;
