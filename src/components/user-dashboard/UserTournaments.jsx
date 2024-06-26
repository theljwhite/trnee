import { useState, useEffect } from "react";
import { useSession } from "../../auth/useSession";
import { Link } from "react-router-dom";
import { api } from "../../utils/api";
import { gamesRecord } from "../../constants/gameConstants";
import { EditPencil } from "../UI/Icons";

export default function UserTournaments() {
  const [tournaments, setTournaments] = useState([]);
  const { state: session } = useSession();

  useEffect(() => {
    if (session) getUserTournaments();
  }, [session]);

  const getUserTournaments = async () => {
    const tournaments = await api.tournaments.getUserTournaments(
      session?.user?.id
    );
    setTournaments(tournaments);
  };

  const getStatusCircleColor = (tourneyStatus) => {
    if (tourneyStatus === "pending") return "bg-yellow-400";
    if (tourneyStatus === "ongoing") return "bg-orange-400";
    if (tourneyStatus === "completed") return "bg-emerald-400";
  };

  return (
    <div className="grid grid-cols-1 gap-2">
      <div className="flex items-center font-bold text-white px-4">
        <div className="hidden md:block w-16">#</div>
        <div className="w-full mr-auto">Tournament</div>
        <div className="hidden xl:block w-1/2">Game</div>
        <div className="hidden xl:block w-48">Status</div>
        <div className="w-24" />
      </div>
      {tournaments.map((tourney) => {
        return (
          <div key={tourney.id} className="flex space-x-2 min-h-16">
            <Link
              to={`/trnee/${tourney.id}`}
              className="w-full flex items-center bg-zinc-800 text-white rounded-lg shadow px-4 py-2"
            >
              <div className="hidden md:block w-16 font-bold">
                #{tourney.id}
              </div>
              <div className="w-full font-semibold mr-auto bg-zinc-800">
                {tourney.name}
              </div>
              <div className="hidden xl:block w-1/2">
                <div className="flex space-x-3 items-center">
                  <img
                    src={
                      gamesRecord[tourney.game.toLowerCase()].icon ??
                      "/anonUser.png"
                    }
                    className="w-4 h-4 lg:w-6 lg:h-6 rounded"
                  />
                  <div className="w-full font-semibold mr-auto bg-zinc-800">
                    {tourney.game}
                  </div>
                </div>
              </div>
              <div className="w-48 capitalize hidden xl:block relative">
                <span
                  className={`${getStatusCircleColor(
                    tourney.status
                  )} absolute right-6 top-2 size-2.5 rounded-full border-2 border-zinc-900 shadow-[inset_0_0.5px_0_theme(colors.white/10%),inset_0_0_0_0.5px_theme(colors.white/10%)]`}
                />
                {tourney.status}
              </div>
            </Link>

            <Link
              to={`/dashboard/trnee/${tourney.id}`}
              className="flex text-white items-center text-left px-4 py-2 rounded-lg bg-indigo-600"
            >
              <EditPencil color="currentColor" size={18} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
