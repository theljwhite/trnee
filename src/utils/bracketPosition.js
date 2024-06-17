export const lineTransformsTopDown = [
  "translate(488 142)",
  "translate(488 251)",
  "translate(244 305)",
  "translate(244 359)",
  "translate(244 89)",
  "translate(244 143)",
  "translate(0 386)",
  "translate(0 413)",
  "translate(0 278)",
  "translate(0 305)",
  "translate(0 170)",
  "translate(0 197)",
  "translate(0 62)",
  "translate(0 89)",
];
export const lineTransforms = lineTransformsTopDown.reverse();

const roundNumberToLinePathsMap = new Map([
  [
    1,
    {
      down: "M 228 1 L 236 1 L 236 27",
      up: "M 228 26 L 236 26 L 236 1 L 244 1",
    },
  ],
  [
    2,
    {
      down: "M 228 1 L 236 1 L 236 54",
      up: "M 228 53.000000000000014 L 236 53.000000000000014 L 236 1 L 244 1",
    },
  ],
  [
    3,
    {
      down: "M 228 1 L 236 1 L 236 108.00000000000001",
      up: "M 228 107 L 236 107 L 236 1 L 244 1",
    },
  ],
]);

export const doBracketRoundTransforms = (participantCount) => {
  const transforms = [];

  let offsetX = 0;
  let offsetY = 35;
  let stepY = 54;

  while (participantCount > 1) {
    for (let i = 0; i < participantCount / 2; i++) {
      transforms.push(`translate(${offsetX} ${offsetY + i * stepY})`);
    }

    participantCount /= 2;
    offsetX += 244;
    offsetY = 62;
    stepY *= 2;
  }

  //TEMP - temporarily hardcode the last 2 rounds and 3rd place round position in bracket
  transforms[12] = "translate(488 115)";
  transforms[13] = "translate(488 332)";
  transforms[14] = "translate(732 224)";
  transforms[15] = "translate(732 548)";
  return transforms;
};

export const assignRoundNumbersToLines = (participantCount) => {
  const roundNumbers = [];
  let linesInRound = participantCount / 2;
  let currentRound = 1;
  let linesAssigned = 0;

  for (let i = 0; i < lineTransforms.length; i++) {
    roundNumbers.push({ round: currentRound, transform: lineTransforms[i] });
    linesAssigned++;

    if (linesAssigned === linesInRound) {
      currentRound++;
      linesInRound /= 2;
      linesAssigned = 0;
    }
  }

  return roundNumbers;
};

export const assignLinePathByRoundNumber = (participantCount) => {
  const linesWithRoundAndPath = assignRoundNumbersToLines(participantCount).map(
    (line, index) => {
      const path =
        index % 2 === 0
          ? roundNumberToLinePathsMap.get(line.round).up
          : roundNumberToLinePathsMap.get(line.round).down;

      return {
        ...line,
        path,
      };
    }
  );
  return linesWithRoundAndPath;
};
