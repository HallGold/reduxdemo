import React, { Component } from "react";
import store from "../../redux/store.js";

export default class Count extends Component {
  //   componentDidMount() {
  //     // 检测redux状态中的变化，只要变化，调用render
  //     store.subscribe(() => {
  //       this.setState({});
  //     });
  //   }

  increment = () => {
    const { value } = this.selectNumber;
    // const { count } = this.state;
    // this.setState({ count: parseInt(value) + count });
    // 通知redux加value
    store.dispatch({
      type: "increment",
      data: value * 1,
    });
  };
  decrement = () => {
    const { value } = this.selectNumber;
    // const { count } = this.state;
    store.dispatch({
      type: "decrement",
      data: value * 1,
    });
  };
  incrementIfodd = () => {
    const { value } = this.selectNumber;
    // const { count } = this.state;
    if (store.getState() % 2 !== 0) {
      store.dispatch({
        type: "increment",
        data: value * 1,
      });
    }
  };
  incrementAsync = () => {
    const { value } = this.selectNumber;
    // const { count } = this.state;
    setTimeout(() => {
      store.dispatch({
        type: "increment",
        data: value * 1,
      });
    }, 1000);
  };
  render() {
    return (
      <div>
        <h1>当前求和为:{store.getState()}</h1>
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
