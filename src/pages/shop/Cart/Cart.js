import React from "react";
import { useSelector } from "react-redux";
import { cartItems, orderTotal } from "../../../store/selectors/shop.selector";
import {
  CartItem,
  Typography,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardActions,
} from "../../../components/shared";
import "./Cart.scss";
export default function Cart() {
  const products = useSelector(cartItems);
  const cartTotal = useSelector(orderTotal);
  console.log(products);
  return (
    <div className="user-cart">
      <div className="cart_items">
        {products.map((product, index) => {
          return <CartItem product={product} key={index} />;
        })}
      </div>
      <Card className="carts_summary">
        <CardHeader title="Order Summary : " />
        <CardContent>
          <Typography variant="subtitle1">
            Order Total :
            <Typography variant="h2">
              <strong>{cartTotal.toFixed(2)}</strong>
            </Typography>
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary">
            Checkout
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
