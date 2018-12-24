import React, { Component } from "react";
import logo from "./PathPlus.svg";
import "./App.css";
import TodoInput from "./components/Input";
import TodoList from "./components/List";

class App extends Component {
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
          <TodoInput />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
