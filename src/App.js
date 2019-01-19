import React, { Component } from 'react';

class App extends Component {

  componentWillUnmount() {
    localStorage.clear();
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );

    // return (
    //   <div>
    //     {this.props.children}
    //   </div>
    // );
  }
}

export default App;
