import React,{Component} from 'react';

class TodoList extends Component{
    constructor(props){
        super(props);
        // this.state 称之为组件的状态
        this.state = {
            inputVal:'',
            list:[]
        }
    }
    // render 函数表示返回的组件的模板
    render(){
        /**
         * 注意!在JSX语法中规定了在return中返回的最外层必须有且仅有一个元素,也就是是下面的div['to-do-list-wrap']
         * 这样的话内容区就会被一个div包裹住,如果你不想的话可以使用React的辅助标签Fragment,这样渲染的时候内容区的标签就不会被包裹在一个div中
         * 它类似vue中的template是一个空标签
         */
        return(
            <div className="to-do-list-wrap">
                <p>TODOLIST</p>
                <input type="text" placeholder="请输入您要添加的内容" 
                       value={this.state.inputVal} 
                       onChange={this.inputDidChange.bind(this)}/>
                <button>添加</button>
                <ul>
                    <li>吃饭</li>
                    <li>睡觉</li>
                    <li>打豆豆</li>
                </ul>
            </div>
        )
    }
    inputDidChange(e){
        /**
         * 在react中如果想要修改state中的值得话是不可以直接this.state.inputVal = XX;
         * this.state.inputVal = e.target.value;
         * 必须使用一个方法this.setState({xx:yy}); 这样才可以修改,如下所示:
         */
        this.setState({
            inputVal:e.target.value
        })
    }
}
export default TodoList;