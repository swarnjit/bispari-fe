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
          <p>Yo Andy</p>
        </header>
      </div>
    );
  }
}

export default App;
