import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function randomWait() {
  return 200 + (Math.round(Math.random() * 5000) + 1);
}

function mockAwait(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        return reject(new Error('Boom!'));
      }

      resolve(new Date().toISOString());
    }, randomWait());
  });
}

class App extends Component {
  state = {
    loading: false,
    loaded: false,
    error: null,
    data: null,
  };

  fetchAsync = shouldFail => {
    this.setState({
      loading: true,
      loaded: false,
      error: null,
      data: null,
    });

    mockAwait(shouldFail)
      .then(value => {
        this.setState({
          loading: false,
          loaded: true,
          data: value,
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error,
        });
      });
  };

  render() {
    const {
      loading,
      loaded,
      error,
      data,
    } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          {loading && <p className="is-status">Loading...</p>}
          {loaded && <p className="is-note">Output: {data}</p>}
          {error && <p className="is-log">Error: {error.message}</p>}
          <button className="do-success" onClick={() => this.fetchAsync()}>Run async call</button>
          <button className="do-failure" onClick={() => this.fetchAsync(true)}>Run async call (with errors)</button>
        </div>
      </div>
    );
  }
}

export default App;
