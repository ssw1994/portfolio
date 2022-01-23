import React, { useMemo, useState } from "react";
import { Login, Register } from "../../components";
import "./auth.scss";
import { useSelector } from "react-redux";
import { isLoggedIn, isRegistered } from "../../store/selectors/user.selector";
import { useNavigate } from "react-router-dom";
import { Tabs, Tab, Box } from "../../components/shared";
export default function Auth() {
  const navigate = useNavigate();
  const isSessionActive = useSelector(isLoggedIn);
  const isUserRegistered = useSelector(isRegistered);
  const [currentTab, setCurrentTab] = useState("login");

  React.useEffect(() => {
    const gotoApps = () => {
      navigate("/apps");
    };
    if (isSessionActive) {
      gotoApps();
    }
  }, [isSessionActive]);

  useMemo(() => {
    function gotoLoginPage() {
      setCurrentTab("login");
    }
    if (isUserRegistered) {
      gotoLoginPage();
    }
  }, [isUserRegistered]);

  const handleTabChange = (event, newTab) => {
    setCurrentTab(newTab);
  };

  return (
    <Box className="auth-container h-100">
      <Tabs value={currentTab} onChange={handleTabChange}>
        <Tab value="login" label="Login"></Tab>
        <Tab value="register" label="Register"></Tab>
      </Tabs>
      {currentTab === "login" && <Login />}
      {currentTab === "register" && <Register />}
    </Box>
  );
}
