import { INCREMENT, DECREMENT } from "./contsant";
/* 
这个是专门为count组件生成的action对象
*/

/**
 * @export
 * @param {* 组件传递的参数} data
 * @return {*}
 */
//只要返回值是一个 object 就是同步任务
export const createIncrementAction = (data) => ({ type: INCREMENT, data });

export const createDecrementAction = (data) => ({ type: DECREMENT, data });

// 只要返回的值是一个function就是异步任务
export const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data));
    }, time);
  };
};
