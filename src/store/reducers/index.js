import { combineReducers } from "redux";
import blogReducer from "./blog.reducer";
import userReducer from "./user.reducer";
import taskReducer from "./task.reducer";
const appReducer = combineReducers({
  blogReducer,
  userReducer,
  taskReducer,
});

export default appReducer;
