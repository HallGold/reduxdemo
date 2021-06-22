import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement, incrementAsync } from "../../redux/actions/count";
class Count extends Component {
  // 加
  increment = () => {
    const { value } = this.selectNumber;
    this.props.increment(value * 1);
  };
  // 减
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.decrement(value * 1);
  };
  // 奇数加
  incrementIfodd = () => {
    const { value } = this.selectNumber;
    if (this.props.count % 2 !== 0) {
      this.props.increment(value * 1);
    }
  };
  // 异步加
  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.incrementAsync(value * 1, 500);
  };
  render() {
    // console.log(this.props);
    return (
      <div>
        <h1>当前求和为:{this.props.count}</h1>
        <p>当前总人数为:{this.props.persons.length}</p>
        <select
          ref={(c) => {
            this.selectNumber = c;
          }}
        >
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfodd}>奇数加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    );
  }
}

/* 
  创建容器组件
  使用connect()()创建 并且 暴露一个Count的容器组件
  */
export default connect(
  (state) => ({ count: state.count, persons: state.persons }),
  // mapDispatchToProps一般写法
  //   (dispatch) => ({
  //     increment: (data) => { dispatch(createIncrementAction(data))},
  //     decrement: (data) => {dispatch(createDecrementAction(data))},
  //     incrementAsync: (data, time) => {dispatch(createIncrementAsyncAction(data, time)) },
  //   })

  // mapDispatchToProps简写
  {
    increment,
    decrement,
    incrementAsync,
  }
)(Count);
