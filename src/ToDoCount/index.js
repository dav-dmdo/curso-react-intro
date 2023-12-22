import '../styles/ToDoCount.css';

function ToDoCount({total, completed}) {
    return(
      <h1 className='ToDoCount'>
        Has completado <span>{completed}</span> de <span>{total}</span> ToDos
      </h1>
    );
}

export {ToDoCount};
  
