import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modelOpen: false
  }

  showModal = () => {
    this.setState({modelOpen: true})
  }

  hideModal = () => {
    this.setState({modelOpen: false})
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <Modal closed={this.hideModal} show={this.state.modelOpen}/>
        <Backdrop show={this.state.modelOpen}/>
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
