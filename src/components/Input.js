import React, { Component } from "react";
import "./Input.css";
class TodoInput extends Component {
  render() {
    return (
      <section>
        <form className="input">
          <button type="submit" className="btn">
            <i className="fas fa-plus" />
          </button>
          <input type="text" className="window" />
        </form>
      </section>
    );
  }
}

export default TodoInput;
