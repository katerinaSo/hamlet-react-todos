import React, { Component } from "react";
import TodoItem from "./Item";
import "./List.css";

class TodoList extends Component {
  render() {
    const { items, clearList, clearItem } = this.props;

    return (
      <section className="list">
        <button className="btn btn-rotate" onClick={clearList}>
          <i className="fas fa-plus " id="rotated" />
        </button>

        {items.map(item => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              clearItem={() => clearItem(item.id)}
            />
          );
        })}
      </section>
    );
  }
}

export default TodoList;
