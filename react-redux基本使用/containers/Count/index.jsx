/* 
引入UI组件
*/
import CountUI from "../../components/Count";
/* 
引入 connect 用于关联UI组件和redux
*/
import { connect } from "react-redux";

/* 
引入 action
*/
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from "../../redux/count_action";

/* mapStateToProps函数的返回值作为状态传递给了UI组件  返回值必须是对象*/
const mapStateToProps = (store) => {
  return { count: store };
};

/* mapDispatchToProps函数的返回值必须返回一个对象, value必须是：操作状态的方法 */
const mapDispatchToProps = (dispatch) => {
  return {
    increment: (data) => {
      // 通知redux执行加法
      dispatch(createIncrementAction(data));
    },
    decrement: (data) => {
      // 通知redux执行减法
      dispatch(createDecrementAction(data));
    },
    // 异步加
    incrementAsync: (data, time) => {
      dispatch(createIncrementAsyncAction(data, time));
    },
  };
};

/* 
创建容器组件
使用connect()()创建 并且 暴露一个Count的容器组件
*/
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
