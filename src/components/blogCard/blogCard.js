import { Button } from "antd";
import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import "./blogCard.scss";
export default function BlogCard({ blog }) {
  const history = useHistory();
  const getBackGroundImageStyle = () => {
    return { backgroundImage: `url("${blog.image}")` };
  };

  const gotoBlogDetails = (event) => {
    event && event.stopPropagation();
    history.push({
      pathname: `/blogs/${blog.id}`,
    });
  };

  return (
    <div className="blog-card" onClick={(event) => gotoBlogDetails(event)}>
      <div className="blog-title" style={getBackGroundImageStyle()}>
        <div>{blog.title}</div>
        <div>{blog.date}</div>
      </div>
      <div className="blog-summary">{blog.summary}</div>
      <div className="blog-feedbacks">
        <Button>
          <DislikeOutlined />
        </Button>
        <Button>
          <LikeOutlined />
        </Button>
      </div>
    </div>
  );
}
