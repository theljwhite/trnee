const singleElimSeedingPattern = [
  [1, 16],
  [8, 9],
  [4, 13],
  [5, 12],
  [2, 15],
  [7, 10],
  [3, 14],
  [6, 11],
];

export const generateSingleElimMatches = (participants) => {
  const sortedBySeed = participants.sort((a, b) => a.seed - b.seed);
  const matches = [];

  for (let i = 0; i < sortedBySeed.length / 2; i++) {
    const match = [sortedBySeed[i], sortedBySeed[sortedBySeed.length - 1 - i]];
    matches.push(match);
  }
  return matches;
};

export const generateSingleElimMatchesWithPattern = (participants) => {
  const sortedBySeed = participants.sort((a, b) => a.seed - b.seed);
  const matches = [];

  for (let i = 0; i < singleElimSeedingPattern.length; i++) {
    const [seedA, seedB] = singleElimSeedingPattern[i];
    const participantA = sortedBySeed.find((p) => p.seed === seedA);
    const participantB = sortedBySeed.find((p) => p.seed === seedB);

    if (participantA && participantB) {
      matches.push([participantB, participantA]);
    }
  }

  return matches;
};

export const generateMatches = (tournamentFormat, participants) => {
  let matches = [];
  switch (tournamentFormat) {
    case "SingleElimination":
      matches = generateSingleElimMatchesWithPattern(participants);
      break;
    case "DoubleElimination":
      //TODO
      break;
    case "RoundRobin":
      //TODO
      break;
    case "Swiss":
      //TODO
      break;
    default:
      break;
  }
  return matches;
};
