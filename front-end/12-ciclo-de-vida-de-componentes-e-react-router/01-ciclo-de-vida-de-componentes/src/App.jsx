import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Connections from './components/Connections';

class App extends React.Component {
  constructor() {
  }

  changeProfile() {
    const { showProfile } = this.state;

    this.setState({ showProfile: !showProfile });
  }

  render() {
    return (
      <div>
        <Profile />
        <Connections />
      </div>
    );
  }
}

export default App;
