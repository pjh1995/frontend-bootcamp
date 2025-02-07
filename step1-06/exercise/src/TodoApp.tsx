import React from 'react';
import { TodoFooter } from './components/TodoFooter';
import { TodoHeader } from './components/TodoHeader';
import { TodoList } from './components/TodoList';

export class TodoApp extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      todos: {
        '04': {
          label: 'Todo 4',
          completed: true,
        },
        '03': {
          label: 'Todo 3',
          completed: false,
        },
        '02': {
          label: 'Todo 2',
          completed: false,
        },
        '01': {
          label: 'Todo 1',
          completed: false,
        },
      },
      filter: 'all',
    };
  }

  handleFilter = (filter) => {
    this.setState({
      filter,
    });
  };

  handleCompleted = (id) => {
    const target = this.state.todos[id];

    if (!target) return;
    this.setState((prevState) => ({
      todos: {
        ...prevState.todos,
        [id]: {
          label: target.label,
          completed: !target.completed,
        },
      },
    }));
  };

  allComplete = () => {
    let newTodos = {
      ...this.state.todos,
    };

    Object.keys(newTodos).forEach(function (v) {
      newTodos[v].completed = true;
    });

    this.setState((prevState) => ({
      todos: {
        ...prevState.todos,
        ...newTodos,
      },
    }));
  };

  render() {
    const { filter, todos = [] } = this.state;
    return (
      <div>
        <TodoHeader filter={filter} handleFilter={this.handleFilter} />
        <TodoList todos={todos} filter={filter} handleCompleted={this.handleCompleted} />
        <TodoFooter todos={todos} allComplete={this.allComplete} />
      </div>
    );
  }
}
