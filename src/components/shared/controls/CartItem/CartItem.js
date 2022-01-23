import React from "react";
import {
  Card,
  CardContent,
  ProductQuantity,
  Typography,
  Button,
  Box,
  Chip,
} from "../..";
import "./CartItem.scss";
export default function CartItem({ product }) {
  const {
    category,
    about_product,
    product_price,
    product_name,
    colors,
  } = product;

  const categories = category
    .split("|")
    .map((ctgry) => <Chip label={ctgry} variant="outlined" color="primary" />);

  return (
    <Card className="cart_item_details">
      <CardContent>
        <div>
          <img src="https://picsum.photos/seed/200/300" />
        </div>
        <div className="product_details">
          <Box>
            <Typography variant="h5">
              <strong>{product_name}</strong>
            </Typography>

            <Typography variant="subtitle1">{about_product}</Typography>

            {categories}

            <Typography variant="h2">
              <strong>{product_price.toFixed(2)}</strong>
            </Typography>
            <ProductQuantity product={product} />
          </Box>
        </div>
        <div className="actions">
          <Button size="small">
            <a>Remove</a>
          </Button>
          <Button size="small">
            <a>Save for later</a>
          </Button>
          <Button size="small">
            <a>Add to WishList</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
