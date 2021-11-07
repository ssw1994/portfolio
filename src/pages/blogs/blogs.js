import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PageWrapper } from "../../components";
import { fetchBlogs } from "../../store/dispatchers/blog.dispatch";
import { allBlogs } from "../../store/selectors/blog.selector";
import { BlogCard } from "../../components";
import "./blogs.scss";
function Blogs() {
  const blogs = useSelector(allBlogs);
  const dispatch = useDispatch();

  useEffect(() => {
    if (dispatch) {
      dispatch(fetchBlogs());
    }
  }, [dispatch]);
  return (
    <div className="blogs">
      {blogs.map((blog, index) => {
        return (
          <div className="blog-container" key={index}>
            <BlogCard blog={blog} />
          </div>
        );
      })}
    </div>
  );
}
//export default Blogs;
export default PageWrapper(Blogs);
