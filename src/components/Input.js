import React, { Component } from "react";
import "./Input.css";
class TodoInput extends Component {
  render() {
    const { item, handleChange, handleAdd } = this.props;
    return (
      <section>
        <form className="input" onSubmit={handleAdd}>
          <button type="submit" className="btn">
            <i className="fas fa-plus" />
          </button>
          <input
            type="text"
            className="window"
            placeholder="add here what needs to be done next"
            value={item}
            onChange={handleChange}
          />
        </form>
      </section>
    );
  }
}

export default TodoInput;
