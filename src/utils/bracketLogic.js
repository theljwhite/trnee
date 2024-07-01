import { api } from "./api";
import { matchesBase } from "../services/matchesRouter";

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

export const getRoundsCount = (participantsCount) => {
  return Math.ceil(Math.log(participantsCount) / Math.log(2));
};

//so that higher seeds dont meet eachother early on in the tournament
const generateSortedSeedingPattern = (participantsCount) => {
  const rounds = getRoundsCount(participantsCount);

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
        participantOneScore: 0,
        participantTwoScore: 0,
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

export const createDbMatches = async (matchesArr, tournamentId) => {
  const matchesDbShape = matchesArr.map((match) => ({
    ...match,
    participantOneId: match.participants[0].id,
    participantTwoId: match.participants[1].id,
    completedAt: null,
    tournamentId,
  }));

  matchesDbShape.forEach((match) => delete match.participants);

  const matchPromises = matchesDbShape.map((match) =>
    fetch(matchesBase, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(match),
    }).then((response) => response.json())
  );

  const dbMatches = await Promise.all(matchPromises);

  return dbMatches;
};

export const getNextMatchNumber = (currentMatchNumber, participantsCount) => {
  let roundNumber = 0;
  let roundSize = participantsCount / 2;
  let cumulativeMatches = 0;

  while (currentMatchNumber > roundSize) {
    currentMatchNumber -= roundSize;
    cumulativeMatches += roundSize;
    roundSize /= 2;
    roundNumber++;
  }

  const baseMatchNumber = participantsCount / Math.pow(2, roundNumber + 1);
  const nextMatchNumber = Math.ceil(currentMatchNumber / 2);

  const finalMatchNumber =
    nextMatchNumber + baseMatchNumber + cumulativeMatches;

  return finalMatchNumber;
};

export const getMatchByMatchNumber = async (matchNumber, tournamentId) => {
  const response = await fetch(
    `${matchesBase}?tournamentId=${tournamentId}&matchNumber=${matchNumber}`
  );
  const matches = await response.json();
  return matches.length > 0 ? matches[0] : null;
};

export const advanceWinnerHandleNextMatch = async (match) => {
  const participants = await api.tournaments.getTournamentParticipants(
    match.tournamentId
  );

  const nextMatchNumber = getNextMatchNumber(
    match.matchNumber,
    participants.length
  );
  const nextRoundNumber = match.roundNumber + 1;

  const nextMatch = await getMatchByMatchNumber(
    nextMatchNumber,
    match.tournamentId
  );

  if (!nextMatch) {
    const newMatchRes = await fetch(matchesBase, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        tournamentId: match.tournamentId,
        roundNumber: nextRoundNumber,
        matchNumber: nextMatchNumber,
        participantOneId: match.winnerId,
        participantTwoId: null,
        participantOneScore: 0,
        participantTwoScore: 0,
        status: "pending",
        winnerId: null,
        completedAt: null,
      }),
    });
    const newMatch = await newMatchRes.json();

    return newMatch;
  } else {
    const updateMatchData = {};

    if (!nextMatch.participantOneId) {
      updateMatchData.participantOneId = match.winnerId;
    }
    if (!nextMatch.participantTwoId) {
      updateMatchData.participantTwoId = match.winnerId;
    }

    const updateMatchRes = await fetch(`${matchesBase}/${nextMatch.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateMatchData),
    });
    const updatedMatch = await updateMatchRes.json();

    return updatedMatch;
  }
};

export const createRoundNames = (participantsCount, roundWidth) => {
  const totalRounds = getRoundsCount(participantsCount);
  const roundNames = [];

  for (let i = 1; i <= totalRounds; i++) {
    let name;
    if (i === totalRounds) name = "Finals";
    else if (i === totalRounds - 1) name = "Semifinals";
    else name = `Round ${i}`;

    roundNames.push({ name, x: (i - 1) * roundWidth });
  }
  return roundNames;
};
