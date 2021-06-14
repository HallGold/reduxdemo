import React, { Component } from "react";
// 引入store 用户获取redux中保存的状态
import store from "../../redux/store.js";
// 引入actionCreator 创建action对象
import { createIncrementAction, createDecrementAction } from "../../redux/count_action";

export default class Count extends Component {
  // 加
  increment = () => {
    const { value } = this.selectNumber;
    // 通知redux加value
    store.dispatch(createIncrementAction(value * 1));
  };
  // 减
  decrement = () => {
    const { value } = this.selectNumber;
    store.dispatch(createDecrementAction(value * 1));
  };
  // 奇数加
  incrementIfodd = () => {
    const { value } = this.selectNumber;
    if (store.getState() % 2 !== 0) {
      store.dispatch(createIncrementAction(value * 1));
    }
  };
  // 异步加
  incrementAsync = () => {
    const { value } = this.selectNumber;
    setTimeout(() => {
      store.dispatch(createIncrementAction(value * 1));
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
