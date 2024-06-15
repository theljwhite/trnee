export const tournaments = {
  getAllTournaments: async () => {
    const response = await fetch("http://localhost:8088/tournaments");
    const tournaments = await response.json();
    return tournaments;
  },
};
