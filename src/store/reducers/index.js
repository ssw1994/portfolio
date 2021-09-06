import { combineReducers } from "redux";
import blogReducer from "./blog.reducer";
import userReducer from "./user.reducer";
const appReducer = combineReducers({
  blogReducer,
  userReducer,
});

export default appReducer;
