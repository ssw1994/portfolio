import service from "../../services/blog.service";
import * as BLOG_ACTIONS from "../actions/blog.action";
export function fetchBlogs(payload) {
  return (dispatch) => {
    try {
      dispatch({ type: BLOG_ACTIONS.Blogs.FETCHING });
      service
        .getBlogs(payload)
        .then((response) =>
          dispatch({
            type: BLOG_ACTIONS.Blogs.FETCHED,
            payload: response.data.blogs,
          })
        )
        .catch((error) => dispatch({ type: BLOG_ACTIONS.Blogs.ERROR }));
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchBlogDetails(blogId) {
  return (dispatch) => {};
}
