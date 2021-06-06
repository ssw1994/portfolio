import { combineReducers } from "redux";
import blogReducer from "./blog.reducer";
const appReducer = combineReducers({
  blogReducer,
});

export default appReducer;
