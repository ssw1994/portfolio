import * as DIALOG_ACTIONS from "../actions/dialog.action";
const initialState = {
  type: null,
  show: false,
  title: null,
  data: null,
};

export default function dialogReducer(state = initialState, action) {
  switch (action.type) {
    case DIALOG_ACTIONS.SHOW_DIALOG:
      return {
        show: true,
        type: action.payload.type,
        title: action.payload.title,
        data: {
          ...action.payload.data,
        },
      };
    case DIALOG_ACTIONS.CLOSE_DIALOG:
      return {
        show: false,
        type: null,
        data: null,
        title: null,
      };
    default:
      return {
        ...state,
      };
  }
}
