const usersBase = "http://localhost:8088/users";
const tourneyBase = "http://localhost:8088/tournaments";

export const users = {
  getAllUsers: async () => {
    const response = await fetch(usersBase);
    const users = await response.json();
    return users;
  },
  getUserById: async (userId) => {
    const response = await fetch(`${usersBase}?id=${userId}`);
    const user = await response.json();
    return user;
  },
  getUserAndTournaments: async (userId) => {
    const userResponse = await fetch(`${usersBase}?id=${userId}`);
    const user = await userResponse.json();

    if (user.length > 0) {
      const tourneyResponse = await fetch(
        `${tourneyBase}?creatorId=${user[0].id}`
      );
      const tournaments = await tourneyResponse.json();

      return { ...user[0], userTournaments: tournaments };
    }
    return null;
  },
  getUserTournaments: async (userId) => {
    const response = await fetch(`${tourneyBase}?creatorId=${userId}`);
    const tournaments = await response.json();
    return tournaments;
  },
};
