import {
  MAX_TOURNEY_NAME_LENGTH,
  MAX_TOURNEY_DESC_LENGTH,
  MIN_TIME_TO_START_MS,
} from "../constants/tourneyConstants";

//for the future if this is later expanded on

const validateName = (name) => {
  if (name.length < 3) return "Name must have at least 3 characters";
  if (name.length >= MAX_TOURNEY_NAME_LENGTH) {
    return `Name must be less than ${MAX_TOURNEY_NAME_LENGTH} characters`;
  }
  return "";
};

const validateDescription = (description) => {
  if (description.length < 3)
    return "Description must be at least 3 characters";
  if (description.length >= MAX_TOURNEY_DESC_LENGTH) {
    return `Description must be less than ${MAX_TOURNEY_DESC_LENGTH} characters`;
  }
  return "";
};

const validateGame = (game) => {
  if (!game) return "Must select a game or choose 'None' as an option.";
  return "";
};

const validateStartDate = (startTime) => {
  const currentDate = new Date();
  const minAllowedEndDate = new Date(
    currentDate.getTime() + MIN_TIME_TO_START_MS
  );

  if (startTime < minAllowedEndDate) {
    return "Start date must be at least 10 minutes in the future";
  }

  return "";
};

const validateSettings = (
  format,
  isTeamBased,
  hasCustomSignup,
  isParticipantUpdateAllowed
) => {
  if (!format) return "Must select a tournament format";
  if (isTeamBased === null) return "Must select a tournament type";
  if (hasCustomSignup === null) return "Must select a participants option";
  if (!isParticipantUpdateAllowed === null) {
    return "Must select a match reporting option";
  }
  return "";
};

export const parseParticipantsList = (participantsStr) => {
  const lines = participantsStr.trim().split("\n");

  const participants = lines.map((line) => {
    const [seed, ...usernameParts] = line.trim().split(/\s+/);
    const username = usernameParts.join(" ");
    return { seed: Number(seed), username };
  });

  return participants;
};

export const validationFuncs = new Map([
  [
    0,
    [
      { validation: validateName, stateKey: ["name"] },
      { validation: validateDescription, stateKey: ["description"] },
      { validation: validateGame, stateKey: ["game"] },
    ],
  ],
  [
    1,
    [
      { validation: validateStartDate, stateKey: ["startTime"] },
      {
        validation: validateSettings,
        stateKey: [
          "format",
          "isTeamBased",
          "hasCustomSignup",
          "isParticipantUpdateAllowed",
        ],
      },
    ],
  ],
]);

export const validateStep = (step, state) => {
  const funcsForValidation = validationFuncs.get(step);
  if (!funcsForValidation) return null;

  for (const func of funcsForValidation) {
    const { validation, stateKey } = func;
    const stateValues = stateKey.map((key) => state[key]);
    const errorMessage = validation(...stateValues);

    if (errorMessage) return errorMessage;
  }

  return "";
};
