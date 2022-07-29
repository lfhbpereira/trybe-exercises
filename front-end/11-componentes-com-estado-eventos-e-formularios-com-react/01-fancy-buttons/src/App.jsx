import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    
    this.state = {
      clicks1: 0,
      clicks2: 0,
      clicks3: 0
    };
  }

  handleClick1() {
    this.setState((previousState) => ({
      clicks1: previousState.clicks1 + 1
    }));
  }
  
  handleClick2() {
    this.setState((previousState) => ({
      clicks2: previousState.clicks2 + 1
    }));
  }
  
  handleClick3() {
    this.setState((previousState) => ({
      clicks3: previousState.clicks3 + 1
    }));
  }

  buttonColor(number) {
    return number % 2 === 0 && number !== 0 ? 'green' : 'white';
  }

  render() {
    const { clicks1, clicks2, clicks3 } = this.state;
    return (
      <div>
        <button
          onClick={ this.handleClick1 }
          style={{ backgroundColor: this.buttonColor(clicks1) }}
        >
          Primeiro botão - Cliques: { clicks1 }
        </button>
        <button
          onClick={ this.handleClick2 }
          style={{ backgroundColor: this.buttonColor(clicks2) }}
        >
          Segundo botão - Cliques: { clicks2 }
        </button>
        <button
          onClick={ this.handleClick3 }
          style={{ backgroundColor: this.buttonColor(clicks3) }}
        >
          Terceiro botão - Cliques: { clicks3 }
        </button>
      </div>
    );
  }
}

export default App;
