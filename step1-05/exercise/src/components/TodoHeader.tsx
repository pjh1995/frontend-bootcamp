import React, { useState } from 'react';

type TodoHeader = {
  onAddTodo: (todo: string) => void;
};

const TodoHeader = (props: TodoHeader) => {
  const { onAddTodo } = props;
  const [todo, setTodo] = useState<string>('');

  const handleChangeTodoInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTodo = e.target.value;
    if (newTodo != null) setTodo(e.target.value);
    e.target.value = '';
  };

  const handleAddTodoClick = () => {
    onAddTodo(todo);
  };

  return (
    <header>
      <h1>
        todos <small>(1.5 exercise)</small>
      </h1>
      <div className="addTodo">
        <input className="textfield" placeholder="add todo" onChange={handleChangeTodoInput} value={todo} />
        <button className="button" onClick={handleAddTodoClick}>
          Add
        </button>
      </div>
      <nav className="filter">
        <button className="completed">all</button>
        <button>active</button>
        <button>completed</button>
      </nav>
    </header>
  );
};

export default TodoHeader;
