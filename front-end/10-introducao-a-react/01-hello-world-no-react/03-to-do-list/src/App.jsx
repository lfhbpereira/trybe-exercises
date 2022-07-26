import React from 'react';

const task = (value) => {
  return (
    <li>{ value }</li>
  );
};

const tasks = ['Study', 'Listen to music', 'Sleep'];

class App extends React.Component {
  render() {
    return (
      <ul>{ tasks.map((element) => task(element)) }</ul>
    );
  }
}

export default App;
