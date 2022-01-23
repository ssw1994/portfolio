import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  AddToCart,
} from "../../../components/shared";
import "./Product.scss";
export default function Product({ item, preview }) {
  const { _id, product_name, product_price } = item;
  return (
    <Card className="product">
      <CardMedia image="https://picsum.photos/seed/200/300"></CardMedia>
      <CardContent>
        <div className="product_name">
          <Typography variant="subtitle1">{product_name}</Typography>
        </div>
        <div className="product_price">
          <Typography variant="h1">{product_price}</Typography>
        </div>
      </CardContent>
      {!preview && (
        <CardActions>
          <AddToCart productId={_id} />
        </CardActions>
      )}
    </Card>
  );
}
