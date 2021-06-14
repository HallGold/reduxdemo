import { INCREMENT, DECREMENT } from "./contsant";

/* 
这个是专门为count组件生成的action对象
*/

/**
 * @export
 * @param {* 组件传递的参数} data
 * @return {*}
 */
export const createIncrementAction = (data) => ({ type: INCREMENT, data });

export const createDecrementAction = (data) => ({ type: DECREMENT, data });
