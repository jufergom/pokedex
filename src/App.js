import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./modules/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

class App extends Component {
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <div className="App">
          <header className="App-header">
            <Login />
          </header>
        </div>
      </ReduxProvider>
    );
  }
}

export default App;
