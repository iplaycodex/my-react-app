import React, { Component } from "react";
import TodoItem from "./TodoItem";
import "../static/css/todolist.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    // this.state 称之为组件的状态
    this.state = {
      inputVal: "",
      list: []
    };
    this.del = this.del.bind(this);
  }
  // render 函数表示返回的组件的模板
  render() {
    /**
     * 注意!在JSX语法中规定了在return中返回的最外层必须有且仅有一个元素,也就是是下面的div['to-do-list-wrap']
     * 这样的话内容区就会被一个div包裹住,如果你不想的话可以使用React的辅助标签Fragment,这样渲染的时候内容区的标签就不会被包裹在一个div中
     * 它类似vue中的template是一个空标签
     */
    return (
      <div className="to-do-list-wrap">
        <p>TODOLIST</p>
        {/* 在JSX中如果给某个标签添加一个class,不可以使用class='xx',而是要写成className='xx' */}
        <input
          type="text"
          placeholder="请输入您要添加的内容"
          className="input"
          value={this.state.inputVal}
          onChange={this.inputDidChange.bind(this)}
        />
        <button onClick={this.addList.bind(this)}>添加</button>
        <ul>
          {/* 在react循环一个标签如下所示,它没有vue这种v-for的指令 */}
          {this.state.list.map((item, index) => {
            return (
              // 1.这里的li返回的是转义后的li,相当于vue中的v-text,如果我们想渲染一个输入的标签该怎么做呢?
              // <li key={index} >
              //     <span>{item}</span>
              //     <button onClick={this.del.bind(this,index)}>删除</button>
              // </li>
              // <li key={index} dangerouslySetInnerHTML={{__html:item}}></li>    注意这个写法!!!

              // 2.使用自己定义的todoItem组件来渲染,使用content作为子组件的接口来接收父组件传递下来的item
              <TodoItem
                key={index}
                content={item}
                index={index}
                deleteItem={this.del}
              />
            );
          })}
        </ul>
      </div>
    );
  }
  inputDidChange(e) {
    /**
     * 在react中如果想要修改state中的值得话是不可以直接this.state.inputVal = XX;
     * this.state.inputVal = e.target.value;
     * 必须使用一个方法this.setState({xx:yy}); 这样才可以修改,如下所示:
     */
    this.setState({
      inputVal: e.target.value
    });
  }
  addList() {
    /**
     * 添加数据
     * 数组解构赋值
     */
    this.setState({
      list: [...this.state.list, this.state.inputVal],
      inputVal: ""
    });
  }
  del(index) {
    /**
     * immutable
     * react 的设计思想是不允许我们直接改变state中的任何数据
     * 每次我们修改的时时候都需要深拷贝这个数据副本,修改它的副本
     */
    let arr = [...this.state.list];
    arr.splice(index, 1);
    this.setState({
      list: arr
    });
  }
}
export default TodoList;
