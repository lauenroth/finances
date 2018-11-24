import React, { Component } from 'react';
import { Navigation, Button } from '../components';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <main>
          <Button>Add time</Button>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
