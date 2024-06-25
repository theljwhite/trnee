import {
  createDbMatches,
  getMatchByMatchNumber,
  advanceWinnerHandleNextMatch,
} from "../utils/bracketLogic";

//TODO - logic for updating match can be simplified when I update the way scores are reported

export const matchesBase = "http://localhost:8088/matches";
const headers = {
  "Content-Type": "application/json",
};

export const matches = {
  createMatches: async (matchesArr, tournamentId) => {
    return await createDbMatches(matchesArr, tournamentId);
  },
  getMatchByMatchNumber: async (matchNumber, tournamentId) => {
    return await getMatchByMatchNumber(matchNumber, tournamentId);
  },
  getTournamentMatches: async (tournamentId) => {
    const matchesResponse = await fetch(
      `${matchesBase}?tournamentId=${tournamentId}`
    );
    const matches = await matchesResponse.json();
    return matches;
  },
  getMatchesByStatus: async (status, tournamentId) => {
    const response = await fetch(
      `${matchesBase}?status=${status}&tournamentId=${tournamentId}`
    );
    const matchesByStatus = await response.json();
    return matchesByStatus;
  },
  updateMatchFromCreator: async (match, scoreOne, scoreTwo) => {
    if (match.status !== "pending") return null;

    const sortedBySeed = match.participants.sort((a, b) => a.seed - b.seed);
    const seedToScore = new Map([
      [sortedBySeed[0].seed, Number(scoreOne)],
      [sortedBySeed[1].seed, Number(scoreTwo)],
    ]);

    if (scoreOne && scoreTwo) {
      const particWithScores = sortedBySeed.map((participant) => {
        if (participant.id === match.participantOneId) {
          return { ...participant, score: seedToScore.get(participant.seed) };
        } else if (participant.id === match.participantTwoId) {
          return { ...participant, score: seedToScore.get(participant.seed) };
        }
        return participant;
      });
      const participantOneScore = particWithScores.find(
        (p) => p.id === match.participantOneId
      ).score;

      const participantTwoScore = particWithScores.find(
        (p) => p.id === match.participantTwoId
      ).score;

      const updateData = {
        participantOneScore,
        participantTwoScore,
        status: "completed",
        winnerId:
          participantOneScore > participantTwoScore
            ? match.participantOneId
            : match.participantTwoId,
      };

      const updateRes = await fetch(`${matchesBase}/${match.id}`, {
        method: "PATCH",
        headers,
        body: JSON.stringify(updateData),
      });
      const updatedMatch = await updateRes.json();

      const nextMatch = await advanceWinnerHandleNextMatch(updatedMatch);

      return { updatedMatch, nextMatch };
    }
  },
  updateMatchFromParticipant: async (match, score) => {
    //TODO
  },
};
