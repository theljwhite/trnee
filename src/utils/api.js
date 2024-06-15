import { tournaments } from "../services/tournamentsRouter";
import { users } from "../services/usersRouter";

export const withTryCatch = (fn) => {
  return async (...args) => {
    try {
      return await fn(...args);
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };
};

export const api = {
  tournaments,
  users,
};
