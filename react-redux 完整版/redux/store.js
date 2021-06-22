import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/index"; //引入汇总之后的reducer
// 引入redux-thunk 用于store支持异步任务
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// applyMiddleware 用于store开启是否支持中间件，本身是一个函数,必须作为第二个参数
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
