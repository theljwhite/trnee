import { createContext, useReducer, useEffect } from "react";
import { authReducer, initialAuthState } from "./AuthReducer";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const localTrneeUser = localStorage.getItem("trnee_user");

    if (localTrneeUser) {
      const trneeUser = JSON.parse(localTrneeUser);
      dispatch({ type: "login", payload: trneeUser });
    }
  };

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};
