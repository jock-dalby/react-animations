import React, { Component } from "react";
import Transition from 'react-transition-group/Transition';

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modelOpen: false,
    showBlock: false
  }

  showModal = () => {
    console.log('test')
    this.setState({modelOpen: true})
  }

  hideModal = () => {
    this.setState({modelOpen: false})
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" onClick={() => this.setState(prevState => ({showBlock: !prevState.showBlock}))}>Toggle</button>
        <br />
        {/* mountOnEnter unmountOnExit adds the Transition element to and from the dom as it is shown and hidden */}
        <Transition in={this.state.showBlock} timeout={1000} mountOnEnter unmountOnExit>
          {state => (
            <div style={{
              backgroundColor: 'red',
              width: 100,
              height: 100,
              margin: 'auto',
              transition: 'opacity 1s ease-out',
              opacity: state === 'exited' ? 0 : 1
              }}></div>
          )}
        </Transition>
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
