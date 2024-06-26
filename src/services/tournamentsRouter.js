import { UPPERCASE_FIRST_LETTER } from "../constants/regularExpressions";
import { createDbMatches, generateMatches } from "../utils/bracketLogic";

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
      const tourneyParticPromises = participantsArr.map((participant) =>
        fetch(tourneyParticBase, {
          method: "POST",
          headers,
          body: JSON.stringify({
            ...participant,
            userId: null,
            gameUsername: null,
            tournamentId: newTourney.id,
          }),
        }).then((response) => response.json())
      );

      const tourneyParticipants = await Promise.all(tourneyParticPromises);

      const newMatches = generateMatches(
        newTourney.format,
        tourneyParticipants
      );

      const dbMatches = await createDbMatches(newMatches, newTourney.id);
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
  getUserTournaments: async (userId) => {
    const response = await fetch(`${tourneyBase}?creatorId=${userId}`);
    const tournaments = await response.json();
    return tournaments;
  },
  updateTournamentSettings: async (settings, tourneyId) => {
    const {
      newName: name,
      newDescription: description,
      newStartDate: startDate,
    } = settings;
    const tournamentRes = await fetch(`${tourneyBase}?id=${tourneyId}`);
    const [tournament] = await tournamentRes.json();

    if (tournament.status !== "pending") return null;

    const updateData = Object.assign(
      {},
      name && { name },
      description && { description },
      startDate && { startDate }
    );

    const updateRes = await fetch(`${tourneyBase}/${tourneyId}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify(updateData),
    });
    const updatedTournament = await updateRes.json();

    return updatedTournament;
  },
  deleteTournament: async (userId, tourneyId) => {
    const tournamentRes = await fetch(`${tourneyBase}?id=${tourneyId}`);
    const [tournament] = await tournamentRes.json();

    if (tournament.creatorId !== userId) return "Invalid credentials";
    if (tournament.status !== "pending") {
      return "Cannot delete a tournament that is ongoing or completed";
    }

    await fetch(`${tourneyBase}/${tourneyId}`, {
      method: "DELETE",
    });
  },
};
