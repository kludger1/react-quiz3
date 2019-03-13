import React, { Component } from 'react';
import './App.css';
import Content from './Content';
import Sidebar from './Sidebar';

class App extends Component {
  state = {
      show: true
  }

  toggleSidebar = () => {
    this.state.show ? this.setState({show: false}) : this.setState({show: true})
  }

  render() {
    return (
      <div className="App">
        <div className="container">
         {this.state.show ? <Sidebar toggleSidebar={this.toggleSidebar}/> : <button className="show" onClick={this.toggleSidebar}>Show</button>}
          <Content />
        </div>

      </div>
    );
  }
}

export default App;
