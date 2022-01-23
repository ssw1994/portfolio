import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchBlogDetails } from "../../../store/dispatchers/blog.dispatch";
export default function BlogDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (dispatch && id) {
      dispatch(fetchBlogDetails(id));
    }
  }, [dispatch, id]);
  return (
      <div className="blogs-details">
        <div className="decoration"></div>
        <div className="blog-title">Blog Title</div>
        <div className="blog-details">Blog Details</div>
      </div>
  );
}
