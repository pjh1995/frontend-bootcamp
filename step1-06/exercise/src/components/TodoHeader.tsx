import React from 'react';

const filterOptions = ['all', 'active', 'completed'];

export class TodoHeader extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { labelInput: '' };
  }

  onClick = (e) => {
    this.props.handleFilter(e.target.value);
  };

  render() {
    const { filter } = this.props;

    return (
      <header>
        <h1>
          todos <small>(1.6 exercise)</small>
        </h1>
        <div className="addTodo">
          <input value={this.state.labelInput} onChange={this._onChange} className="textfield" placeholder="add todo" />
          <button className="submit">Add</button>
        </div>
        <nav className="filter">
          {filterOptions.map((option) => (
            <button className={filter === option ? 'selected' : ''} onClick={this.onClick} value={option} key={option}>
              {option}
            </button>
          ))}
        </nav>
      </header>
    );
  }
  _onChange = (evt) => {
    this.setState({ labelInput: evt.target.value });
  };
}
