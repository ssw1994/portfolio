import React from "react";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "./components/sidebar/sidebar";
import Routing from "./routing/routing";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./themes";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <div className="sidebar">
            <SideBar></SideBar>
          </div>
          <div className="content">
            <Routing></Routing>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
