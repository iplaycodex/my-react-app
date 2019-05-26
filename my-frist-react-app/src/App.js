import React,{ Component,Fragment } from 'react';
import HelloWorld from './components/HelloWorld';

class App extends Component{
  render(){
    return(
      <Fragment>
        <div>This is my frist react app!</div>
        <HelloWorld/>
      </Fragment>
    )
  }
}

export default App;
