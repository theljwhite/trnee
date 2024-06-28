export const TourneyBracketIconOne = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    fill="none"
    stroke={color ?? "currentColor"}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0h24v24H0z" fill="none" stroke="none" />
    <path d="M5 4h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4" />
    <path d="M5 14h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4" />
    <path d="M10 7h4a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-4" />
    <line x1="15" x2="20" y1="12" y2="12" />
  </svg>
);

export const TrophyStarIcon = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    fill={color ?? "currentColor"}
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Trophy">
      <path d="M48.0632,55.4387H15.8288a3.03,3.03,0,0,0-3.03,3.03v3.0323a.9121.9121,0,0,0,.9121.9124h36.47a.9124.9124,0,0,0,.9124-.9124V58.4691A3.03,3.03,0,0,0,48.0632,55.4387Z" />
      <path d="M55.6941,6.1826H50.64V4.5367A1.9506,1.9506,0,0,0,48.69,2.5861H15.5432a1.9506,1.9506,0,0,0-1.9507,1.9506V6.1826H8.3064a4.5171,4.5171,0,0,0-4.5117,4.5117v2.9228a13.4035,13.4035,0,0,0,6.5009,11.6592,13.212,13.212,0,0,0,5.708,1.7373q.0645.0043.129.0044a1.7133,1.7133,0,0,0,.2121-.02,18.592,18.592,0,0,0,8.12,7.1725,7.1072,7.1072,0,0,1,4.0617,6.5071v3.3494A2.2628,2.2628,0,0,1,26.2639,46.29H21.5862a2.7452,2.7452,0,0,0-2.7451,2.7452v3.7528H45.3918V49.0347A2.7452,2.7452,0,0,0,42.6465,46.29H37.9687a2.263,2.263,0,0,1-2.2629-2.2629V40.6772a7.1071,7.1071,0,0,1,4.062-6.5071,18.5922,18.5922,0,0,0,8.1082-7.1523c.04,0,.0805-.0015.1208-.0042a13.2033,13.2033,0,0,0,5.707-1.7373,13.4039,13.4039,0,0,0,6.502-11.6592V10.6943A4.5171,4.5171,0,0,0,55.6941,6.1826ZM12.0486,22.2465a9.896,9.896,0,0,1-4.7539-8.6294V10.6943A1.0128,1.0128,0,0,1,8.3064,9.6826h5.2861v7.62a18.4666,18.4666,0,0,0,.9871,5.9428A9.5264,9.5264,0,0,1,12.0486,22.2465ZM39.1211,18.18l-2.13,1.5474a1.429,1.429,0,0,0-.519,1.5979l.8132,2.5034a1.4293,1.4293,0,0,1-2.1994,1.5981l-2.13-1.5472a1.4293,1.4293,0,0,0-1.68,0l-2.13,1.5472a1.4293,1.4293,0,0,1-2.1994-1.5981l.8134-2.5034a1.4293,1.4293,0,0,0-.5193-1.5979L25.112,18.18a1.4293,1.4293,0,0,1,.84-2.5857h2.6321a1.4293,1.4293,0,0,0,1.3594-.9875l.8135-2.5034a1.4293,1.4293,0,0,1,2.7187,0l.8135,2.5034a1.43,1.43,0,0,0,1.3594.9875H38.281A1.4294,1.4294,0,0,1,39.1211,18.18Zm17.5847-4.563a9.8973,9.8973,0,0,1-4.7549,8.63,9.5091,9.5091,0,0,1-2.2764.9368,18.4662,18.4662,0,0,0,.9659-5.8815v-7.62h5.0537a1.0128,1.0128,0,0,1,1.0117,1.0117Z" />
    </g>
  </svg>
);

export const SearchIcon = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="magnifying-glass"
    className="svg-inline--fa fa-magnifying-glass "
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill={color ?? "currentColor"}
      d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
    ></path>
  </svg>
);

export const GameControllerIcon = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    id="Layer_1"
    enableBackground="new 0 0 512 512"
    version="1.1"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fill={color ?? "currentColor"}
      d="M377.8,100.1C332.9,86.8,318.8,112,256,112s-76.9-25.3-121.8-11.9c-44.9,13.3-67.3,60.4-88.5,148.8  c-21.2,88.5-17.3,152.4,7.7,164.3c25,11.9,53.2-15.4,80.1-49.1C155.3,337.7,166.2,336,256,336c89.7,0,99,0.7,122.5,28.1  c26.9,33.7,55.1,61,80.1,49.1c25-11.9,28.9-75.8,7.7-164.3C445.1,160.5,422.6,113.5,377.8,100.1z M128.2,263.7  c-21.7,0-39.3-17.7-39.3-39.6c0-21.8,17.6-39.6,39.3-39.6c21.7,0,39.3,17.8,39.3,39.6S149.9,263.7,128.2,263.7z M309.7,243.6  c-10.6,0-19.3-8.7-19.3-19.4c0-10.7,8.7-19.4,19.3-19.4c10.7,0,19.4,8.7,19.4,19.4C329,234.9,320.4,243.6,309.7,243.6z M351.9,286  c-10.6,0-19.3-8.7-19.3-19.4c0-10.8,8.7-19.4,19.3-19.4c10.7,0,19.4,8.7,19.4,19.4C371.3,277.4,362.6,286,351.9,286z M351.9,201.1  c-10.6,0-19.3-8.7-19.3-19.4c0-10.7,8.7-19.4,19.3-19.4c10.7,0,19.4,8.7,19.4,19.4C371.3,192.4,362.6,201.1,351.9,201.1z   M394.2,243.6c-10.7,0-19.3-8.7-19.3-19.4c0-10.7,8.7-19.4,19.3-19.4c10.6,0,19.3,8.7,19.3,19.4  C413.5,234.9,404.9,243.6,394.2,243.6z"
    />
  </svg>
);

export const FolderPerson = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    version="1.1"
    viewBox="0 0 20 16"
    xmlns="http://www.w3.org/2000/svg"
    xmlnssketch="http://www.bohemiancoding.com/sketch/ns"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <title />
    <desc />
    <defs />
    <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
      <g
        fill={color ?? "currentColor"}
        id="Core"
        transform="translate(-128.000000, -256.000000)"
      >
        <g id="folder-shared" transform="translate(128.000000, 256.000000)">
          <path
            d="M18,2 L10,2 L8,0 L2,0 C0.9,0 0,0.9 0,2 L0,14 C0,15.1 0.9,16 2,16 L18,16 C19.1,16 20,15.1 20,14 L20,4 C20,2.9 19.1,2 18,2 L18,2 Z M13,5 C14.1,5 15,5.9 15,7 C15,8.1 14.1,9 13,9 C11.9,9 11,8.1 11,7 C11,5.9 11.9,5 13,5 L13,5 Z M17,13 L9,13 L9,12 C9,10.7 11.7,10 13,10 C14.3,10 17,10.7 17,12 L17,13 L17,13 Z"
            id="Shape"
          />
        </g>
      </g>
    </g>
  </svg>
);

export const TwoGearsIcon = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    fill={color ?? "currentColor"}
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Processing">
      <path d="M31.1057,37.8494a3.5971,3.5971,0,0,1,.425-4.5713L33.4192,31.39a3.5948,3.5948,0,0,1,4.5713-.4246l1.935,1.3236a1.7286,1.7286,0,0,1,.0908-.2869c.2579-.54,1.4732-3.2485,1.6856-3.595A3.5882,3.5882,0,0,1,44.76,26.6924h2.67a3.5744,3.5744,0,0,1,.575.051,2.01,2.01,0,0,0,.0383-.3812V22.6611a2.0179,2.0179,0,0,0-1.6455-1.9824l-4.2891-.8047A1.832,1.832,0,0,1,40.7107,18.7a17.64,17.64,0,0,0-.6944-1.6788,1.8368,1.8368,0,0,1,.1612-1.8173l2.4619-3.6a2.02,2.02,0,0,0-.2383-2.5654L39.7839,6.4218a2.0186,2.0186,0,0,0-2.5654-.2388l-3.6,2.4629a1.8329,1.8329,0,0,1-1.8174.16,17.4516,17.4516,0,0,0-1.68-.6934A1.8356,1.8356,0,0,1,28.948,6.7128l-.8047-4.2881A2.0154,2.0154,0,0,0,26.1619.7792H22.4607a2.0181,2.0181,0,0,0-1.9824,1.6451l-.8047,4.2885A1.8357,1.8357,0,0,1,18.5,8.1122a17.279,17.279,0,0,0-1.6787.6934,1.837,1.837,0,0,1-1.8183-.16l-3.6-2.4629a2.02,2.02,0,0,0-2.5655.2388L6.2214,9.0385a2.02,2.02,0,0,0-.2392,2.5654l2.4629,3.6a1.8352,1.8352,0,0,1,.16,1.8178,17.3743,17.3743,0,0,0-.6943,1.6792A1.8327,1.8327,0,0,1,6.5124,19.874l-4.288.8047A2.0176,2.0176,0,0,0,.5788,22.6611v3.7011a2.0177,2.0177,0,0,0,1.6456,1.9825l4.2871.8042a1.8332,1.8332,0,0,1,1.3994,1.1748,17.4507,17.4507,0,0,0,.6943,1.6782,1.8355,1.8355,0,0,1-.16,1.8179l-2.4629,3.6a2.0179,2.0179,0,0,0,.2392,2.5649l2.6162,2.6172a2.0182,2.0182,0,0,0,2.5655.2383l3.6-2.4624a1.8408,1.8408,0,0,1,1.8183-.16,17.1578,17.1578,0,0,0,1.6787.6939,1.8357,1.8357,0,0,1,1.1739,1.3994l.8047,4.2886a2.0181,2.0181,0,0,0,1.9824,1.645h3.7012a2.0011,2.0011,0,0,0,.7712-.159,3.5647,3.5647,0,0,1-.1-.7956v-2.67a3.5969,3.5969,0,0,1,1.6492-3.0227A31.9678,31.9678,0,0,1,32.6177,40.06Zm-6.7947-5.73a7.6078,7.6078,0,1,1,7.6077-7.6076A7.6078,7.6078,0,0,1,24.311,32.1193Z" />
      <path d="M61.9643,43.5434l-3.0942-.58a1.6825,1.6825,0,0,1-1.2832-1.0815,12.0418,12.0418,0,0,0-.4858-1.1764,1.6826,1.6826,0,0,1,.1433-1.67l1.7768-2.5973a1.0946,1.0946,0,0,0-.1294-1.3919l-1.8882-1.8881a1.0943,1.0943,0,0,0-1.3918-.1294l-2.5974,1.7766a1.6819,1.6819,0,0,1-1.67.1433,12.16,12.16,0,0,0-1.1763-.4857,1.6821,1.6821,0,0,1-1.0815-1.2833l-.5806-3.0943a1.0948,1.0948,0,0,0-1.0757-.8928H44.76a1.0948,1.0948,0,0,0-1.0757.8928l-.5806,3.0943a1.6819,1.6819,0,0,1-1.0813,1.2832,12.2,12.2,0,0,0-1.1765.4858,1.682,1.682,0,0,1-1.67-.1433l-2.5972-1.7766a1.0946,1.0946,0,0,0-1.392.1294L33.2986,35.046a1.0946,1.0946,0,0,0-.1294,1.3919l1.7768,2.5972a1.6824,1.6824,0,0,1,.1433,1.67,12.0623,12.0623,0,0,0-.4858,1.1764A1.6825,1.6825,0,0,1,33.32,42.963l-3.0942.58a1.0949,1.0949,0,0,0-.8929,1.0759v2.67a1.0946,1.0946,0,0,0,.8929,1.0758l3.0942.58a1.6825,1.6825,0,0,1,1.2832,1.0816,12.05,12.05,0,0,0,.4858,1.1763,1.6821,1.6821,0,0,1-.1433,1.67l-1.7768,2.5973a1.0946,1.0946,0,0,0,.1294,1.3919l1.8882,1.8882a1.0945,1.0945,0,0,0,1.392.1294l2.5972-1.7766a1.682,1.682,0,0,1,1.67-.1434,12.15,12.15,0,0,0,1.1765.4858,1.6822,1.6822,0,0,1,1.0813,1.2833l.5806,3.0942a1.0945,1.0945,0,0,0,1.0757.8927h2.67a1.0945,1.0945,0,0,0,1.0757-.8926l.5806-3.0944a1.6822,1.6822,0,0,1,1.0813-1.2832,12.1184,12.1184,0,0,0,1.1765-.4858,1.682,1.682,0,0,1,1.67.1434L55.6116,58.88a1.0947,1.0947,0,0,0,1.392-.1294l1.8882-1.8882a1.0944,1.0944,0,0,0,.1294-1.3918l-1.7768-2.5974a1.6821,1.6821,0,0,1-.1431-1.67,12.0988,12.0988,0,0,0,.4856-1.1763A1.6825,1.6825,0,0,1,58.87,48.9457l3.0942-.58a1.0944,1.0944,0,0,0,.8929-1.0758v-2.67A1.0946,1.0946,0,0,0,61.9643,43.5434ZM46.0952,52.1669a6.2125,6.2125,0,1,1,6.2126-6.2126A6.2126,6.2126,0,0,1,46.0952,52.1669Z" />
    </g>
  </svg>
);

export const WorldUrlIcon = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="globe"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill={color ?? "currentColor"}
      d="M352 256C352 278.2 350.8 299.6 348.7 320H163.3C161.2 299.6 159.1 278.2 159.1 256C159.1 233.8 161.2 212.4 163.3 192H348.7C350.8 212.4 352 233.8 352 256zM503.9 192C509.2 212.5 512 233.9 512 256C512 278.1 509.2 299.5 503.9 320H380.8C382.9 299.4 384 277.1 384 256C384 234 382.9 212.6 380.8 192H503.9zM493.4 160H376.7C366.7 96.14 346.9 42.62 321.4 8.442C399.8 29.09 463.4 85.94 493.4 160zM344.3 160H167.7C173.8 123.6 183.2 91.38 194.7 65.35C205.2 41.74 216.9 24.61 228.2 13.81C239.4 3.178 248.7 0 256 0C263.3 0 272.6 3.178 283.8 13.81C295.1 24.61 306.8 41.74 317.3 65.35C328.8 91.38 338.2 123.6 344.3 160H344.3zM18.61 160C48.59 85.94 112.2 29.09 190.6 8.442C165.1 42.62 145.3 96.14 135.3 160H18.61zM131.2 192C129.1 212.6 127.1 234 127.1 256C127.1 277.1 129.1 299.4 131.2 320H8.065C2.8 299.5 0 278.1 0 256C0 233.9 2.8 212.5 8.065 192H131.2zM194.7 446.6C183.2 420.6 173.8 388.4 167.7 352H344.3C338.2 388.4 328.8 420.6 317.3 446.6C306.8 470.3 295.1 487.4 283.8 498.2C272.6 508.8 263.3 512 255.1 512C248.7 512 239.4 508.8 228.2 498.2C216.9 487.4 205.2 470.3 194.7 446.6H194.7zM190.6 503.6C112.2 482.9 48.59 426.1 18.61 352H135.3C145.3 415.9 165.1 469.4 190.6 503.6V503.6zM321.4 503.6C346.9 469.4 366.7 415.9 376.7 352H493.4C463.4 426.1 399.8 482.9 321.4 503.6V503.6z"
    ></path>
  </svg>
);

export const TwitterIcon = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    aria-hidden="true"
    focusable="false"
    data-prefix="fab"
    data-icon="twitter"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill={color ?? "currentColor"}
      d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"
    ></path>
  </svg>
);

export const RedditIcon = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    aria-hidden="true"
    focusable="false"
    data-prefix="fab"
    data-icon="reddit"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill={color ?? "currentColor"}
      d="M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z"
    ></path>
  </svg>
);

export const UserIcon = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6C17 8.76142 14.7614 11 12 11C9.23858 11 7 8.76142 7 6ZM12 3C10.3431 3 9 4.34315 9 6C9 7.65685 10.3431 9 12 9C13.6569 9 15 7.65685 15 6C15 4.34315 13.6569 3 12 3Z"
      fill={color ?? "currentColor"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 22C2 16.4772 6.47715 12 12 12C17.5228 12 22 16.4772 22 22V23H2V22ZM4.06189 21H19.9381C19.446 17.0537 16.0796 14 12 14C7.92038 14 4.55399 17.0537 4.06189 21Z"
      fill={color ?? "currentColor"}
    />
  </svg>
);

export const UsersIcon = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    fill={color ?? "currentColor"}
    enableBackground="new 0 0 24 24"
    id="Layer_1"
    version="1.0"
    viewBox="0 0 24 24"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g>
      <path d="M9,9c0-1.7,1.3-3,3-3s3,1.3,3,3c0,1.7-1.3,3-3,3S9,10.7,9,9z M12,14c-4.6,0-6,3.3-6,3.3V19h12v-1.7C18,17.3,16.6,14,12,14z   " />
    </g>
    <g>
      <g>
        <circle cx="18.5" cy="8.5" r="2.5" />
      </g>
      <g>
        <path d="M18.5,13c-1.2,0-2.1,0.3-2.8,0.8c2.3,1.1,3.2,3,3.2,3.2l0,0.1H23v-1.3C23,15.7,21.9,13,18.5,13z" />
      </g>
    </g>
    <g>
      <g>
        <circle cx="18.5" cy="8.5" r="2.5" />
      </g>
      <g>
        <path d="M18.5,13c-1.2,0-2.1,0.3-2.8,0.8c2.3,1.1,3.2,3,3.2,3.2l0,0.1H23v-1.3C23,15.7,21.9,13,18.5,13z" />
      </g>
    </g>
    <g>
      <g>
        <circle cx="5.5" cy="8.5" r="2.5" />
      </g>
      <g>
        <path d="M5.5,13c1.2,0,2.1,0.3,2.8,0.8c-2.3,1.1-3.2,3-3.2,3.2l0,0.1H1v-1.3C1,15.7,2.1,13,5.5,13z" />
      </g>
    </g>
  </svg>
);

export const StatusIconOne = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      d="M5.05025 3.63579C5.44078 4.02631 5.44078 4.65948 5.05025 5.05C2.31658 7.78367 2.31658 12.2158 5.05025 14.9495C5.44078 15.34 5.44078 15.9732 5.05025 16.3637C4.65973 16.7542 4.02656 16.7542 3.63604 16.3637C0.12132 12.849 0.12132 7.15051 3.63604 3.63579C4.02656 3.24526 4.65973 3.24526 5.05025 3.63579ZM14.9498 3.63602C15.3403 3.2455 15.9735 3.2455 16.364 3.63602C19.8787 7.15074 19.8787 12.8492 16.364 16.3639C15.9735 16.7545 15.3403 16.7545 14.9498 16.3639C14.5592 15.9734 14.5592 15.3403 14.9498 14.9497C17.6834 12.2161 17.6834 7.78391 14.9498 5.05023C14.5592 4.65971 14.5592 4.02655 14.9498 3.63602ZM7.87869 6.46422C8.26921 6.85474 8.26921 7.48791 7.87869 7.87843C6.70711 9.05 6.70711 10.9495 7.87869 12.1211C8.26921 12.5116 8.26921 13.1448 7.87868 13.5353C7.48816 13.9258 6.855 13.9258 6.46447 13.5353C4.51185 11.5827 4.51185 8.41684 6.46447 6.46422C6.855 6.07369 7.48816 6.07369 7.87869 6.46422ZM12.1213 6.46445C12.5119 6.07392 13.145 6.07392 13.5355 6.46445C15.4882 8.41707 15.4882 11.5829 13.5355 13.5355C13.145 13.926 12.5119 13.926 12.1213 13.5355C11.7308 13.145 11.7308 12.5118 12.1213 12.1213C13.2929 10.9497 13.2929 9.05023 12.1213 7.87866C11.7308 7.48814 11.7308 6.85497 12.1213 6.46445ZM10 8.99998C10.5523 8.99998 11 9.4477 11 9.99998V10.01C11 10.5623 10.5523 11.01 10 11.01C9.44772 11.01 9 10.5623 9 10.01V9.99998C9 9.4477 9.44772 8.99998 10 8.99998Z"
      fill={color ?? "currentColor"}
      fillRule="evenodd"
    />
  </svg>
);

export const LabelIcon = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    fill={color ?? "currentColor"}
    viewBox="0 0 448 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 60c0-15.46 12.54-28 28-28h186.8c12.76 0 30.58 7.381 39.6 16.4l177.2 177.2c21.87 21.87 21.87 57.33-.0008 79.2l-158.8 158.8c-21.87 21.87-57.33 21.87-79.19-.0017l-177.2-177.2C7.381 277.4 0 259.6 0 246.8V60zM80 144c0 17.68 14.33 32 32 32s32-14.32 32-32s-14.33-32-32-32S80 126.3 80 144z" />
  </svg>
);

export const DescriptionIcon = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    fill={color ?? "currentColor"}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0h48v48h-48z" fill="none" />
    <path d="M28 4h-16c-2.21 0-3.98 1.79-3.98 4l-.02 32c0 2.21 1.77 4 3.98 4h24.02c2.21 0 4-1.79 4-4v-24l-12-12zm4 32h-16v-4h16v4zm0-8h-16v-4h16v4zm-6-10v-11l11 11h-11z" />
  </svg>
);

export const DateIcon = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    enableBackground="new 0 0 500 500"
    id="Layer_1"
    version="1.1"
    viewBox="0 0 500 500"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      clipRule="evenodd"
      d="M31.949,431.711c0,20.078,16.264,36.34,36.34,36.34h363.421  c20.078,0,36.34-16.262,36.34-36.34V113.718c0-20.079-16.262-36.343-36.34-36.343h-36.345V54.662  c0-12.536-10.176-22.713-22.711-22.713c-12.537,0-22.717,10.177-22.717,22.713v22.713h-36.34V54.662  c0-12.536-10.179-22.713-22.715-22.713s-22.712,10.177-22.712,22.713v22.713H231.83V54.662c0-12.536-10.177-22.713-22.713-22.713  c-12.539,0-22.716,10.177-22.716,22.713v22.713h-36.34V54.662c0-12.536-10.177-22.713-22.715-22.713  c-12.536,0-22.713,10.177-22.713,22.713v22.713H68.29c-20.077,0-36.34,16.264-36.34,36.343V431.711z M97.367,122.802h7.266v31.799  c0,12.538,10.177,22.715,22.713,22.715c12.539,0,22.715-10.177,22.715-22.715v-31.799h36.34v31.799  c0,12.538,10.177,22.715,22.716,22.715c12.536,0,22.713-10.177,22.713-22.715v-31.799h36.342v31.799  c0,12.538,10.176,22.715,22.712,22.715s22.715-10.177,22.715-22.715v-31.799h36.34v31.799c0,12.538,10.18,22.715,22.717,22.715  c12.535,0,22.711-10.177,22.711-22.715v-31.799h7.268c11.084,0,19.99,8.909,19.99,19.991v96.302c0,11.082-8.906,19.991-19.99,19.991  H97.367c-11.086,0-19.991-8.909-19.991-19.991v-96.302C77.375,131.711,86.28,122.802,97.367,122.802z"
      fill={color}
      fillRule="evenodd"
    />
  </svg>
);

export const SubmitIcon = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    fill={color ?? "currentColor"}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    version="1.1"
    id="Layer_1"
    viewBox="0 0 48 48"
    enableBackground="new 0 0 48 48"
    xmlSpace="preserve"
  >
    <path d="M35,2H17c-0.2651367,0-0.5195313,0.1054688-0.7070313,0.2929688l-8,8C8.1054688,10.4804688,8,10.734375,8,11v30  c0,2.7568359,2.2431641,5,5,5h22c2.7568359,0,5-2.2431641,5-5V7C40,4.2431641,37.7568359,2,35,2z M38,41  c0,1.6542969-1.3457031,3-3,3H13c-1.6542969,0-3-1.3457031-3-3V11.4140625L17.4140625,4H35c1.6542969,0,3,1.3457031,3,3V41z M17,14  h-5c-0.5522461,0-1-0.4472656-1-1s0.4477539-1,1-1h5c0.5512695,0,1-0.4482422,1-1V6c0-0.5527344,0.4477539-1,1-1s1,0.4472656,1,1v5  C20,12.6542969,18.6542969,14,17,14z M24,17c-4.9624023,0-9,4.0371094-9,9s4.0375977,9,9,9s9-4.0371094,9-9S28.9624023,17,24,17z   M24,33c-3.8598633,0-7-3.140625-7-7s3.1401367-7,7-7s7,3.140625,7,7S27.8598633,33,24,33z M27.7070313,24.2929688  c0.390625,0.390625,0.390625,1.0234375,0,1.4140625C27.5117188,25.9023438,27.2558594,26,27,26  s-0.5117188-0.0976563-0.7070313-0.2929688L25,24.4140625V30c0,0.5527344-0.4477539,1-1,1s-1-0.4472656-1-1v-5.5859375  l-1.2929688,1.2929688c-0.390625,0.390625-1.0234375,0.390625-1.4140625,0s-0.390625-1.0234375,0-1.4140625l3-3  c0.390625-0.390625,1.0234375-0.390625,1.4140625,0L27.7070313,24.2929688z" />
  </svg>
);

export const AddIconCircle = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    fill={color ?? "currentColor"}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs></defs>
    <title />
    <g data-name="Layer 2" id="Layer_2">
      <path d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z" />
      <path d="M16,23a1,1,0,0,1-1-1V10a1,1,0,0,1,2,0V22A1,1,0,0,1,16,23Z" />
      <path d="M22,17H10a1,1,0,0,1,0-2H22a1,1,0,0,1,0,2Z" />
    </g>
    <g id="frame">
      <rect fill="none" height="32" width="32" />
    </g>
  </svg>
);

export const AddIconPlus = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="plus"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path
      fill={color ?? "currentColor"}
      d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"
    ></path>
  </svg>
);

export const ErrorCircle = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    version="1.1"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    xmlnssketch="http://www.bohemiancoding.com/sketch/ns"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <title />
    <desc />
    <defs />
    <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
      <g
        fill={color ?? "currentColor"}
        id="Core"
        transform="translate(-2.000000, -212.000000)"
      >
        <g id="error" transform="translate(2.000000, 212.000000)">
          <path
            d="M10,0 C4.5,0 0,4.5 0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 C20,4.5 15.5,0 10,0 L10,0 Z M11,15 L9,15 L9,13 L11,13 L11,15 L11,15 Z M11,11 L9,11 L9,5 L11,5 L11,11 L11,11 Z"
            id="Shape"
          />
        </g>
      </g>
    </g>
  </svg>
);

export const SuccessCircleOne = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    enableBackground="new 0 0 512 512"
    id="Layer_1"
    version="1.1"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      d="M256,6.998c-137.533,0-249,111.467-249,249c0,137.534,111.467,249,249,249s249-111.467,249-249  C505,118.464,393.533,6.998,256,6.998z M256,485.078c-126.309,0-229.08-102.771-229.08-229.081  c0-126.31,102.771-229.08,229.08-229.08c126.31,0,229.08,102.771,229.08,229.08C485.08,382.307,382.31,485.078,256,485.078z"
      fill={color ?? "currentColor "}
    />
    <polygon
      fill={color ?? "currentColor"}
      points="384.235,158.192 216.919,325.518 127.862,236.481 113.72,250.624 216.919,353.803 398.28,172.334   "
    />
  </svg>
);

export const ClipboardOne = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    fill={color}
    stroke="#3f3f46"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect height="4" rx="1" ry="1" width="8" x="8" y="2" />
  </svg>
);

export const EyeTransform = ({ color, size, line }) => (
  <svg
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    {!line && <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />}
    {line && (
      <line
        x1="10%"
        y1="10%"
        x2="90%"
        y2="90%"
        stroke={color}
        strokeWidth={2}
      />
    )}
    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
  </svg>
);

export const ShieldIconOne = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    id="Icons"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs></defs>
    <path
      fill={color}
      d="M22.814,9.216l-.826-5.368A1,1,0,0,0,21,3C15.533,3,12.731.316,12.707.293a1,1,0,0,0-1.41,0C11.269.316,8.467,3,3,3a1,1,0,0,0-.988.848L1.186,9.216A12.033,12.033,0,0,0,7.3,21.576l4.22,2.3a1,1,0,0,0,.958,0l4.22-2.3A12.033,12.033,0,0,0,22.814,9.216Zm-7.072,10.6L12,21.861,8.258,19.82a10.029,10.029,0,0,1-5.1-10.3l.7-4.541A14.717,14.717,0,0,0,12,2.3,14.717,14.717,0,0,0,20.139,4.98l.7,4.54A10.029,10.029,0,0,1,15.742,19.82Z"
    />
    <path
      fill={color}
      d="M15.293,8.293,10,13.586,8.707,12.293a1,1,0,1,0-1.414,1.414l2,2a1,1,0,0,0,1.414,0l6-6a1,1,0,0,0-1.414-1.414Z"
    />
  </svg>
);

export const EmailIcon = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    fill={color ?? "currentColor"}
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M207.8 20.73c-93.45 18.32-168.7 93.66-187 187.1c-27.64 140.9 68.65 266.2 199.1 285.1c19.01 2.888 36.17-12.26 36.17-31.49l.0001-.6631c0-15.74-11.44-28.88-26.84-31.24c-84.35-12.98-149.2-86.13-149.2-174.2c0-102.9 88.61-185.5 193.4-175.4c91.54 8.869 158.6 91.25 158.6 183.2l0 16.16c0 22.09-17.94 40.05-40 40.05s-40.01-17.96-40.01-40.05v-120.1c0-8.847-7.161-16.02-16.01-16.02l-31.98 .0036c-7.299 0-13.2 4.992-15.12 11.68c-24.85-12.15-54.24-16.38-86.06-5.106c-38.75 13.73-68.12 48.91-73.72 89.64c-9.483 69.01 43.81 128 110.9 128c26.44 0 50.43-9.544 69.59-24.88c24 31.3 65.23 48.69 109.4 37.49C465.2 369.3 496 324.1 495.1 277.2V256.3C495.1 107.1 361.2-9.332 207.8 20.73zM239.1 304.3c-26.47 0-48-21.56-48-48.05s21.53-48.05 48-48.05s48 21.56 48 48.05S266.5 304.3 239.1 304.3z" />
  </svg>
);

export const SignInIcon = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="arrow-right-to-bracket"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill={color ?? "currentColor"}
      d="M416 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c53.02 0 96-42.98 96-96V128C512 74.98 469 32 416 32zM342.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L242.8 224H32C14.31 224 0 238.3 0 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C355.1 266.1 355.1 245.9 342.6 233.4z"
    ></path>
  </svg>
);

export const CloseX = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    fill={color ?? "currentColor"}
    id="Layer_1"
    enableBackground="new 0 0 512 512"
    version="1.1"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" />
  </svg>
);

export const TrashcanDelete = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    display="block"
    enableBackground="new 0 0 24 24"
  >
    <path
      fill="none"
      stroke={color ?? "currentColor"}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 2.5v-2h4v2M1 2.5h14M9.533 13.5l.25-9M6.217 4.5l.25 9M2.661 4.5l.889 11h8.9l.888-11"
    ></path>
  </svg>
);

export const EditPencil = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-hidden="false"
    aria-labelledby="ltclid25_title "
  >
    <title id="ltclid25_title">Edit</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 14V11.7071L9.5 4.20708L11.7929 6.49998L4.29289 14H2ZM12.5 5.79287L13.7929 4.49998L11.5 2.20708L10.2071 3.49998L12.5 5.79287ZM11.1464 1.14642L1.14645 11.1464L1 11.5V14.5L1.5 15H4.5L4.85355 14.8535L14.8536 4.85353V4.14642L11.8536 1.14642H11.1464Z"
      fill={color}
    ></path>
  </svg>
);

export const ShareIcon = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs></defs>
    <title />
    <g data-name="86.share" id="_86.share">
      <circle
        fill="none"
        stroke={color ?? "currentColor"}
        strokeLinejoin="round"
        strokeWidth="2px"
        strokeLinecap="round"
        cx="7"
        cy="12"
        r="3"
      />
      <circle
        fill="none"
        stroke={color ?? "currentColor"}
        strokeLinejoin="round"
        strokeWidth="2px"
        strokeLinecap="round"
        cx="17"
        cy="4"
        r="3"
      />
      <circle
        fill="none"
        stroke={color ?? "currentColor"}
        strokeLinejoin="round"
        strokeWidth="2px"
        strokeLinecap="round"
        cx="17"
        cy="20"
        r="3"
      />
      <line
        fill="none"
        stroke={color ?? "currentColor"}
        strokeLinejoin="round"
        strokeWidth="2px"
        x1="10"
        x2="15"
        y1="10"
        y2="6"
      />
      <line
        fill="none"
        stroke={color ?? "currentColor"}
        strokeLinejoin="round"
        strokeWidth="2px"
        x1="10"
        x2="15"
        y1="14"
        y2="18"
      />
    </g>
  </svg>
);

export const PrintIcon = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title />
    <path
      fill="none"
      stroke={color ?? "currentColor"}
      strokeLinejoin="round"
      strokeWidth="32px"
      d="M384,368h24a40.12,40.12,0,0,0,40-40V168a40.12,40.12,0,0,0-40-40H104a40.12,40.12,0,0,0-40,40V328a40.12,40.12,0,0,0,40,40h24"
    />
    <rect
      fill="none"
      stroke={color ?? "currentColor"}
      strokeLinejoin="round"
      strokeWidth="32px"
      height="208"
      rx="24.32"
      ry="24.32"
      width="256"
      x="128"
      y="240"
    />
    <path
      fill="none"
      stroke={color ?? "currentColor"}
      strokeLinejoin="round"
      strokeWidth="32px"
      d="M384,128V104a40.12,40.12,0,0,0-40-40H168a40.12,40.12,0,0,0-40,40v24"
    />
    <circle cx="392" cy="184" r="24" />
  </svg>
);

export const InfoIcon = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill={color ?? "currentColor"}
    viewBox="0 0 20 20"
  >
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
  </svg>
);

export const CodeBracketIcon = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    fill={color ?? "currentColor"}
    viewBox="0 0 96 96"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title />
    <g>
      <path d="M24.8452,25.3957a6.0129,6.0129,0,0,0-8.4487.7617L1.3974,44.1563a5.9844,5.9844,0,0,0,0,7.687L16.3965,69.8422a5.9983,5.9983,0,1,0,9.21-7.687L13.8068,48l11.8-14.1554A6,6,0,0,0,24.8452,25.3957Z" />
      <path d="M55.1714,12.1192A6.0558,6.0558,0,0,0,48.1172,16.83L36.1179,76.8262A5.9847,5.9847,0,0,0,40.8286,83.88a5.7059,5.7059,0,0,0,1.1835.1172A5.9949,5.9949,0,0,0,47.8828,79.17L59.8821,19.1735A5.9848,5.9848,0,0,0,55.1714,12.1192Z" />
      <path d="M94.6026,44.1563,79.6035,26.1574a5.9983,5.9983,0,1,0-9.21,7.687L82.1932,48l-11.8,14.1554a5.9983,5.9983,0,1,0,9.21,7.687L94.6026,51.8433A5.9844,5.9844,0,0,0,94.6026,44.1563Z" />
    </g>
  </svg>
);

export const MinimizeIcon = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.0735 2L21.4877 3.41421L15.6378 9.26416H18.1824V11.2642H12.1824V5.26416H14.1824V7.89111L20.0735 2Z"
      fill={color ?? "currentColor"}
    />
    <path
      d="M11.1824 12.2642V18.2642H9.1824V15.8422L3.41421 21.6104L2 20.1962L7.93203 14.2642H5.1824V12.2642H11.1824Z"
      fill={color ?? "currentColor"}
    />
  </svg>
);

export const MaximizeIcon = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    fill="none"
    stroke={color ?? "currentColor"}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
  </svg>
);

export const MinimizeLine = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    fill={color ?? "currentColor"}
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M480 480H32c-17.75 0-32-14.25-32-32s14.25-32 32-32h448c17.75 0 32 14.25 32 32S497.8 480 480 480z" />
  </svg>
);
