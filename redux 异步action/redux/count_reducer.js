import { INCREMENT, DECREMENT } from "./contsant";

const initState = 0;
export default function countReducer(preState = initState, action) {
  //   console.log(preState, action);
  const { type, data } = action;
  console.log(type, data);
  switch (type) {
    case INCREMENT:
      return preState + data;
    case DECREMENT:
      return preState - data;
    default:
      return preState;
  }
}
