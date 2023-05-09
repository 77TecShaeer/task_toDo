import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import TasksReducer from "./TasksReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  tasks: TasksReducer
});
