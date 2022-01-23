import { combineReducers } from "redux";
import { LOG_OUT } from "../actions/user.action";
import blogState from "./blog.reducer";
import userState from "./user.reducer";
import taskState from "./task.reducer";
import dialogState from "./dialog.reducer";
import shopState from "./shop.reducer";
const appReducer = combineReducers({
  blogState,
  userState,
  taskState,
  dialogState,
  shopState
});

export default function reducer(state, action) {
  if (action.type === LOG_OUT) {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
}
