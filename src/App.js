import React from 'react';
import './App.css';
import { SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG } from 'constants';

//event handling

class App extends React.Component {

  clicked(event){
    console.log(event);
  }
  
  render() {
    return (
      <div className="click" onClick={this.clicked}>Click bait</div>
    );
  }
}


export default App;