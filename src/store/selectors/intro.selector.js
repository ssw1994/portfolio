export const introDetails = (state) => state.userReducer.introDetails;
export const currentRole = (state) =>
  state.userReducer.introDetails?.role.filter(
    (role) => role.isCurrentCompany === true
  )[0];
