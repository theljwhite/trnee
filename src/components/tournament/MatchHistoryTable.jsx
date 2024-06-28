import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GameControllerIcon, MaximizeIcon, MinimizeIcon } from "../UI/Icons";

export default function MatchHistoryTable({ rounds }) {
  const [show, setShow] = useState(true);
  const [matchHistory, setMatchHistory] = useState([]);

  useEffect(() => {
    getCompletedMatches();
  }, []);

  const getCompletedMatches = async () => {
    const completedMatches = rounds
      .filter((round) => round.match.status === "completed")
      .sort((a, b) => b.match.matchNumber - a.match.matchNumber)
      .map((round) => ({
        ...round,
        winner: round.match.participants.find(
          (p) => p.id === round.match.winnerId
        ).username,
      }));

    setMatchHistory(completedMatches);
  };

  return (
    <>
      {matchHistory.length > 0 && (
        <div className="bg-zinc-800 text-zinc-300 w-[350px] rounded-tl-xl absolute bottom-0 right-0">
          <div className="p-4 mb-2">
            <div className="flex flex-row items-center justify-between">
              <time className="text-lg font-semibold text-white">
                Recent matches
              </time>
              <button
                onClick={() => setShow(!show)}
                className="text-zinc-400 hover:text-white cursor-pointer"
              >
                {show ? <MinimizeIcon size={16} /> : <MaximizeIcon size={16} />}
              </button>
            </div>
            <div
              className={`${
                show ? "max-h-96 opacity-100" : "max-h-px opacity-0"
              } transition-all duration-300 overflow-hidden`}
            >
              <ol className={`mt-3 divide-y divide-zinc-700`}>
                {matchHistory.slice(-5).map((item, index) => {
                  const winningScore =
                    item.match.participantOneScore >
                    item.match.participantTwoScore
                      ? item.match.participantOneScore
                      : item.match.participantTwoScore;

                  const losingScore =
                    item.match.participantOneScore <
                    item.match.participantTwoScore
                      ? item.match.participantOneScore
                      : item.match.participantTwoScore;

                  return (
                    <li key={index}>
                      <Link
                        to={`/trnee/${item.match.tournamentId}/${item.match.id}`}
                        className="items-center block p-3 sm:flex hover:bg-zinc-700"
                      >
                        <div>
                          <div className="text-sm font-normal text-zinc-400">
                            <span class="font-medium text-white">
                              {item.winner}
                            </span>{" "}
                            won Match #{item.match.matchNumber} with a score of{" "}
                            <span class="font-medium text-white">
                              {winningScore} - {losingScore}
                            </span>{" "}
                          </div>
                          <span className="inline-flex items-center text-xs font-normal text-gray-400">
                            <span className="w-2.5 h-2.5 me-1">
                              <GameControllerIcon size={12} />
                            </span>
                            See statistics
                          </span>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
