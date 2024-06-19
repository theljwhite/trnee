//for the future if this is later expanded on

const validateName = (name) => {
  //TODO
};

const validateDescription = (description) => {
  //TODO
};

export const validationFuncs = new Map([
  [
    0,
    [
      { validation: validateName, stateKey: ["name"] },
      { validation: validateDescription, stateKey: ["description"] },
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
