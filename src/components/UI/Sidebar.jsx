import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSession } from "../../auth/useSession";
import { api } from "../../utils/api";
import {
  AddIconCircle,
  FolderPerson,
  TourneyBracketIconOne,
  TwoGearsIcon,
} from "./Icons";
import { gameItems } from "../../constants/gameConstants";

export default function Sidebar() {
  const [userTournies, setUserTournies] = useState([]);
  const { state } = useSession();

  useEffect(() => {
    getUserTournaments();
  }, [state.user]);

  const getUserTournaments = async () => {
    if (state.user) {
      const tournaments = await api.users.getUserTournaments(state.user.id);
      setUserTournies(tournaments);
    }
  };

  return (
    <div className="hidden text-center lg:block fixed bottom-0 top-0 left-0 w-16 bg-zinc-800/60 z-50 shadow">
      <Link
        to="/"
        className="block w-16 h-16 text-white bg-indigo-600 flex items-center justify-center font-bold text-3xl"
      >
        T
      </Link>
      {gameItems.map((item, index) => {
        return (
          <Link
            to={`/tournaments/${item.name.toLowerCase()}`}
            key={index}
            className="w-full cursor-pointer h-16 flex items-center justify-center hover:bg-zinc-700 transition ease-in-out duration-200"
          >
            <span className="w-10 h-10 p-0.5 flex items-center justify-center">
              <img
                className="object-cover w-full h-full rounded-lg"
                src={item.img}
              />
            </span>
          </Link>
        );
      })}
      <span className="mt-4 mb-1 text-xs text-center text-white tracking-tighter font-semibold uppercase text-center">
        TRNEES
      </span>

      {userTournies
        .slice(-3)
        .sort((a, b) => b.id - a.id)
        .map((tournament) => {
          return (
            <Link
              key={tournament.id}
              to={`/trnee/${tournament.id}`}
              className="w-full cursor-pointer h-16 flex items-center justify-center hover:bg-zinc-700 transition ease-in-out duration-200"
            >
              <span className="rounded-lg bg-gray-800 w-10 h-10 p-0.5 flex items-center justify-center">
                <span className="text-white">
                  <TourneyBracketIconOne color="currentColor" size={24} />
                </span>
              </span>
            </Link>
          );
        })}

      <Link
        to={state.user ? "/create" : "/login"}
        className="w-full cursor-pointer h-16 flex items-center justify-center hover:bg-zinc-700 transition ease-in-out duration-200"
      >
        <span className="rounded-lg bg-gray-700 w-10 h-10 p-0.5 flex items-center justify-center">
          <span className="text-white">
            <AddIconCircle color="currentColor" size={24} />
          </span>
        </span>
      </Link>

      <span className="mt-4 mb-1 text-xs text-center text-white tracking-tighter font-semibold uppercase text-center">
        Account
      </span>
      <Link
        to={state.user ? "/dashboard" : "/login"}
        className="w-full cursor-pointer h-16 flex items-center justify-center hover:bg-zinc-700 transition ease-in-out duration-200"
      >
        <span className="rounded-lg w-10 h-10 p-0.5 flex items-center justify-center">
          <span className="text-white">
            <FolderPerson color="currentColor" size={24} />
          </span>
        </span>
      </Link>
      <Link
        to={state.user ? "/dashboard" : "/login"}
        className="w-full cursor-pointer h-16 flex items-center justify-center hover:bg-zinc-700 transition ease-in-out duration-200"
      >
        <span className="rounded-lg w-10 h-10 p-0.5 flex items-center justify-center">
          <span className="text-white">
            <TwoGearsIcon color="currentColor" size={24} />
          </span>
        </span>
      </Link>
    </div>
  );
}
