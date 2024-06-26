import { createRoundNames } from "../../utils/bracketLogic";
import { TRANSLATE_COORD_REGEX } from "../../constants/regularExpressions";

export default function SingleElimBracket({ lines, rounds, openMatchModal }) {
  const lineStrokeColor = "#F0F0F0";
  const matchSeedBg = "#787a80";
  const matchBaseBg = "#58595e";
  const matchIdColor = "#FFF";
  const roundHeaderBgColor = "#3f3f46";

  const scoreLoserBgColor = "#787a80";
  const scoreWinnerBgColor = "#818cf8";
  const scoreNumberColor = "#23252d";

  const roundNamesWidth = 244;
  const roundNamesHeight = 25;

  const extraMatchTextOffset = 122;
  const extraMatchRoundTransform = rounds[rounds.length - 1].transform;
  const extraMatchRoundCoords = extraMatchRoundTransform.match(
    TRANSLATE_COORD_REGEX
  );
  const extraMatchTextX =
    Number(extraMatchRoundCoords[1]) + extraMatchTextOffset;
  const extraMatchTextY = extraMatchRoundCoords[2];

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

        {rounds.length % 2 === 0 && (
          <text
            x={extraMatchTextX}
            y={extraMatchTextY}
            textAnchor="middle"
            fill="#FFF"
          >
            3rd Place Match
          </text>
        )}

        <g>
          {rounds.map((round, index) => {
            const pOne = round?.match?.participants?.find(
              (p) => p?.id === round?.match?.participantOneId
            );
            const pTwo = round?.match?.participants?.find(
              (p) => p?.id === round?.match?.participantTwoId
            );

            const participantOne = pOne
              ? { ...pOne, score: Number(round?.match?.participantOneScore) }
              : null;
            const participantTwo = pTwo
              ? { ...pTwo, score: Number(round?.match?.participantTwoScore) }
              : null;

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
                  <svg x="0" y="5">
                    <title>{participantOne?.username}</title>

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

                    <text
                      x="38"
                      y="14"
                      width="10"
                      height="12"
                      textAnchor="middle"
                      className="text-[11px]"
                      fill="#000"
                    >
                      {participantOne?.seed}
                    </text>

                    <text
                      clipPath="url(#clipPath2437111)"
                      x="55"
                      y="15"
                      width="147"
                      height="12"
                      textAnchor="start"
                      className="text-xs [text-shadow:1px_1px_1px_#222]"
                      fill="#FFF"
                    >
                      {participantOne?.username}
                    </text>

                    {round.match && round.match.participantOneScore && (
                      <>
                        <path
                          fill={
                            participantOne?.score > participantTwo?.score
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
                          className="text-xs font-semibold"
                          fill={scoreNumberColor}
                        >
                          {participantOne?.score}
                        </text>
                      </>
                    )}
                  </svg>
                  <svg x="0" y="28">
                    <title>{participantTwo?.username}</title>

                    <path d="M 50 0 h 147 v 22 h -147 Z" />
                    <path d="M 26 0 h 24 v 22 h -24 Z" fill={matchSeedBg} />

                    <text
                      x="38"
                      y="14"
                      width="10"
                      height="12"
                      textAnchor="middle"
                      className="text-xs"
                      fill="#000"
                    >
                      {participantTwo?.seed}
                    </text>

                    <text
                      clipPath="url(#clipPath9207531)"
                      x="55"
                      y="15"
                      width="147"
                      height="12"
                      textAnchor="start"
                      className="text-xs [text-shadow:1px_1px_1px_#222]"
                      fill="#FFF"
                    >
                      {participantTwo?.username}
                    </text>

                    {round.match && round.match.participantTwoScore && (
                      <>
                        <path
                          fill={
                            participantTwo?.score > participantOne?.score
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
                          className="text-xs font-semibold"
                          fill={scoreNumberColor}
                        >
                          {participantTwo?.score}
                        </text>
                      </>
                    )}

                    <line x1="26" y1="-0.5" x2="226" y2="-0.5" />
                  </svg>
                </g>
              </g>
            );
          })}
        </g>
        <g className="rounds" transform="translate(0,0)">
          {createRoundNames(rounds.length, roundNamesWidth).map(
            (item, index) => {
              return (
                <svg key={index} className="round" x={item.x}>
                  <g fill={roundHeaderBgColor}>
                    <rect width="243" height={roundNamesHeight}></rect>
                    <text
                      fill="#FFF"
                      x="122"
                      y="17"
                      width="243"
                      height="15"
                      textAnchor="middle"
                      className="text-xs"
                    >
                      {item.name}
                    </text>
                  </g>
                </svg>
              );
            }
          )}
        </g>
      </g>
    </svg>
  );
}
