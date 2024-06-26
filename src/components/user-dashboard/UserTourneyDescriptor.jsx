import { gamesRecord } from "../../constants/gameConstants";
import { SPACE_BETWEEN_CAPITALS_REPLACE } from "../../constants/regularExpressions";
import {
  TourneyBracketIconOne,
  UserIcon,
  UsersIcon,
  StatusIconOne,
  DateIcon,
} from "../UI/Icons";

export default function UserTourneyDescriptor({ tournament }) {
  const game = gamesRecord[tournament?.game?.toLowerCase() ?? "none"];

  const startDate = new Date(tournament.startTime);
  const startDateString = startDate.toLocaleDateString();
  const startTimeString = startDate.toLocaleTimeString();

  const currDateMs = Math.floor(new Date().getTime() / 1000);
  const startDateMs = Math.floor(startDate.getTime() / 1000);

  const alreadyStarted =
    tournament.status === "ongoing" && startDateMs < currDateMs;

  return (
    <div
      className={`p-6 rounded-lg shadow`}
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(39, 39, 42, 0.99) 30%, rgba(39, 39, 42, 0.75) 70%, rgba(39, 39, 42, 0) 100%), url('${game.bannerImg}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
      }}
    >
      <div className="flex items-center space-x-4">
        <img className="w-10 h-10 rounded-lg object-cover" src={game.icon} />
        <h1 className="text-white capitalize text-lg lg:text-3xl leading-8 lg:leading-9 font-bold">
          {tournament.name}
        </h1>
      </div>
      <p className="mt-3 opacity-80 text-sm lg:text-base text-white">
        {tournament.description}
      </p>
      <div className="flex flex-wrap mt-4">
        <span className="mr-6 text-white inline-block h-[1em] flex flex-row justify-center items-center align-[-0.125em]">
          <span className="mr-1">
            <TourneyBracketIconOne size={16} />
          </span>
          {SPACE_BETWEEN_CAPITALS_REPLACE(tournament.format ?? "")}
        </span>
        <span className="mr-6 text-white inline-block h-[1em] flex flex-row justify-center items-center align-[-0.125em]">
          <span className="mr-1">
            {tournament.isTeamBased ? (
              <UsersIcon size={16} />
            ) : (
              <UserIcon size={16} />
            )}
          </span>
          {tournament.isTeamBased
            ? "Team Tournament"
            : "Individual Participants"}
        </span>
        <span className="mr-6 capitalize text-white inline-block h-[1em] flex flex-row justify-center items-center align-[-0.125em]">
          <span className="mr-1">
            <StatusIconOne size={16} />
          </span>
          {tournament.status}
        </span>
        {tournament.startTime && (
          <span className="mr-6 text-white inline-block h-[1em] flex flex-row justify-center items-center align-[-0.125em]">
            <span className="mr-1">
              <DateIcon color="currentColor" size={16} />
            </span>
            {alreadyStarted ? "Started on" : "Starts on"} {startDateString} at{" "}
            {startTimeString}
          </span>
        )}
      </div>
    </div>
  );
}
