import { getRoundsCount } from "./bracketLogic";

//TODO - add comments to this mess

const BASE_MATCH_HEIGHT = 54;

export const doBracketRoundTransforms = (participantCount) => {
  const transforms = [];

  let matchesInCurrentRound = participantCount / 2;
  let previousRoundMatches = [];

  for (let i = 0; i < matchesInCurrentRound; i++) {
    transforms.push(`translate(0 ${35 + i * BASE_MATCH_HEIGHT})`);
    previousRoundMatches.push(35 + i * BASE_MATCH_HEIGHT);
  }

  let x = 244;
  while (matchesInCurrentRound > 1) {
    matchesInCurrentRound /= 2;

    const currentRoundMatches = [];
    for (let i = 0; i < matchesInCurrentRound; i++) {
      const y =
        (previousRoundMatches[2 * i] + previousRoundMatches[2 * i + 1]) / 2;
      transforms.push(`translate(${x} ${y})`);

      currentRoundMatches.push(y);
    }
    previousRoundMatches = currentRoundMatches;
    x += 244;
  }

  const extraMatchOffset = 324;
  const thirdPlaceY =
    previousRoundMatches.reduce((acc, val) => Math.max(acc, val), 0) +
    extraMatchOffset;
  transforms.push(`translate(${x - 244} ${thirdPlaceY})`);

  return transforms;
};

export const generateLineTransforms = (participantCount) => {
  const lineTransforms = [];
  const BASE_X_INCREMENT = 244;
  const INITIAL_Y_UP = 62;
  const INITIAL_Y_DOWN = 89;
  const INITIAL_INCREMENT = 108;

  let matchesInCurrentRound = participantCount / 2;
  let currentX = 0;
  let currentYUp = INITIAL_Y_UP;
  let currentYDown = INITIAL_Y_DOWN;
  let yIncrement = INITIAL_INCREMENT;

  let offset = BASE_MATCH_HEIGHT / 2;
  let roundCount = 1;

  while (matchesInCurrentRound > 1) {
    for (let i = 0; i < matchesInCurrentRound; i++) {
      if (i % 2 === 0) {
        lineTransforms.push(`translate(${currentX} ${currentYDown})`);
        currentYDown += yIncrement;
      } else {
        lineTransforms.push(`translate(${currentX} ${currentYUp})`);
        currentYUp += yIncrement;
      }
    }

    matchesInCurrentRound /= 2;
    currentX += BASE_X_INCREMENT;
    roundCount++;

    if (roundCount === 1) {
      currentYDown = INITIAL_Y_DOWN + yIncrement + INITIAL_INCREMENT / 2;
      currentYUp = INITIAL_Y_UP + yIncrement - INITIAL_INCREMENT / 2;
    } else if (roundCount === 2) {
      currentYDown = INITIAL_Y_DOWN + yIncrement / 2;
      currentYUp = INITIAL_Y_UP + yIncrement / 2 - offset;
    } else {
      currentYDown = INITIAL_Y_DOWN + yIncrement / 2 + offset * 2;
      currentYUp = INITIAL_Y_UP + yIncrement / 2 - offset;
    }

    yIncrement *= 2;
  }

  return lineTransforms;
};

const generateLinePathsMap = (participantCount) => {
  const pathsMap = new Map();
  const BASE_DOWN_PATH = "M 228 1 L 236 1 L 236";
  const BASE_UP_PATH = "M 228";
  const END_UP_PATH = "L 236 1 L 244 1";

  let downIncrement = BASE_MATCH_HEIGHT / 2;
  let upIncrement = BASE_MATCH_HEIGHT / 2;
  let rounds = getRoundsCount(participantCount) - 1;

  for (let round = 1; round <= rounds; round++) {
    const downPath = `${BASE_DOWN_PATH} ${downIncrement}`;
    const upPath = `${BASE_UP_PATH} ${upIncrement} L 236 ${upIncrement} ${END_UP_PATH}`;
    pathsMap.set(round, { down: downPath, up: upPath });

    downIncrement *= 2;
    upIncrement *= 2;
  }
  return pathsMap;
};

export const assignRoundNumbersToLines = (participantCount) => {
  const lineTransforms = generateLineTransforms(participantCount);

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
  const pathsMap = generateLinePathsMap(participantCount);

  const linesWithRoundAndPath = assignRoundNumbersToLines(participantCount).map(
    (line, index) => {
      const path =
        index % 2 === 0
          ? pathsMap.get(line.round).up
          : pathsMap.get(line.round).down;

      return {
        ...line,
        path,
      };
    }
  );
  return linesWithRoundAndPath;
};
