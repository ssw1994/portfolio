import React from "react";
import "./App.scss";
import { useNavigate } from "react-router-dom";
import Routing from "./routing/routing";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./themes";
import { useSelector, useDispatch } from "react-redux";
import { showDialog } from "./store/selectors/dialog.selector";
import { ModalDialog } from "./components/hocs";
import { isLoggedOut, isLoggedIn } from "./store/selectors/user.selector";
import { fetchLoggedInUserDetails } from "./store/dispatchers/user.dispatch";
export default function App() {
  const isUserLoggedOut = useSelector(isLoggedOut);
  const isUserLoggedIn = useSelector(isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (isUserLoggedOut) {
      navigate("/");
    }
  }, [isUserLoggedOut]);

  React.useEffect(() => {
    if (isUserLoggedIn) {
      dispatch(fetchLoggedInUserDetails());
    }
  }, [isUserLoggedIn]);

  const showModel = useSelector(showDialog);

  return (
    <ThemeProvider theme={theme}>
      {showModel ? <ModalDialog /> : null}
      <div className="App">
        <div className="content">
          <Routing></Routing>
        </div>
      </div>
    </ThemeProvider>
  );
}
