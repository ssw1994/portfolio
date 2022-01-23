import * as DIALOG_ACTIONS from "../actions/dialog.action";
export function openDialog(payload) {
  return (dispatch) => {
    dispatch({ type: DIALOG_ACTIONS.SHOW_DIALOG, payload });
  };
}

export function closeDialog(payload) {
  return (dispatch) => {
    dispatch({ type: DIALOG_ACTIONS.CLOSE_DIALOG, payload });
  };
}
