import React from "react";
import { useSelector } from "react-redux";
import {
  cartItems,
  orderTotal,
} from "../../../../store/selectors/shop.selector";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  ProductQuantity,
  Button,
  CardActions,
} from "../..";
import "./CartSummary.scss";
import { useNavigate, useLocation } from "react-router-dom";
export default function CartSummary() {
  const products = useSelector(cartItems);
  const cartTotal = useSelector(orderTotal);
  const navigate = useNavigate();
  const location = useLocation();
  const gotoCart = () => {
    navigate("/shop/cart");
  };

  const isCartLocation = location.pathname.match("/shop/cart");

  const cartItem = (product) => {
    return (
      <Card className="cart-item">
        <CardHeader
          title={product.product_name}
          style={{ fontWeight: "bolder" }}
        />
        <CardContent>
          <div>
            <img
              src="https://picsum.photos/seed/200/300"
              style={{ width: "150px", height: "100px" }}
            ></img>
          </div>
          <div>
            <Typography variant="h3">
              <strong>{product.product_price}</strong>
            </Typography>
            <ProductQuantity product={product}></ProductQuantity>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="cart-summary">
      <div
        className="cart_items"
        style={{ height: isCartLocation ? "76%" : "66%" }}
      >
        {products.map((product, index) => {
          return (
            <React.Fragment key={index}>{cartItem(product)}</React.Fragment>
          );
        })}
      </div>

      <Card className="cart_total">
        <CardContent>
          <Typography variant="h3">Order Total &nbsp;&nbsp;&nbsp; :</Typography>
          <Typography variant="h2" style={{ margin: "0 5px" }}>
            <strong>{cartTotal.toFixed(2)}</strong>
          </Typography>
        </CardContent>
        {!isCartLocation && (
          <CardActions>
            <Button onClick={gotoCart} variant="">
              Go to cart
            </Button>
          </CardActions>
        )}
      </Card>
    </div>
  );
}
