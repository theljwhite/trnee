import { UPPERCASE_FIRST_LETTER } from "../constants/regularExpressions";

const base = "http://localhost:8088";
const tourneyBase = `${base}/tournaments`;
const tourneyParticBase = `${base}/tournament_participants`;
const headers = {
  "Content-Type": "application/json",
};

export const tournaments = {
  createTournament: async (tournament) => {
    const participantsArr = tournament.participants;

    const { participantsList, participants, ...rest } = tournament;
    const tourneyDetails = { ...rest, status: "pending" };

    const tourneyRes = await fetch(tourneyBase, {
      method: "POST",
      headers,
      body: JSON.stringify(tourneyDetails),
    });

    const newTourney = await tourneyRes.json();

    if (!tourneyDetails.hasCustomSignup && participantsArr) {
      for (const participant of participantsArr) {
        await fetch(tourneyParticBase, {
          method: "POST",
          headers,
          body: JSON.stringify({
            ...participant,
            userId: null,
            gameUsername: null,
            tournamentId: newTourney.id,
          }),
        });
      }
    }
    return newTourney;
  },
  getAllTournaments: async () => {
    const response = await fetch(tourneyBase);
    const tournaments = await response.json();
    return tournaments;
  },
  getAllTournamentsByGame: async (gameName) => {
    let game;
    if (!UPPERCASE_FIRST_LETTER.test(gameName)) {
      game = gameName.charAt(0).toUpperCase() + gameName.slice(1);
    }
    const response = await fetch(`${tourneyBase}?game=${game}`);
    const tournaments = await response.json();
    return tournaments;
  },
  getTournamentById: async (tourneyId) => {
    const response = await fetch(`${tourneyBase}?id=${tourneyId}`);
    const tournament = await response.json();
    return tournament;
  },
  getTournamentParticipants: async (tourneyId) => {
    const response = await fetch(
      `${base}/tournament_participants?tournamentId=${tourneyId}`
    );
    const participants = await response.json();
    return participants;
  },
};
