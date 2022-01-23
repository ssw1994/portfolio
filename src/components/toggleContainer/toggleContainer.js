import React from "react";
import { ICONS, IconButton } from "../shared";
import "./toggleContainer.scss";
export default function ToggleContainer({ children }) {
  const [openEdit, setEdit] = React.useState(false);

  const [displayView, editView] = children;

  return (
    <div>
      <IconButton
        onClick={(e) => setEdit((openEdit) => !openEdit)}
        className="toggle-btn"
      >
        {openEdit ? <ICONS.Close /> : <ICONS.Edit />}
      </IconButton>
      {openEdit ? editView : displayView}
    </div>
  );
}
