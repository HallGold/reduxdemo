import { ADD_PERSON } from "../contsant";

// 初始化Person列表
const initState = [{ id: "001", name: "tom", age: 18 }];
export default function PersonReducer(preState = initState, action) {
  console.log("person ####");

  const { type, data } = action;
  switch (type) {
    case ADD_PERSON: //若是添加一个人则返回添加的人
      return [data, ...preState];

    // 默认返回
    default:
      return preState;
  }
}
