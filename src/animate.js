import React, { Component, Fragment } from 'react'
import './animate.css'
import { CSSTransition } from 'react-transition-group';

class Animate extends Component {
    constructor(props){
        super(props);
        this.state={
            show: true
        }

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    //动画演示
    render(){
        return(
        <Fragment>
            <div>动画演示</div>
            <CSSTransition
            in={this.state.show}
            timeout={1000}
            classNames='fade'
            unmountOnExit
            >
                <div>hello</div>
            </CSSTransition>
            <button onClick={this.handleButtonClick}>toggle</button>
        </Fragment>
        )
    }

    handleButtonClick(){
        this.setState({
            show: this.state.show ? false : true
        })
    }
}
export default Animate;