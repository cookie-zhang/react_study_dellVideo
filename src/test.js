import React, { Component } from 'react'
class Test extends Component {
    render(){
        return (
            <div>{this.props.content}</div>
        )
    }
    //这个子组件要从父组件中接受参数 比如上面的content就是从父组件传递过来的
    //只要是父组件中的render函数被执行了，子组件的函数就会自动执行
    componentWillReceiveProps(prvState,nextState){
        console.log("child  componentWillReceiveProps")
    }
    componentWillUnmount(){
        console.log("child  componentWillUnmount")
    }
}
export default Test;