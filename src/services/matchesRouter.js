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
    if (scoreOne && scoreTwo) {
      const updateData = {
        participantOneScore: scoreOne,
        participantTwoScore: scoreTwo,
        status: "completed",
        winnerId:
          scoreOne > scoreTwo ? match.participantOneId : match.participantTwoId,
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
