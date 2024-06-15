import { SPACE_BETWEEN_CAPITALS_REPLACE } from "../../constants/regularExpressions";

export default function MediumTourneyCard({ tournament }) {
  return (
    <div className="relative">
      <a className="flex flex-col h-32 bg-zinc-800 rounded-lg shadow p-4">
        <h2 className="text-white text-xl leading-6 lg:leading-7 font-bold lg:text-3xl">
          {tournament.name}
        </h2>
        <div className="mt-auto opacity-70 flex flex-col text-white">
          <span>{SPACE_BETWEEN_CAPITALS_REPLACE(tournament.format)}</span>
          <span>{tournament.game}</span>
        </div>
      </a>
    </div>
  );
}
