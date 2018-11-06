import React, { Component, Fragment } from 'react';
import TodoItem from './todoItem'
import './styleApp.css'
import Test from './test'
import Animate from './animate'
import axios from 'axios'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputVlue:'',
      list:[]
    }

    this.handleChange = this.handleChange.bind(this)
    this.handClick = this.handClick.bind(this)
    this.handleDetel = this.handleDetel.bind(this)

  }

  render() {
    return (
      <Fragment >
        <label htmlFor='insert'>输入内容</label>
        <input id='insert' className='input' type='text' 
          value={this.state.inputVlue}
          onChange={this.handleChange}
          ref={(res)=>{this.res = res}}  //this.res就是input这个DOM节点
          ></input>
        <button onClick={this.handClick}>提交</button>
        <ul>
          { this.TodoItem() }
        </ul>
        <Test content={this.state.inputVlue}></Test>
        <Animate></Animate>
      </Fragment>
    );
  }

  //当组件即将被挂载到页面的时刻即将执行，仅执行这一次
  // componentWillMount(){
  //   console.log("this.componentWillMount")
  // }
  // //当组件被挂载到页面之后执行，仅执行这一次
  // componentDidMount(){
  //   console.log("componentDidMount")
  // }
  // //当组件被更新之前回自动执行, 可以读成 你的生命周期函数需要被被更新吗？true需要更喜  false不需要更新
  // shouldComponentUpdate(){
  //   console.log("shouldComponentUpdate")
  //   return true   // 或者   return false
  // }

  // //组件被更新之前，它将会被自动执行，但是他在shouldComponentUpdate之后
  // //如果shouldComponentUpdate返回的是true它才执行
  // //如果shouldComponentUpdate返回的是false将不会执行
  // componentWillUpdate(){
  //   console.log("componentWillUpdate")
  // }

  // //组件更新之后，会被自动执行
  // componentDidUpdate(){
  //   console.log("componentDidUpdate")
  // }

  componentDidMount(){
    console.log("componentDidMount")
    axios.get('/api/dataJson')
         .then((res)=>{
          console.log(res)
          this.setState(()=>{
              return{list:[...res.data]}
          })
         })
         .catch((erro)=>{
          alert('erro')
         })
  }

  TodoItem() {
    return(
      this.state.list.map((item,index)=>{
        return(
          <li key={index}>
            <TodoItem 
            content={item} 
            index={index}
            delteItem = {this.handleDetel}
            ></TodoItem>
          </li>
        )
      })
    )
  }
  handleChange = function(e){
    this.setState({
      inputVlue:e.target.value
    })
  }
  handClick = function(){ 
    this.setState({
      list:[...this.state.list,this.state.inputVlue],
      inputVlue:''
    })
    this.res.style.background = "red";
  }
  handleDetel = function(e){
    let list = [...this.state.list];
    list.splice(e,1);
    this.setState({
      list: list
    })
  }

  
}

export default App;























