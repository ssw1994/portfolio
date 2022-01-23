export const introDetails = (state) => state.userState.introDetails;
export const currentRole = (state) =>
  state.userState.introDetails?.role.filter(
    (role) => role.isCurrentCompany === true
  )[0];
