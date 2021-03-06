import React, { Component } from 'react';
import logo from './logo.svg';
import ButtonExampleButton from './component/button/btn';
import FirstExample from './component/first_example/first_example';
import SecondExample from './component/second_example/second_example';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main className="content">
          <FirstExample></FirstExample>
          <SecondExample></SecondExample>
          <ButtonExampleButton></ButtonExampleButton>
          <ButtonExampleButton></ButtonExampleButton>
        </main>
      </div>
    );
  }
}

export default App;
