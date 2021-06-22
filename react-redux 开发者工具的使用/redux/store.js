import { createStore, applyMiddleware, combineReducers } from "redux";
import countReducer from "./reducers/count";
import PersonReducer from "./reducers/person";
// 引入redux-thunk 用于store支持异步任务
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//汇总所有的reducer变为一个总的reducer
const allReducer = combineReducers({
  count: countReducer,
  persons: PersonReducer,
});
// applyMiddleware 用于store开启是否支持中间件，本身是一个函数,必须作为第二个参数
export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)));
