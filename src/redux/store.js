import { createStore, applyMiddleware } from "redux";
import countReducer from "./count_reducer";
// 引入redux-thunk 用于store支持异步任务
import thunk from "redux-thunk";

// applyMiddleware 用于store开启是否支持中间件，本身是一个函数,必须作为第二个参数
export default createStore(countReducer, applyMiddleware(thunk));
