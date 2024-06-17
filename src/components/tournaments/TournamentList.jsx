import { useState, useEffect } from "react";
import { api } from "../../utils/api";
import TourneyCard from "./TourneyCard";
import SmallTourneyCard from "./SmallTourneyCard";
import MediumTourneyCard from "./MediumTourneyCard";
import TourneySort from "./TourneySort";

export default function TournamentList() {
  const [trending, setTrending] = useState([]);
  const [tournaments, setTournaments] = useState([]);
  const [filteredTournies, setFilteredTournies] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    getAndSetTournaments();
  }, []);

  const getAndSetTournaments = async () => {
    const tournaments = await api.tournaments.getAllTournaments();
    const users = await api.users.getAllUsers();
    const tourniesWithCreators = tournaments.map((tourney) => {
      const user = users.find((user) => user.id === tourney.creatorId);
      return {
        ...tourney,
        creatorUsername: user ? user.username : "Unknown",
      };
    });
    setFilteredTournies(tourniesWithCreators);
    setTournaments(tourniesWithCreators);
  };

  return (
    <>
      <TourneySort
        tournaments={tournaments}
        setFilteredTournies={setFilteredTournies}
      />
      <div className="mt-10">
        <h2 className="text-white text-xl leading-6 lg:leading-7 font-bold lg:text-3xl">
          Trending tournaments
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
          {filteredTournies.map((tournament) => {
            return <TourneyCard key={tournament.id} tournament={tournament} />;
          })}
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-white text-xl leading-6 lg:leading-7 font-bold lg:text-3xl">
          Tournaments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-4">
          {tournaments.map((tournament) => {
            return (
              <SmallTourneyCard key={tournament.id} tournament={tournament} />
            );
          })}
        </div>
        <div className="mt-10">
          <h2 className="text-white text-xl leading-6 lg:leading-7 font-bold lg:text-3xl">
            Tournaments
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
            {tournaments.map((tournament) => {
              return (
                <MediumTourneyCard
                  key={tournament.id}
                  tournament={tournament}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
