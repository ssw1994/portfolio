import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
  ICONS,
} from "../../shared";
import {
  dialogData,
  dialogType,
  dialogTitle,
} from "../../../store/selectors/dialog.selector";
import { DialogTypes } from "../../../modals/common.model";
import { SkillDetails, ProjectDetails } from "../../../components";
import { useSelector, useDispatch } from "react-redux";
import { closeDialog } from "../../../store/dispatchers/dialog.dispatch";
import "./dialog.scss";
export default function ModalDialog() {
  const dispatch = useDispatch();
  const data = useSelector(dialogData);
  const type = useSelector(dialogType);
  const title = useSelector(dialogTitle);
  let Component = null;

  switch (type) {
    case DialogTypes.skill:
      Component = SkillDetails;
      break;
    case DialogTypes.project:
      Component = ProjectDetails;
      break;
    default:
      Component = null;
  }

  const closeModal = () => {
    dispatch(closeDialog());
  };

  return (
    <Dialog open={true}>
      <DialogTitle>
        <Typography variant="h5">{title}</Typography>
        <IconButton
          onClick={(e) => closeModal()}
          variant="contained"
          color="primary"
        >
          <ICONS.Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Component {...data} />
      </DialogContent>
    </Dialog>
  );
}
