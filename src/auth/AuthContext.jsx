import { createContext, useReducer, useEffect } from "react";
import { authReducer, initialAuthState } from "./AuthReducer";
import { api } from "../utils/api";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  useEffect(() => {
    getUserAndTournaments();
  }, []);

  const getUserAndTournaments = async () => {
    const localTrneeUser = localStorage.getItem("trnee_user");

    if (localTrneeUser) {
      const trneeUser = JSON.parse(localTrneeUser);
      const userTournaments = await api.users.getUserTournaments(trneeUser.id);
      const userWithData = { ...trneeUser, userTournaments };

      dispatch({ type: "login", payload: userWithData });
    }
  };

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};
