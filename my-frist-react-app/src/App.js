import React,{ Component,Fragment } from 'react';
import HelloWorld from './components/HelloWorld';
import TodoList from './components/TodoList';

class App extends Component{
  render(){
    return(
      <Fragment>
        <div>This is my frist react app!</div>
        <hr/>
        <HelloWorld/>
        <hr/>
        <TodoList/>
      </Fragment>
    )
  }
}

export default App;
