export default function SingleElimBracket({ lines, rounds }) {
  const lineStrokeColor = "#a5b4fc"; //#F0F0F0";
  const matchSeedBg = "#787a80";
  const matchBaseBg = "#58595e";
  const matchIdColor = "#FFF";
  const roundHeaderBgColor = "#3f3f46";

  return (
    <svg id="bracket" width="1253" height="656" viewBox="0 0 1253 656">
      <g className="parent">
        <g>
          {lines.map((line, index) => {
            return (
              <g
                id={`line-${index}`}
                key={index}
                transform={line.transform}
                className="bracket-line-container"
              >
                <path
                  d={line.path}
                  className="bracket-line"
                  stroke={lineStrokeColor}
                  strokeWidth=" 2px"
                  fill="none"
                />
              </g>
            );
          })}
        </g>

        <text
          className="third-place-match-label"
          x="854"
          y="548"
          textAnchor="middle"
          fill="#FFF"
        >
          3rd Place Match
        </text>
        <g>
          {rounds.map((round, index) => {
            return (
              <g
                key={index}
                transform={round.transform}
                className="match -pending "
                fill="#3f3f46"
              >
                <defs>
                  <clipPath id={`match-clippath-${index}`}>
                    <rect
                      x="26"
                      y="5"
                      width="200"
                      height="45"
                      rx="3"
                      ry="3"
                    ></rect>
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
                  className="match--wrapper-background"
                  fill="none"
                ></rect>
                <rect
                  x="26"
                  y="5"
                  width="200"
                  height="45"
                  rx="3"
                  ry="3"
                  fill={matchBaseBg}
                ></rect>

                <g clipPath="url(#match-clippath-1)">
                  <svg x="0" y="5" className="match--player">
                    <title>{round?.match[1]?.username}</title>
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
                      className="match--seed text-xs"
                      fill="#000"
                    >
                      {round?.match[1]?.seed}
                    </text>
                    <text
                      clipPath="url(#clipPath2437111)"
                      x="55"
                      y="15"
                      width="147"
                      height="12"
                      textAnchor="start"
                      className="match--player-name text-xs"
                      fill="#FFF"
                    >
                      {round?.match[1]?.username}
                    </text>
                  </svg>
                  <svg x="0" y="28" className="match--player">
                    <title>{round?.match[0]?.username}</title>
                    <defs>
                      <clipPath id="clipPath9207531">
                        <rect x="50" y="0" width="143" height="22"></rect>
                      </clipPath>
                      <clipPath id="portraitClipPath9207531">
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
                      className="match--seed text-xs"
                      fill="#000"
                    >
                      {round?.match[0]?.seed}
                    </text>
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
                      {round?.match[0]?.username}
                    </text>
                    <line
                      x1="26"
                      y1="-0.5"
                      x2="226"
                      y2="-0.5"
                      className="match--player-divider"
                    ></line>
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
                Semifinals
              </text>
            </g>
          </svg>
          <svg className="round" x="732">
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
                Finals
              </text>
            </g>
          </svg>
        </g>
      </g>
    </svg>
  );
}
