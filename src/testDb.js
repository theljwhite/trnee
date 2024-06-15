const dbExample = {
  users: [
    { id: 1, username: "jones", email: "" },
    { id: 2, username: "davis", email: "" },
    { id: 3, username: "jasmine", email: "" },
    { id: 4, username: "barns", email: "" },
    { id: 5, username: "lll", email: "" },
    { id: 6, username: "ppp", email: "" },
    { id: 7, username: "qqqq", email: "" },
    { id: 8, username: "wwww", email: "" },
    { id: 9, username: "organizer_joe", email: "" },
  ],
  participants: [
    {
      id: 1,
      userId: 2,
      username: "davis_username",
      gameUsername: "",
      gameId: 900,
    },
    {
      id: 2,
      userId: 3,
      username: "jasmine_username",
      gameUsername: "",
      gameId: 900,
    },
    {
      id: 2,
      userId: 3,
      username: "jasmine_username",
      gameUsername: "",
      gameId: 900,
    },
  ],
  tournaments: [
    {
      id: 1,
      name: "Quake Tourney",
      description: "Quake FFA tournament",
      game: "Quake",
      format: "SingleElimination",
      startTime: new Date(),
      hasCustomSignup: true,
      isTeamBased: false,
      isParticipantUpdateAllowed: false,
      creatorId: 9,
    },
    {
      id: 2,
      name: "DBT Tourney",
      description: "DBT FFA tournament",
      game: "Diabotical",
      format: "DoubleElimination",
      startTime: new Date(),
      hasCustomSignup: true,
      isTeamBased: false,
      isParticipantUpdateAllowed: false,
      creatorId: 9,
    },
    {
      id: 3,
      name: "DBT Team Tourney",
      description: "",
      game: "Diabotical",
      format: "DoubleElimination",
      startTime: new Date(),
      hasCustomSignup: false,
      isTeamBased: true,
      isParticipantUpdateAllowed: true,
      creatorId: 9,
    },
  ],
  matches: [
    {
      id: 1,
      tournamentId: 1,
      roundNumber: 1,
      matchNumber: 1,
      participantOneId: 1,
      participantTwoId: 2,
      winnerId: 1,
      status: "completed",
      score: "2 - 1",
    },
    {
      id: 2,
      tournamentId: 1,
      roundNumber: 1,
      matchNumber: 2,
      participantOneId: 2,
      participantTwoId: 3,
      winnerId: 2,
      status: "completed",
      score: "3 - 0",
    },
    {
      id: 3,
      tournamentId: 1,
      roundNumber: 1,
      matchNumber: 3,
      participantOneId: 4,
      participantTwoId: 5,
      winnerId: 5,
      status: "completed",
      score: "3 - 0",
    },
    {
      id: 4,
      tournamentId: 1,
      roundNumber: 1,
      matchNumber: 4,
      participantOneId: 6,
      participantTwoId: 7,
      winnerId: 6,
      status: "completed",
      score: "3 - 0",
    },
    {
      id: 5,
      tournamentId: 1,
      roundNumber: 1,
      matchNumber: 5,
      participantOneId: 8,
      participantTwoId: 9,
      winnerId: 9,
      status: "completed",
      score: "3 - 0",
    },
    {
      id: 6,
      tournamentId: 1,
      roundNumber: 1,
      matchNumber: 6,
      participantOneId: 10,
      participantTwoId: 11,
      winnerId: 11,
      status: "completed",
      score: "3 - 0",
    },
  ],
  team_matches: [
    {
      id: 1,
      tournamentId: 3,
      roundNumber: 1,
      matchNumber: 1,
      teamOneId: 1,
      teamTwoId: 2,
      winnerId: 2,
      status: "completed",
      score: "1 - 0",
    },
    {
      id: 2,
      tournamentId: 3,
      roundNumber: 1,
      matchNumber: 2,
      teamOneId: 1,
      teamTwoId: 2,
      winnerId: 2,
    },
  ],
  teams: [
    {
      id: 1,
      name: "Wipeout",
      captainId: 1,
    },
    {
      id: 2,
      name: "Wipeout Team 2",
      captainId: 2,
    },
    {
      id: 3,
      name: "Wipeout Team 3",
      captainId: 4,
    },
    {
      id: 2,
      name: "Wipeout Team 3",
      captainId: 5,
    },
    {
      id: 2,
      name: "Wipeout Team 3",
      captainId: 6,
    },
  ],
  bracket_stages: [],
  tournament_participants: [
    {
      id: 1,
      tournamentId: 1,
      participantId: 1,
      seed: 1,
    },
    {
      id: 2,
      tournamentId: 1,
      participantId: 3,
      seed: 2,
    },
    {
      id: 3,
      tournamentId: 1,
      participantId: 2,
      seed: 3,
    },
    {
      id: 4,
      tournamentId: 1,
      participantId: 4,
      seed: 4,
    },
  ],
  tournament_teams: [{ id: 1, seed: 1, tournamentId: 3, teamId: 1 }],
  participant_stats: [],
};

export const getUserCreatedTournaments = (userId) => {
  const tournaments = dbExample.tournaments.filter(
    (t) => t.creatorId === userId
  );
  return tournaments;
};

export const getAllTournamentParticipants = (tourneyId) => {
  const participants = dbExample.tournament_participants.filter(
    (t) => t.tournamentId === tourneyId
  );
  return participants;
};

export const getMatchesByTourneyId = (tourneyId) => {
  const matches = dbExample.matches.filter((t) => t.tournamentId === tourneyId);
  return matches;
};

export const getTeamsByTourneyId = (tourneyId) => {
  const teams = dbExample.tournament_teams.filter(
    (t) => t.tournamentId === tourneyId
  );
  return teams;
};

export const getMatchesByRoundNumberForATourney = (tourneyId) => {
  const tourneyMatches = dbExample.matches.filter(
    (match) => match.tournamentId === tourneyId
  );
};

export const getRoundWinners = (tourneyId, roundNumber) => {
  const matches = dbExample.matches.filter(
    (match) => match.tournamentId === tourneyId
  );

  const winners = matches
    .filter((match) => match.roundNumber === roundNumber)
    .map((match) => match.winnerId);
  return winners;
};

export const getPlayerCountForTourney = (tourneyId) => {
  const playersCount = dbExample.tournament_participants.filter(
    (t) => t.tournamentId === tourneyId
  ).length;
  return playersCount;
};
