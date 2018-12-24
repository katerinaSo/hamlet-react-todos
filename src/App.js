import React, { Component } from "react";
import logo from "./PathPlus.svg";
import "./App.css";
import TodoInput from "./components/Input";
import TodoList from "./components/List";
import uuid from "uuid";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: ""
  };

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleAdd = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };

    const updatedList = [...this.state.items, newItem];
    this.setState({
      items: updatedList,
      item: "",
      id: uuid()
    });
  };

  clearItem = id => {
    const filteredList = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredList
    });
  };

  clearList = () => {
    this.setState({ items: [] });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            ToDo <span style={{ color: "#f8572e" }}>or</span> ~ ToDo
          </p>
        </header>

        <div className="container">
          <TodoInput
            item={this.state.item}
            handleChange={this.handleChange}
            handleAdd={this.handleAdd}
          />
          <TodoList
            items={this.state.items}
            key={this.state.id}
            clearList={() => this.clearList()}
            clearItem={this.clearItem}
          />
        </div>
      </div>
    );
  }
}

export default App;
