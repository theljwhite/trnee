import { generateMatches, createDbMatches } from "../utils/bracketLogic";

const matchesBase = "http://localhost:8088/matches";
const headers = {
  "Content-Type": "application/json",
};

export const matches = {
  createMatches: createDbMatches,
  getTournamentMatches: async (tournamentId) => {
    const matchesResponse = await fetch(
      `${matchesBase}?tournamentId=${tournamentId}`
    );
    const matches = await matchesResponse.json();
    return matches;
  },
};
