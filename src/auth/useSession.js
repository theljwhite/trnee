import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const useSession = () => {
  const ctx = useContext(AuthContext);
  if (ctx === undefined) {
    throw new Error("Missing AuthProvider wrapper");
  }
  return ctx;
};
