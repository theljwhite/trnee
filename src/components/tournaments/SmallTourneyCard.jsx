import { Link } from "react-router-dom";
import { gamesRecord } from "../../constants/gameConstants";
import { SPACE_BETWEEN_CAPITALS_REPLACE } from "../../constants/regularExpressions";

export default function SmallTourneyCard({ tournament }) {
  const game = gamesRecord[tournament.game.toLowerCase()];
  return (
    <Link to={`/tournaments/${tournament.id}`}>
      <div className="relative shadow-xl border border-white border-opacity-10 rounded-lg">
        <img
          className="w-full h-40 bg-gray-900 rounded-lg object-cover"
          src={game.icon}
        />

        <div className="absolute bottom-0 left-0 right-0 h-full flex items-end justify-center bg-gradient-to-t from-black pb-3 text-white font-semibold text-base rounded-b-lg">
          {SPACE_BETWEEN_CAPITALS_REPLACE(tournament.format)}
        </div>
      </div>
    </Link>
  );
}
