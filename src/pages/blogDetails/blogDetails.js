import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import * as Components from "../../components";
import { useDispatch } from "react-redux";
import { fetchBlogDetails } from "../../store/dispatchers/blog.dispatch";
function BlogDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogDetails(id));
  }, []);
  return (
    <div className="blogs-details">
      <div className="decoration"></div>
      <div className="blog-title">Blog Title</div>
      <div className="blog-details">Blog Details</div>
    </div>
  );
}

export default Components.PageWrapper(BlogDetails);
