import React from "react";
import { useSelector } from "react-redux";
import { cartItems } from "../../../../store/selectors/shop.selector";
import { ICONS, CartSummary, Popover, Card, IconButton, Badge } from "../..";
import "./MyCart.scss";

export default function MyCart() {
  const ref = React.createRef();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isOpen, setOpen] = React.useState(false);
  const handleOpenSummaryClick = () => {
    setAnchorEl(ref);
  };

  React.useMemo(() => {
    setOpen(Boolean(anchorEl));
  }, [anchorEl]);

  const handleCloseSummary = (event) => {
    event && event.stopPropagation();
    setAnchorEl(null);
  };

  const userCartItems = useSelector(cartItems);
  return (
    <div className="my-cart-container" onClick={handleOpenSummaryClick}>
      {userCartItems && (
        <>
          <Badge
            badgeContent={userCartItems.length}
            color="secondary"
            className="cart_item_count"
          >
            <ICONS.ShoppingBasket />
          </Badge>

          <Popover
            ref={ref}
            open={isOpen}
            anchorEl={anchorEl}
            onClose={handleCloseSummary}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            className="cart-summary"
          >
            <Card className="cart-content">
              <div className="card-summary-header">
                <IconButton onClick={handleCloseSummary}>
                  <ICONS.Close />
                </IconButton>
              </div>
              <CartSummary />
            </Card>
          </Popover>
        </>
      )}
    </div>
  );
}
