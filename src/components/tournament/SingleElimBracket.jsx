export default function SingleElimBracket({ lines, rounds, openMatchModal }) {
  const lineStrokeColor = "#F0F0F0"; //#F0F0F0";
  const matchSeedBg = "#787a80";
  const matchBaseBg = "#58595e";
  const matchIdColor = "#FFF";
  const roundHeaderBgColor = "#3f3f46";

  const scoreLoserBgColor = "#787a80";
  const scoreWinnerBgColor = "#818cf8";

  return (
    <svg id="bracket" width="1253" height="656" viewBox="0 0 1253 656">
      <g className="parent">
        <g>
          {lines.map((line, index) => {
            return (
              <g id={`line-${index}`} key={index} transform={line.transform}>
                <path
                  d={line.path}
                  stroke={lineStrokeColor}
                  strokeWidth=" 2px"
                  fill="none"
                />
              </g>
            );
          })}
        </g>

        <text x="854" y="548" textAnchor="middle" fill="#FFF">
          3rd Place Match
        </text>
        <g>
          {rounds.map((round, index) => {
            const showParticipantOne =
              round.match &&
              round.match.participants &&
              round.match.participants[0];

            const showParticipantTwo =
              round.match &&
              round.match.participants &&
              round.match.participants[1];

            return (
              <g
                key={index}
                onClick={() => openMatchModal(round)}
                transform={round.transform}
                className="cursor-pointer"
                fill="#3f3f46"
              >
                <defs>
                  <clipPath id={`match-clippath-${index}`}>
                    <rect x="26" y="5" width="200" height="45" rx="3" ry="3" />
                  </clipPath>
                </defs>
                <text
                  x="11"
                  y="31"
                  width="24"
                  height="10"
                  textAnchor="middle"
                  className="text-xs"
                  fill={matchIdColor}
                >
                  {index + 1}
                </text>
                <rect
                  x="24"
                  y="3"
                  width="204"
                  height="49"
                  rx="3"
                  ry="3"
                  fill="none"
                />
                <rect
                  x="26"
                  y="5"
                  width="200"
                  height="45"
                  rx="3"
                  ry="3"
                  fill={matchBaseBg}
                />

                <g clipPath="url(#match-clippath-1)">
                  <svg x="0" y="5" className="match--player">
                    {showParticipantOne && (
                      <title>{round.match.participants[0].username}</title>
                    )}
                    <defs>
                      <clipPath id="clipPath2437111">
                        <rect x="50" y="0" width="143" height="22"></rect>
                      </clipPath>
                      <clipPath id="portraitClipPath2437111">
                        <path></path>
                      </clipPath>
                    </defs>
                    <path d="M 50 0 h 147 v 22 h -147 Z" />
                    <path d="M 26 0 h 24 v 22 h -24 Z" fill={matchSeedBg} />

                    {showParticipantOne && (
                      <text
                        x="38"
                        y="14"
                        width="10"
                        height="12"
                        textAnchor="middle"
                        className="text-xs"
                        fill="#000"
                      >
                        {round.match.participants[0].seed}
                      </text>
                    )}
                    {showParticipantOne && (
                      <text
                        clipPath="url(#clipPath2437111)"
                        x="55"
                        y="15"
                        width="147"
                        height="12"
                        textAnchor="start"
                        className="text-xs"
                        fill="#FFF"
                      >
                        {round.match.participants[0].username}
                      </text>
                    )}
                    {round.match && round.match.participantOneScore && (
                      <>
                        <path
                          fill={
                            round.match.participantOneScore >
                            round.match.participantTwoScore
                              ? scoreWinnerBgColor
                              : scoreLoserBgColor
                          }
                          d="M 197 0 h 29 v 22 h -29 Z"
                        />
                        <text
                          x="211"
                          y="15"
                          width="21"
                          height="12"
                          textAnchor="middle"
                          className="text-xs font-bold"
                        >
                          {round.match.participantOneScore}
                        </text>
                      </>
                    )}
                  </svg>
                  <svg x="0" y="28">
                    {showParticipantOne && (
                      <title>{round.match.participants[0].username}</title>
                    )}

                    <path d="M 50 0 h 147 v 22 h -147 Z" />
                    <path d="M 26 0 h 24 v 22 h -24 Z" fill={matchSeedBg} />

                    {showParticipantTwo && (
                      <text
                        x="38"
                        y="14"
                        width="10"
                        height="12"
                        textAnchor="middle"
                        className="match--seed text-xs"
                        fill="#000"
                      >
                        {round.match.participants[1].seed}
                      </text>
                    )}

                    {showParticipantTwo && (
                      <text
                        clipPath="url(#clipPath9207531)"
                        x="55"
                        y="15"
                        width="147"
                        height="12"
                        textAnchor="start"
                        className="match--player-name text-xs"
                        fill="#FFF"
                      >
                        {round.match.participants[1].username}
                      </text>
                    )}

                    {round.match && round.match.participantTwoScore && (
                      <>
                        <path
                          fill={
                            round.match.participantTwoScore >
                            round.match.participantOneScore
                              ? scoreWinnerBgColor
                              : scoreLoserBgColor
                          }
                          d="M 197 0 h 29 v 22 h -29 Z"
                        />
                        <text
                          x="211"
                          y="15"
                          width="21"
                          height="12"
                          textAnchor="middle"
                          className="text-xs font-bold"
                        >
                          {round.match.participantTwoScore}
                        </text>
                      </>
                    )}

                    <line
                      x1="26"
                      y1="-0.5"
                      x2="226"
                      y2="-0.5"
                      className="match--player-divider"
                    />
                  </svg>
                </g>
              </g>
            );
          })}
        </g>
        <g className="rounds" transform="translate(0,0)">
          <svg className="round" x="0">
            <g fill={roundHeaderBgColor} className="round-label">
              <rect width="243" height="25"></rect>
              <text
                fill="#FFF"
                x="122"
                y="17"
                width="243"
                height="15"
                textAnchor="middle"
                className="text-xs"
              >
                Round 1
              </text>
            </g>
          </svg>
          <svg className="round" x="244">
            <g fill={roundHeaderBgColor} className="round-label">
              <rect width="243" height="25"></rect>
              <text
                fill="#FFF"
                className="text-xs"
                x="122"
                y="17"
                width="243"
                height="15"
                textAnchor="middle"
              >
                Round 2
              </text>
            </g>
          </svg>
          <svg className="round" x="488">
            <g fill={roundHeaderBgColor}>
              <rect width="243" height="25"></rect>
              <text
                fill="#FFF"
                className="text-xs"
                x="122"
                y="17"
                width="243"
                height="15"
                textAnchor="middle"
              >
                Semifinals
              </text>
            </g>
          </svg>
          <svg className="round" x="732">
            <g fill={roundHeaderBgColor}>
              <rect width="243" height="25"></rect>
              <text
                fill="#FFF"
                x="122"
                y="17"
                width="243"
                height="15"
                textAnchor="middle"
                className="text-xs"
              >
                Finals
              </text>
            </g>
          </svg>
        </g>
      </g>
    </svg>
  );
}
