import React from "react";
import { Drawer, ICONS, IconButton, Box } from "../../components/shared";
import "./Menu.scss";
export default function Menu({ children }) {
  const [isOpen, openMenu] = React.useState(false);

  return (
    <React.Fragment>
      <IconButton
        size="large"
        edge="start"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={() => openMenu(true)}
      >
        <ICONS.Menu />
      </IconButton>
      <Drawer open={isOpen} role="presentation" onClose={() => openMenu(false)}>
        <Box style={{ textAlign: "right", background: "aliceblue" }}>
          <IconButton onClick={() => openMenu(false)}>
            <ICONS.Close />
          </IconButton>
          {children}
        </Box>
      </Drawer>
    </React.Fragment>
  );
}
