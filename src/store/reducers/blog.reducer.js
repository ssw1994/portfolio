import { CommonModel } from "../../modals";
import * as BLOG_ACTIONS from "../actions/blog.action";
const initialState = {
  blogs: [],
  status: CommonModel.Status.none,
};
export default function blogReducer(state = initialState, action) {
  switch (action.type) {
    case BLOG_ACTIONS.ADD_BLOGS:
      return { ...state, blogs: [...state.blogs, action.payload] };
    case BLOG_ACTIONS.Blogs.FETCHING:
      return { ...state, status: CommonModel.Status.busy };
    case BLOG_ACTIONS.Blogs.FETCHED:
      return {
        ...state,
        blogs: action.payload,
        status: CommonModel.Status.success,
      };
    case BLOG_ACTIONS.Blogs.ERROR:
      return { ...state, status: CommonModel.Status.error };
    case BLOG_ACTIONS.REMOVE_BLOGS:
      return {
        ...state,
        blogs: [state.blogs.filter((blog) => blog.blogId !== action.payload)],
      };
    default:
      return {
        ...state,
      };
  }
}
