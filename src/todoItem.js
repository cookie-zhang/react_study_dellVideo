import React, { Component } from 'react'
import PropTypes from 'prop-types'
class TodoItem extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render(){
        //假设test父组件没有传递过来  那么下面的defaultProps就可以给一个默认值
        const {content, test} = this.props;
      return (
          <div 
          key={this.props.index}
          onClick={this.handleClick}
          >
          {test}-{content}
          </div>
      )  
    }
    handleClick = function(){
        const { delteItem, index} = this.props;
        delteItem(index)
    }
}
//校验数据类型
TodoItem.propTypes = {
    content: PropTypes.string,
    delteItem: PropTypes.func,
    index: PropTypes.number,
    test: PropTypes.string.isRequired //isRequired 必填项
    
}
//如果没有值那么就给一个默认值
TodoItem.defaultProps = {
    test: 'hello world'
}

export default TodoItem;