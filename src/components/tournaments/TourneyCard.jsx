import { Link } from "react-router-dom";
import { TourneyBracketIconOne, UsersIcon } from "../UI/Icons";
import { SPACE_BETWEEN_CAPITALS_REPLACE } from "../../constants/regularExpressions";
import { gamesRecord } from "../../constants/gameConstants";

export default function TourneyCard({ tournament }) {
  const game = gamesRecord[tournament.game.toLowerCase()];
  return (
    <Link to={`/trnee/${tournament.id}`}>
      <div
        className={`flex flex-col h-40 lg:h-56 p-4 lg:p-6 text-white rounded-lg shadow text-left`}
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(39, 39, 42, 0.99) 30%, rgba(39, 39, 42, 0.75) 70%, rgba(39, 39, 42, 0) 100%), url('${game.tourneyCardImg}')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
        }}
      >
        <div className="lg:text-lg md:text-base font-bold">
          {tournament.name}
        </div>
        <div className="opacity-70 text-sm mt-1">
          Created by{" "}
          <span className="font-semibold">{tournament.creatorUsername}</span>
        </div>
        <div className="mt-auto flex items-center text-sm lg:text-base">
          <span className="mr-2">
            <TourneyBracketIconOne size={24} />
          </span>
          <span className="leading-5 lg:leading-6">
            {SPACE_BETWEEN_CAPITALS_REPLACE(tournament.format)} -{" "}
            {tournament.description}
          </span>
        </div>

        <div className="pt-2 mt-2 lg:pt-4 lg:mt-4 border-t border-zinc-700" />
        <div className="flex space-x-3 items-center">
          <img className="w-6 h-6 lg:w-8 lg:h-8 rounded" src={game.icon} />
          <div className="font-semibold text-base lg:text-lg capitalize">
            {tournament.game}
          </div>
        </div>
      </div>
    </Link>
  );
}
