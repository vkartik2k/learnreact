import React from 'react';
import './App.css';
import { SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG } from 'constants';

//inline styling

class App extends React.Component {
  
  render() {
    let styles = {
      container : {
        backgroundColor : 'red'
      }
    }
    return (
      React.createElement('div',{className: 'main',style : styles.container}, "Hello React")
    );
  }
}


export default App;