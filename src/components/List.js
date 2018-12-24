import React, { Component } from "react";
import TodoItem from "./Item";
import "./List.css";

class TodoList extends Component {
  render() {
    return (
      <section className="list">
        <TodoItem />
        <TodoItem />
      </section>
    );
  }
}

export default TodoList;
