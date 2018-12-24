import React, { Component } from "react";
import "./Item.css";

export default class TodoItem extends Component {
  render() {
    return (
      <div className="item">
        <button className="btn btn-rotate">
          <i className="fas fa-plus " id="rotated" />
        </button>
        <span>list item</span>
      </div>
    );
  }
}
