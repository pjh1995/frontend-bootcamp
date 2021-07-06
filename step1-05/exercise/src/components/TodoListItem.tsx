import React from 'react';
import { Todo } from '../types';

type TodoItem = {
  todo: Todo;
};
const TodoListItem = (props: TodoItem) => {
  const { todo } = props;

  return (
    <li className="todo">
      <label>
        <input type="checkbox" /> {todo.todo}
      </label>
    </li>
  );
};

export default TodoListItem;
