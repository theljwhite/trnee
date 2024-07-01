import {
  createDbMatches,
  getMatchByMatchNumber,
  advanceWinnerHandleNextMatch,
} from "../utils/bracketLogic";

const base = "http://localhost:8088";
export const matchesBase = `${base}/matches`;
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
  getLatestCompleted: async (tournamentId, numMatches) => {
    const matchesRes = await fetch(
      `${matchesBase}?status=completed&tournamentId=${tournamentId}`
    );
    const participantsRes = await fetch(
      `${base}/tournament_participants?tournamentId=${tournamentId}`
    );
    const matches = await matchesRes.json();
    const participants = await participantsRes.json();

    const latestCompletedMatches = matches
      .map((match) => {
        const pOne = participants.find((p) => p.id === match.participantOneId);
        const pTwo = participants.find((p) => p.id === match.participantTwoId);
        const winner = participants.find(
          (p) => p.id === match.winnerId
        ).username;

        return {
          ...match,
          participants: [pOne, pTwo],
          winner,
        };
      })
      .sort(
        (a, b) =>
          new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()
      )
      //.sort((a, b) => b.matchNumber - a.matchNumber)
      .slice(0, numMatches);

    return latestCompletedMatches;
  },
  updateMatchFromCreator: async (match, scoreOne, scoreTwo) => {
    if (scoreOne && scoreTwo) {
      const updateData = {
        participantOneScore: scoreOne,
        participantTwoScore: scoreTwo,
        status: "completed",
        winnerId:
          scoreOne > scoreTwo ? match.participantOneId : match.participantTwoId,
        completedAt: new Date(),
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
