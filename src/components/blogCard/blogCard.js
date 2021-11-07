import {
  ICONS,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardHeader,
  IconButton,
  Typography,
} from "../../components/shared";
import "./blogCard.scss";
export default function BlogCard({ blog }) {
  const card = (
    <Card className="blog-card">
      <CardHeader title={blog.title} className="blog-title"></CardHeader>
      <CardMedia image={blog.image} height="150" component="img" />
      <CardContent className="blog-summary">
        <Typography>{blog.summary}</Typography>
      </CardContent>
      <CardActions class="blog-actions">
        <IconButton>
          <ICONS.ThumbDownAltOutlinedIcon />
        </IconButton>
        <IconButton>
          <ICONS.ThumbUpAltOutlinedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );

  return card;
}

/**
 *  <div className="blog-card" onClick={(event) => gotoBlogDetails(event)}>
      <div className="blog-title" style={getBackGroundImageStyle()}>
        <div>{blog.title}</div>
        <div>{blog.date}</div>
      </div>
      <div className="blog-summary">{blog.summary}</div>
      <div className="blog-feedbacks">
        <IconButton>
          <ICONS.ThumbDownAltOutlinedIcon />
        </IconButton>
        <IconButton>
          <ICONS.ThumbUpAltOutlinedIcon />
        </IconButton>
      </div>
    </div>
 */
