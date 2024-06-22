import { generateMatches } from "../utils/bracketLogic";

const matchesBase = "http://localhost:8088/matches";
const headers = {
  "Content-Type": "application/json",
};

export const matches = {
  createMatches: async (matchesArr, tournamentId) => {
    const matchesDbShape = matchesArr.map((match) => ({
      ...match,
      participantOneId: match.participants[0].id,
      participantTwoId: match.participants[1].id,
      tournamentId,
    }));

    matchesDbShape.forEach((match) => delete match.participants);

    const matchPromises = matchesDbShape.map((match) =>
      fetch(matchesBase, {
        method: "POST",
        headers,
        body: JSON.stringify(match),
      }).then((response) => response.json())
    );

    const dbMatches = await Promise.all(matchPromises);

    return dbMatches;
  },
};
