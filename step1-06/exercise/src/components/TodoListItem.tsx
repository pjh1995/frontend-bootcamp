import React from 'react';
export class TodoListItem extends React.Component<any, any> {
  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
    }
  }

  handleChecked = (e) => {
    this.props.handleCompleted(this.props.id);
  };

  render() {
    return (
      <li className="todo">
        <label>
          <input type="checkbox" checked={this.props.completed} onChange={this.handleChecked} />
          <span>{this.props.label}</span>
        </label>
      </li>
    );
  }
}
