import React, { Component } from "react";
class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.del = this.del.bind(this);
  }
  render() {
    //  在子组件中使用this.props.content来渲染父组件传递过来的数据
    return <li onClick={this.del}>{this.props.content}</li>;
  }
  del() {
    this.props.deleteItem(this.props.index);
  }
}
export default TodoItem;
