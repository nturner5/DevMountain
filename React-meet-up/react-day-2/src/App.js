import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
    counter: 0
    }
  }



  increment() {
    this.setState({counter: this.state.counter + 1})
  }
  render() { // called when state changes and props changes and when it is initialized
    return (
      <div className="App">
          <span>{this.state.counter}</span>
          <button onClick={this.increment.bind(this)}>Power Up!</button>
      </div>
    );
  }
}

export default App;
