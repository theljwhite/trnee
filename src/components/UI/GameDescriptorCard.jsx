import { WorldUrlIcon, TwitterIcon, RedditIcon } from "../UI/Icons";
import { gamesRecord } from "../../constants/gameConstants";

export default function GameDescriptorCard({ selectedGame }) {
  const game = gamesRecord[selectedGame];
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
          {selectedGame}
        </h1>
      </div>
      <p className="mt-3 opacity-80 text-sm lg:text-base text-white">
        {game.description}
      </p>
      <div className="flex flex-wrap mt-4">
        <a
          target="_blank"
          rel="noreferrer"
          href={game.socials.website}
          className="mr-6 text-white inline-block h-[1em] flex flex-row justify-center items-center align-[-0.125em]"
        >
          <span className="mr-1">
            <WorldUrlIcon size={16} />
          </span>
          Website
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={game.socials.twitter}
          className="mr-6 text-white inline-block h-[1em] flex flex-row justify-center items-center align-[-0.125em]"
        >
          <span className="mr-1">
            <TwitterIcon size={16} />
          </span>
          Twitter
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={game.socials.reddit}
          className="mr-6 text-white inline-block h-[1em] flex flex-row justify-center items-center align-[-0.125em]"
        >
          <span className="mr-1">
            <RedditIcon size={16} />
          </span>
          Reddit
        </a>
      </div>
    </div>
  );
}
