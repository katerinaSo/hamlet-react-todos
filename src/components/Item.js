import React, { Component } from "react";
import "./Item.css";

export default class TodoItem extends Component {
  render() {
    const { id, title, clearItem } = this.props;

    return (
      <div className="item">
        <button className="btn btn-rotate" onClick={console.log(clearItem(id))}>
          <i className="fas fa-plus " id="rotated" />
        </button>
        <span>{title}</span>
      </div>
    );
  }
}
