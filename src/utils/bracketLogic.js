import { api } from "./api";

export const generateSeedingPattern = (participantsCount) => {
  const pattern = [];

  const generatePattern = (start, end) => {
    if (start > end) return;

    pattern.push([start, end]);

    generatePattern(start + 1, end - 1);
  };
  generatePattern(1, participantsCount);

  return pattern;
};

const makeBye = (seed, participantsCount) => {
  return seed <= participantsCount ? seed : null;
};

//so that higher seeds dont meet eachother early on in the tournament
const generateSortedSeedingPattern = (participantsCount) => {
  const rounds = Math.ceil(Math.log(participantsCount) / Math.log(2));

  if (participantsCount < 2) return null;

  let matches = [[1, 2]];

  for (let round = 1; round < rounds; round++) {
    const seedPattern = [];
    const sum = Math.pow(2, round + 1) + 1;

    for (let i = 0; i < matches.length; i++) {
      let participantA = makeBye(matches[i][0], participantsCount);
      let participantB = makeBye(sum - matches[i][0], participantsCount);
      seedPattern.push([participantA, participantB]);

      participantA = makeBye(sum - matches[i][1], participantsCount);
      participantB = makeBye(matches[i][1], participantsCount);
      seedPattern.push([participantA, participantB]);
    }
    matches = seedPattern;
  }
  return matches;
};

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
  const seedPattern = generateSortedSeedingPattern(participants.length);

  const sortedBySeed = participants.sort((a, b) => a.seed - b.seed);
  const matches = [];

  for (let i = 0; i < seedPattern.length; i++) {
    const [seedA, seedB] = seedPattern[i];
    const participantA = sortedBySeed.find((p) => p.seed === seedA);
    const participantB = sortedBySeed.find((p) => p.seed === seedB);

    if (participantA && participantB) {
      matches.push({
        participants: [participantB, participantA],
        matchNumber: i + 1,
        roundNumber: 1,
        status: "pending",
        score: null,
        winnerId: null,
      });
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
