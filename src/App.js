import React from 'react';
import './App.css';
import { SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG } from 'constants';

//event handling

class App extends React.Component {

  state = {
    keywords: '',
    val : 'myval'
  }
  changeHandler(event) {
    this.setState({
      keywords: event.target.value
    })
  }
  render() {
    return (
      <div className="container">
        <div className="title" >My React App</div>
        <input onChange={this.changeHandler.bind(this)}/>
        <div className="key">{this.state.keywords}</div>
      </div>
    );
  }
}


export default App;