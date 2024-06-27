import { useState, useEffect } from "react";

export default function MatchHistoryTable({ rounds }) {
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
        <div className="bg-zinc-700 text-zinc-300 w-[350px] absolute bottom-0 right-0">
          <div className="bg-zinc-800 w-full text-sm text-center h-8 font-semibold p-1">
            {" "}
            Match History
          </div>
          {matchHistory.map((item, index) => {
            const winningScore =
              item.match.participantOneScore > item.match.participantTwoScore
                ? item.match.participantOneScore
                : item.match.participantTwoScore;

            const losingScore =
              item.match.participantOneScore < item.match.participantTwoScore
                ? item.match.participantOneScore
                : item.match.participantTwoScore;
            return (
              <div
                className={`${
                  index % 2 === 0 ? "bg-zinc-700" : "bg-zinc-800"
                } w-full h-8 text-xs text-center flex items-center justify-center p-1`}
                key={index}
              >
                <span className="text-center">
                  {item.winner} won Match #{item.match.matchNumber} with a score
                  of {winningScore} - {losingScore}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
