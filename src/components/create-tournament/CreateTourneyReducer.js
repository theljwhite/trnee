const startTimeRound = 1000 * 60 * 15;
const currDate = new Date();
const startTimeNextInterval = new Date(
  Math.ceil(currDate.getTime() / startTimeRound) * startTimeRound
);

export const createTourneyInitialState = {
  name: "",
  description: "",
  game: null,
  format: "SingleElimination",
  startTime: startTimeNextInterval,
  hasCustomSignup: null,
  isParticipantUpdateAllowed: null,
  isTeamBased: null,
  participantsList: "",
  signupKey: null,
  signupUrl: null,
};

export const createTourneyReducer = (state, action) => {
  switch (action.type) {
    case "name_update":
      return { ...state, name: action.payload };
    case "desc_update":
      return { ...state, description: action.payload };
    case "game_update":
      return { ...state, game: action.payload };
    case "start_date_update":
      return { ...state, startTime: action.payload };
    case "format_update":
      return { ...state, format: action.payload };
    case "type_update":
      return { ...state, isTeamBased: action.payload === "Team based" };
    case "participant_update":
      return { ...state, hasCustomSignup: action.payload.includes("Allow") };
    case "match_report_update":
      return {
        ...state,
        isParticipantUpdateAllowed: action.payload.includes("Allow"),
      };
    case "participant_list_update":
      return {
        ...state,
        participantsList: action.payload,
      };
    case "signup_details_update":
      const { key, url } = action.payload;
      return { ...state, signupKey: key, signupUrl: url };
    default:
      throw new Error();
  }
};
