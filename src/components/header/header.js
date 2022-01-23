import {
  Button,
  Avatar,
  MyCart,
  AppBar,
  Toolbar,
  Menu,
  ShopMenu,
} from "../../components/shared";
import React from "react";
import "./header.scss";
import { Cookie } from "../../services";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/dispatchers/user.dispatch";
import { loggedInUserDetails } from "../../store/selectors/user.selector";
import { useLocation } from "react-router-dom";
export default function Header() {
  const dispatch = useDispatch();
  const { username } = useSelector(loggedInUserDetails);
  const location = useLocation();

  const showCart = location.pathname.match("/shop");

  const signOut = () => {
    Cookie.clearCookies();
    dispatch(logout());
  };

  return (
    <AppBar className="header">
      <Toolbar>
        <Menu>
          <ShopMenu />
        </Menu>
        <div className="header-content">
          {username && <Avatar>{username[0]}</Avatar>}
          {showCart && <MyCart />}
          <Button variant="contained" color="primary" onClick={signOut}>
            Signout
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
