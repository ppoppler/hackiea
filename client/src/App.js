import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

constructor(){
  super();
  this.state = {
    buzzwords:'',
    descriptions:'',
    apptypes:'',
    subjects:'',
  }
}

  componentDidMount() {
    this.callBuzzwords()
    .then(res => this.setState({buzzwords: res.express}))
    .catch(err => console.log(err));
    this.callAppTypes()
    .then(res => this.setState({apptypes: res.express}))
    .catch(err => console.log(err));
    this.callDescriptions()
    .then(res => this.setState({descriptions: res.express}))
    .catch(err => console.log(err));
    this.callSubjects()
    .then(res => this.setState({descriptions: res.express}))
    .catch(err => console.log(err));
  };

  callBuzzwords = async () => {
    const response = await fetch('/api/buzzwords');
    const body = await response;
    console.log(body);
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  callAppTypes = async () => {
    const response = await fetch('/api/apptypes');
    const body = await response;
    console.log(body);
    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  callDescriptions = async () => {
    const response = await fetch('/api/descriptions');
    const body = await response;
    console.log(body);
    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  callSubjects = async () => {
    const response = await fetch('/api/subjects');
    const body = await response;
    console.log(body);
    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>Lorem ipsum jdfoijdsif dsifdsaoi foidsa foidsa jfoidsajf
            difjodsfoijdsaofjdsaofjdsaofjoidsajfoidsaf
            ijsaofjdsofjodsafjdsaoifjos
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
