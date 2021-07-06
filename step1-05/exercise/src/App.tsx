import React, { useState } from 'react';
import { TodoHeader, TodoListItem } from './components';
import { Todo } from './types';

const TodoApp = () => {
  console.log('reset');
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const getLastId = (): number => {
    if (todoList.length === 0) return 0;
    return todoList[todoList.length - 1].id;
  };

  const onAddTodo = (todo: string) => {
    const id = getLastId();
    console.log(todo, id);
    setTodoList([
      ...todoList,
      {
        id,
        todo,
      },
    ]);
  };

  return (
    <>
      <TodoHeader onAddTodo={onAddTodo} />
      <ul className="todos">
        {todoList.map((todo) => (
          <TodoListItem todo={todo} key={todo.id} />
        ))}
      </ul>
      <footer>
        <span>{todoList.length} items left</span>
        <button>Clear Completed</button>
      </footer>
    </>
  );
};

export default TodoApp;
