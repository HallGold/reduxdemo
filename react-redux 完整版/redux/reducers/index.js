/* 该文件用于汇总所有的reducer */
import count from "./count";
import persons from "./person";
import { combineReducers } from "redux";

//汇总所有的reducer变为一个总的reducer
export default combineReducers({ count, persons });
