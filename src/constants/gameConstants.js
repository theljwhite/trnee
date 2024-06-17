//these records could also go in db, but oh well

export const games =
  "quake" | "diabotical" | "counterstrike" | "valorant" | "overwatch2";

export const gameItems = [
  {
    name: "Diabotical",
    img: "https://pbs.twimg.com/profile_images/1347579378981548034/vENYz-Eo_400x400.png",
    description:
      "Diabotical is a 2020 multiplayer-only first-person shooter developed by Swedish team GD Studio. It is in the arena FPS genre and features gameplay similar to Quake III Arena and its successors, with a variety of game modes, weapons, and complex movement mechanics. Diabotical uses an engine written from scratch.",
  },
  {
    name: "Quake",
    img: "https://i.imgur.com/Y8kmd9l.jpeg",
    description:
      "Developed by id Software, in conjunction with Saber Interactive, Quake® Champions is a fast-paced arena shooter that combines the dark mythos of the original Quake with the skill-based competition of Quake III Arena, and then adds a twist—Champions, each with unique attributes and abilities for you to master.",
  },
  {
    name: "CounterStrike",
    img: "https://i.imgur.com/I8M0T6B.png",
    description:
      "Counter-Strike is a multiplayer, first-person shooter video game where two teams compete against each other to complete objectives.",
  },
  {
    name: "Valorant",
    img: "https://i.imgur.com/27ln4kA.jpeg",
    description:
      "Valorant is an online multiplayer computer game, produced by Riot Games. It is a first-person shooter game, consisting of two teams of five, where one team attacks and the other defends. Players control characters known as 'agents', who all have different abilities to use during gameplay.",
  },
  {
    name: "Overwatch2",
    img: "https://imguscdn.gamespress.com/cdn/files/BlizzardLive/2022/06/102219-f3a70bab/Overwatch2_Primary_DKBKGD.png?w=276&mode=max&otf=y&quality=90&format=png&bgcolor=transparent&ex=2024-07-01+03%3A00%3A00&sky=cafd7334653867d93c46f0a908ebd3785e3fb8fcb27eedb4edaa5b804e1b370c",
    description:
      "Overwatch 2 is a free-to-play shooter featuring 30+ epic heroes, each with game-changing abilities. Choose your hero, group up with your friends, and battle across all-new maps and modes in the ultimate team-based shooter.",
  },
];

export const allGameNames = gameItems.map((game) => game.name);
export const allGameNamesLowercase = gameItems.map((game) =>
  game.name.toLowerCase()
);
export const tourneyStatuses = ["Pending", "Ongoing", "Complete"];

export const gamesRecord = {
  none: {
    icon: "",
    bannerImg: "",
    tourneyCardImg: "",
    description: "",
  },
  diabotical: {
    icon: "https://pbs.twimg.com/profile_images/1347579378981548034/vENYz-Eo_400x400.png",
    bannerImg: "/public/gameImages/DBTeggbots.jpg",
    tourneyCardImg:
      "https://i.pinimg.com/736x/de/36/bb/de36bb06b74775893f4ef57232ca2d97.jpg",
    description:
      "Diabotical is a 2020 multiplayer-only first-person shooter developed by Swedish team GD Studio. It is in the arena FPS genre and features gameplay similar to Quake III Arena and its successors, with a variety of game modes, weapons, and complex movement mechanics. Diabotical uses an engine written from scratch.",
    socials: {
      website: "https://www.diabotical.com/",
      twitter: "https://twitter.com/diabotical",
      reddit: "https://www.reddit.com/r/Diabotical/",
    },
  },
  quake: {
    icon: "https://i.imgur.com/Y8kmd9l.jpeg",
    bannerImg:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/611500/ss_934c0c5ce0f338805847fcfc451ec04208e40ef7.1920x1080.jpg",
    tourneyCardImg:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/611500/ss_7a1bd235e3b79b97855df5e312ab101ad2b19230.1920x1080.jpg",
    description:
      "Developed by id Software, in conjunction with Saber Interactive, Quake® Champions is a fast-paced arena shooter that combines the dark mythos of the original Quake with the skill-based competition of Quake III Arena, and then adds a twist—Champions, each with unique attributes and abilities for you to master.",
    socials: {
      website: "https://quake.com",
      twitter: "https://twitter.com/quake",
      reddit: "https://www.reddit.com/r/QuakeChampions/",
    },
  },
  counterstrike: {
    icon: "https://i.imgur.com/I8M0T6B.png",
    bannerImg:
      "https://developer.valvesoftware.com/w/images/thumb/9/97/Counter-Strike_2_-_Background.png/2160px-Counter-Strike_2_-_Background.png",
    tourneyCardImg:
      "https://developer.valvesoftware.com/w/images/thumb/9/97/Counter-Strike_2_-_Background.png/2160px-Counter-Strike_2_-_Background.png",
    description:
      "Counter-Strike is a multiplayer, first-person shooter video game where two teams compete against each other to complete objectives.",
    socials: {
      website: "https://www.counter-strike.net/",
      twitter: "https://twitter.com/valvesoftware",
      reddit: "https://www.reddit.com/r/cs2/",
    },
  },
  valorant: {
    icon: "https://i.imgur.com/27ln4kA.jpeg",
    bannerImg: "https://i.imgur.com/45mTTvt.jpg",
    tourneyCardImg: "https://i.imgur.com/O61I5xl.jpg",
    description:
      "Valorant is an online multiplayer computer game, produced by Riot Games. It is a first-person shooter game, consisting of two teams of five, where one team attacks and the other defends. Players control characters known as 'agents', who all have different abilities to use during gameplay.",
    socials: {
      website: "https://www.counter-strike.net/",
      twitter: "https://twitter.com/valvesoftware",
      reddit: "https://www.reddit.com/r/cs2/",
    },
  },
  overwatch2: {
    icon: "https://imguscdn.gamespress.com/cdn/files/BlizzardLive/2022/06/102219-f3a70bab/Overwatch2_Primary_DKBKGD.png?w=276&mode=max&otf=y&quality=90&format=png&bgcolor=transparent&ex=2024-07-01+03%3A00%3A00&sky=cafd7334653867d93c46f0a908ebd3785e3fb8fcb27eedb4edaa5b804e1b370c",
    bannerImg:
      "https://xxboxnews.blob.core.windows.net/prod/sites/2/2022/10/OW2-be9287b234afbe7898ac.jpg",
    tourneyCardImg:
      "https://xxboxnews.blob.core.windows.net/prod/sites/2/2022/10/OW2-be9287b234afbe7898ac.jpg",
    description:
      "Overwatch 2 is a free-to-play shooter featuring 30+ epic heroes, each with game-changing abilities. Choose your hero, group up with your friends, and battle across all-new maps and modes in the ultimate team-based shooter.",
    socials: {
      website: "https://overwatch.blizzard.com/",
      twitter: "https://twitter.com/PlayOverwatch",
      reddit: "https://www.reddit.com/r/overwatch2/",
    },
  },
};
