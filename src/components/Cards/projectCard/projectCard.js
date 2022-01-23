import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardAction,
  CardHeader,
} from "../../shared";
export default function projectCard({ project }) {
  const { img, title, description, tags } = project;
  return (
    <Card>
      <CardMedia src={img} />
      <CardHeader title={title} />
      <CardContent>
        {description}
        {tags}
      </CardContent>
      <CardAction></CardAction>
    </Card>
  );
}
