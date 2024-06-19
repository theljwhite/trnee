export const createTourneyInitialState = {
  name: "",
  description: "",
  format: "SingleElimination",
  startDate: new Date(),
  hasCustomSignup: false,
  isParticipantUpdateAllowed: false,
  isTeamBased: false,
};

export const createTourneyReducer = (state, action) => {
  switch (action.type) {
    case "name_update":
      return { ...state, name: action.payload };
    case "desc_update":
      return { ...state, description: action.payload };
    default:
      throw new Error();
  }
};
