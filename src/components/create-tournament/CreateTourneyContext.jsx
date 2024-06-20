import { useContext, useReducer, createContext } from "react";
import {
  createTourneyInitialState,
  createTourneyReducer,
} from "./CreateTourneyReducer";

export const CreateTourneyContext = createContext();

export const CreateTourneyProvider = (props) => {
  const [state, dispatch] = useReducer(
    createTourneyReducer,
    createTourneyInitialState
  );

  return (
    <CreateTourneyContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CreateTourneyContext.Provider>
  );
};

export const useCreateTourneyContext = () => useContext(CreateTourneyContext);
