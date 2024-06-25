import { useState, useEffect } from "react";

//TODO - possibly refactor this as a position absolute table instead of svg element

export default function MatchHistory({ rounds }) {
  const [matchHistory, setMatchHistory] = useState([]);

  useEffect(() => {
    getCompletedMatches();
  }, []);

  const getCompletedMatches = async () => {
    const completedMatches = rounds
      .filter((round) => round.match.status === "completed")
      .sort((a, b) => b.match.matchNumber - a.match.matchNumber)
      .map((round, index) => ({
        ...round,
        y: (index + 1) * 25,
        winner: round.match.participants.find(
          (p) => p.id === round.match.winnerId
        ).username,
      }));

    setMatchHistory(completedMatches);
  };

  return (
    <g translate="translate(0,0)">
      <svg className="round" y={0} x={1000}>
        <g fill="#3f3f46">
          <rect width={300} height={25}></rect>
          <text
            fill="#FFF"
            x="122"
            y="17"
            width="243"
            height="15"
            textAnchor="middle"
            className="text-xs"
          >
            Match History
          </text>
        </g>
      </svg>
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
          <svg key={index} y={item.y} x={1000}>
            <g width={500} fill={index % 2 === 0 ? "#58595e" : "#3f3f46"}>
              <rect width={300} height={25} />
              <text
                fill="#FFF"
                x="122"
                y="17"
                width="243"
                height="15"
                textAnchor="middle"
                className="text-xs"
              >
                {item.winner} won Match #{item.match.matchNumber} with a score
                of {winningScore} - {losingScore}
              </text>
            </g>
          </svg>
        );
      })}
    </g>
  );
}
