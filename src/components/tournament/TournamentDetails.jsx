import { Link } from "react-router-dom";
import { useSession } from "../../auth/useSession";
import { SPACE_BETWEEN_CAPITALS_REPLACE } from "../../constants/regularExpressions";
import { gamesRecord } from "../../constants/gameConstants";
import {
  UsersIcon,
  TourneyBracketIconOne,
  DateIcon,
  ShareIcon,
  PrintIcon,
  InfoIcon,
  TwoGearsIcon,
  EditPencil,
  CodeBracketIcon,
} from "../UI/Icons";

export default function TournamentDetails({ tournament, rounds }) {
  const { state: session } = useSession();

  const startDate = new Date(tournament.startTime);
  const startDateString = startDate.toLocaleDateString();
  const startTimeString = startDate.toLocaleTimeString();
  const game = gamesRecord[tournament.game.toLowerCase() ?? "none"];

  return (
    <div className="bg-zinc-700 text-zinc-300 w-[350px] absolute rounded-bl-3xl top-0 right-0">
      <div className="bg-zinc-800 w-full p-4 h-full text-sm rounded-bl-xl  text-center flex items-center justify-center h-8  p-1">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <span className="w-10 h-10 rounded-full bg-indigo-400" />

            <div className="font-medium text-white justify-start flex flex-col text-start">
              <div>{tournament.name}</div>
              <div className="text-sm text-zinc-400">
                Organized by {tournament.creatorUsername}
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <span className="w-4 h-4 text-indigo-200 me-1">
              <UsersIcon size={16} color="currentColor" />
            </span>
            <p className="ms-2 text-sm text-gray-900 text-white">
              {rounds.length} participants
            </p>
            <span className="w-1 h-1 mx-1.5 rounded-full bg-zinc-400" />
            <a
              href="#"
              className="text-sm opacity-70 underline hover:no-underline"
            >
              View all participants
            </a>
          </div>

          <div className="flex items-center">
            <span className="w-4 h-4 text-indigo-200 me-1">
              <img className="rounded-sm" src={game.icon ?? "/anonUser.png"} />
            </span>
            <p className="ms-2 text-sm text-white">Game</p>
            <span className="w-1 h-1 mx-1.5 rounded-full bg-zinc-400" />
            <span className="opacity-70 capitalize">{tournament.game}</span>
          </div>

          <div className="flex items-center">
            <span className="w-4 h-4 text-indigo-200 me-1">
              <TourneyBracketIconOne size={16} color="currentColor" />
            </span>
            <p className="ms-2 text-sm text-white">Format </p>
            <span className="w-1 h-1 mx-1.5 rounded-full bg-zinc-400" />
            <span className="opacity-70">
              {SPACE_BETWEEN_CAPITALS_REPLACE(tournament.format)}
            </span>
          </div>

          <div className="flex items-center">
            <span className="w-4 h-4 text-indigo-200 me-1">
              <DateIcon size={16} color="currentColor" />
            </span>
            <p className="ms-2 text-sm text-white">Start Time</p>

            <span className="w-1 h-1 mx-1.5 rounded-full bg-zinc-400" />
            <span className="opacity-70">
              {startDateString} at {startTimeString}
            </span>
          </div>

          <div className="flex flex-row justify-center">
            <span className="cursor-pointer inline-flex  items-center justify-center w-6 h-6 me-2 text-sm font-semibold rounded-full bg-zinc-700 text-blue-400">
              <span className="mr-0.5">
                <ShareIcon color="#FFF" size={14} />
              </span>
              <span className="sr-only">Share icon</span>
            </span>

            <span className="cursor-pointer inline-flex items-center justify-center w-6 h-6 me-2 text-sm font-semibold rounded-full bg-zinc-700 text-gray-300">
              <PrintIcon color="#FFF" size={16} />
              <span className="sr-only">Print icon</span>
            </span>

            <span className="cursor-pointer inline-flex items-center justify-center w-6 h-6 me-2 text-sm font-semibold rounded-full bg-zinc-700 text-gray-300">
              <CodeBracketIcon color="#FFF" size={16} />
              <span className="sr-only">Embed icon</span>
            </span>

            <span className="cursor-pointer inline-flex items-center justify-center w-6 h-6 me-2 text-sm font-semibold rounded-full bg-zinc-700 text-gray-300">
              <InfoIcon size={14} />
              <span className="sr-only">Info icon</span>
            </span>

            {session.user.id === tournament.creatorId && (
              <>
                <Link
                  to={`/dashboard/trnee/${tournament.id}`}
                  className="cursor-pointer inline-flex items-center justify-center w-6 h-6 me-2 text-sm font-semibold text-white rounded-full bg-zinc-700"
                >
                  <TwoGearsIcon size={14} />
                  <span className="sr-only">Settings icon</span>
                </Link>

                <Link
                  to={`/dashboard/trnee/${tournament.id}`}
                  className="cursor-pointer inline-flex items-center justify-center w-6 h-6 me-2 text-sm text-white font-semibold text-white rounded-full bg-zinc-700"
                >
                  <EditPencil color="#FFF" size={14} />
                  <span className="sr-only">Edit pencil icon</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
