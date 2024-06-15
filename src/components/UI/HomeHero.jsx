import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TourneyBracketIconOne,
  TrophyStarIcon,
  GameControllerIcon,
  SearchIcon,
} from "./Icons";
import StyledInput from "./StyledInput";

const featuresList = [
  {
    title: "Create Tournament",
    info: "Choose from Single Elimination, Double Elimination, or Round Robin",
    icon: <TourneyBracketIconOne color="currentColor" size={36} />,
    route: "/create",
  },
  {
    title: "Make a Leaderboard",
    info: "Track your tournament's participants in the form of a leaderboard",
    icon: <TrophyStarIcon color="currentColor" size={36} />,
    route: "/create",
  },
  {
    title: "Play Tournaments",
    info: "Join public tournaments, play, track your in-game stats, and glhf",
    icon: <GameControllerIcon color="currentColor" size={36} />,
    route: "/tournaments",
  },
];

export default function HomeHero() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const onSearchChange = (e) => {
    //TODO - filter down games list and redirect
    setSearchQuery(e.target.value);
  };

  return (
    <div className="opacity-100 transition-all ease-in-out duration-200">
      <div className="pt-8 pb-8 max-w-screen-lg ml-auto mr-auto pl-6 pr-6">
        <a className="mt-12 w-full lg:w-3/4 xl:w-2/3 mx-auto flex items-center bg-indigo-400 text-indigo-900 text-sm p-1 rounded-2xl font-semibold hover:opacity-80 transition ease-in-out duration-300">
          <div className="bg-indigo-900 text-indigo-300 text-sm px-2 py-1 rounded-2xl font-bold">
            {new Date().toISOString().split("T")[0]}
          </div>
          <span
            onClick={() => navigate("/tournaments")}
            className="pl-2 font-sans cursor-pointer"
          >
            Ready to show off your skills? Public tournaments are now active!
          </span>
        </a>
        <div className="pt-6 pb-10 lg:pt-10 lg:pb-16 text-center">
          <h1 className="text-4xl text-white font-bold">
            TRNEE - the <span className="text-indigo-500">best</span> bracket
            creation tool.
          </h1>
          <p className="text-white">
            The <span className="text-indigo-500">quickest</span> way to create
            an e-sports tournament bracket
          </p>
        </div>
        <div className="w-full lg:w-3/4 xl:w-2/3 mx-auto relative">
          <StyledInput
            stateVar={searchQuery}
            onChange={onSearchChange}
            icon={<SearchIcon color="#FFF" size={18} />}
            placeholder="Search for a game..."
          />
          <h2 className="mt-12 mb-4 text-2xl text-white font-semibold text-center">
            Features
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {featuresList.map((item, index) => {
              return (
                <div
                  onClick={() => navigate(item.route)}
                  key={index}
                  className="hover:scale-105 hover:opacity-90 flex cursor-pointer flex-col items-center justify-center bg-zinc-800 p-4 rounded-lg shadow"
                >
                  <div className="text-4xl text-indigo-500">{item.icon}</div>
                  <span className="text-lg font-semibold mt-2 text-white">
                    {item.title}
                  </span>
                  <div className="text-xs text-center mt-2 text-white">
                    {item.info}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
