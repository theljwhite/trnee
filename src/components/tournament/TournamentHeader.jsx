import { Link } from "react-router-dom";
import { useSession } from "../../auth/useSession";
import { SPACE_BETWEEN_CAPITALS_REPLACE } from "../../constants/regularExpressions";
import { copyTextToClipboard } from "../../utils/copyText";

export default function TournamentHeader({ tournament }) {
  const { state: session } = useSession();

  return (
    <div className="flex flex-wrap lg:flex-nowrap items-center border-b border-zinc-800 pb-4 mb-4">
      <div className="w-full lg:w-1/3">
        <h2 className="text-white text-xl leading-6 lg:leading-7 font-bold lg:text-3xl">
          {tournament.name}
        </h2>
      </div>
      <div className="text-white hidden text-center lg:block mx-auto w-full lg:w-1/3">
        <div className="text-center my-auto flex flex-col">
          {tournament.description}
          <span className="text-xs opacity-70">
            {SPACE_BETWEEN_CAPITALS_REPLACE(tournament.format ?? "")}
          </span>
        </div>
      </div>
      <div className="w-full lg:w-1/3 flex lg:justify-end">
        {session?.user?.id === tournament.creatorId && (
          <Link
            to={`/dashboard/trnee/${tournament.id}`}
            className="flex items-center text-white justify-center bg-zinc-800 mr-2 px-4 py-2 rounded-lg cursor-pointer"
          >
            <span className="hidden xl:inline">Manage TRNEE</span>
          </Link>
        )}
        <button
          onClick={() => copyTextToClipboard(window.location.href)}
          className="flex items-center text-white justify-center bg-zinc-800 mr-2 px-4 py-2 rounded-lg cursor-pointer"
        >
          <span className="hidden xl:inline">Copy TRNEE Link</span>
        </button>
      </div>
    </div>
  );
}
