import * as BLOG_ACTIONS from "../actions/blog.action";
const initialState = {
  blogs: [],
};
export default function blogReducer(state = initialState, action) {
  switch (action.type) {
    case BLOG_ACTIONS.ADD_BLOGS:
      return { ...state, blogs: [...state.blogs, action.payload] };
    case BLOG_ACTIONS.DISPLAY_BLOGS:
      return { ...state, blogs: action.payload };
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
