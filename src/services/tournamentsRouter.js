import { UPPERCASE_FIRST_LETTER } from "../constants/regularExpressions";

const base = "http://localhost:8088";

export const tournaments = {
  getAllTournaments: async () => {
    const response = await fetch(`${base}/tournaments`);
    const tournaments = await response.json();
    return tournaments;
  },
  getAllTournamentsByGame: async (gameName) => {
    let game;
    if (!UPPERCASE_FIRST_LETTER.test(gameName)) {
      game = gameName.charAt(0).toUpperCase() + gameName.slice(1);
    }
    const response = await fetch(`${base}/tournaments?game=${game}`);
    const tournaments = await response.json();
    return tournaments;
  },
  getTournamentById: async (tourneyId) => {
    const response = await fetch(`${base}/tournaments?id=${tourneyId}`);
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
  getTournamentParticipantsFull: async (tourneyId) => {
    //TODO - see if this can be done in 1 call with query string
    const tourneyResponse = await fetch(
      `${base}/tournament_participants?tournamentId=${tourneyId}`
    );
    const participantsResponse = await fetch(`${base}/participants`);

    const tourneyParticipants = await tourneyResponse.json();
    const participants = await participantsResponse.json();

    const participantsWithData = tourneyParticipants.map((tp) => {
      const participant = participants.find(
        (participant) => participant.id === tp.participantId
      );
      return {
        ...participant,
        seed: tp.seed,
      };
    });
    return participantsWithData;
  },
};
