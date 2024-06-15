import React from "react";

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

export const UsersIcon = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    fill={color ?? "currentColor"}
    enableBackground="new 0 0 24 24"
    id="Layer_1"
    version="1.0"
    viewBox="0 0 24 24"
    xmlspace="preserve"
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
