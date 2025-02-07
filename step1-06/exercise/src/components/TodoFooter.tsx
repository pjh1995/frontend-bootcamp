import React from 'react';

export const TodoFooter = (props: any) => {
  const itemCount = Object.keys(props.todos).filter((id) => !props.todos[id].completed).length;
  return (
    <footer>
      <span>{itemCount} items left</span>
      <button className="submit" onClick={props.allComplete}>
        Clear Completed
      </button>
    </footer>
  );
};
