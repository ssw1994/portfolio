import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../../store/dispatchers/blog.dispatch";
import { allBlogs } from "../../../store/selectors/blog.selector";
import { BlogCard } from "../../../components";
import "./blogs.scss";
export default function Blogs() {
  const blogs = useSelector(allBlogs);
  const dispatch = useDispatch();

  useEffect(() => {
    if (dispatch) {
      dispatch(fetchBlogs());
    }
  }, [dispatch]);
  return (
    <div className="blogs">
      <h1>Blogs works</h1>
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
