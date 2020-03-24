import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  // state = {
  //   strng: [],
  //   x: ""
  // };

  // async componentDidMount() {
  //   fetch("http://localhost:8081/hello")
  //     .then(response => response.json())
  //     .then(data =>
  //       this.setState({
  //         strng: data
  //       })
  //     );
  // }
  render() {
    // const { strng } = this.state;
    // console.log(strng);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Edit and save to reload.</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
