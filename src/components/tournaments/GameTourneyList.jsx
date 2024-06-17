import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../utils/api";
import {
  tourneyStatuses,
  allGameNamesLowercase,
} from "../../constants/gameConstants";
import GameDescriptorCard from "../UI/GameDescriptorCard";
import TourneyCard from "./TourneyCard";
import StyledInput from "../UI/StyledInput";
import StyledSelect from "../UI/StyledSelect";
import { SearchIcon, StatusIconOne } from "../UI/Icons";

export default function GameTourneyList() {
  const [tournaments, setTournaments] = useState([]);
  const [filteredTournies, setFilteredTournies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");

  let { game } = useParams();
  const statusOptions = ["All", ...tourneyStatuses];

  useEffect(() => {
    if (allGameNamesLowercase.includes(game)) {
      getAndSetTournaments();
    }
  }, [game]);

  useEffect(() => {
    applyTourneyFilters();
  }, [searchQuery, selectedStatus]);

  const getAndSetTournaments = async () => {
    const tournamentsByGame = await api.tournaments.getAllTournamentsByGame(
      game
    );
    const users = await api.users.getAllUsers();
    const tourniesWithCreators = tournamentsByGame.map((tourney) => {
      const user = users.find((user) => user.id === tourney.creatorId);
      return {
        ...tourney,
        creatorUsername: user ? user.username : "Unknown",
      };
    });

    setTournaments(tourniesWithCreators);
    setFilteredTournies(tourniesWithCreators);
  };

  const applyTourneyFilters = () => {
    let tempTournies = tournaments;

    if (searchQuery) {
      tempTournies = tempTournies.filter((tourney) =>
        tourney.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (selectedStatus !== "All") {
      tempTournies = tempTournies.filter(
        (tourney) =>
          tourney.status.toLowerCase() === selectedStatus.toLowerCase()
      );
    }
    setFilteredTournies(tempTournies);
  };

  return (
    <>
      <GameDescriptorCard selectedGame={game} />
      <div className="mt-10">
        <div className="flex items-center mb-8">
          <div className="flex mr-4">
            <StyledInput
              stateVar={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              icon={<SearchIcon color="#FFF" size={16} />}
              placeholder="Search tournament..."
            />
          </div>
          <div className="ml-auto inline-flex">
            <div className="flex">
              <div className="flex flex-row gap-2">
                <StyledSelect
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  defaultValue="All"
                  defaultValueTitle="Filter Status"
                  options={statusOptions}
                  icon={<StatusIconOne color="#FFF" size={18} />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-white text-xl capitalize leading-6 lg:leading-7 font-bold lg:text-3xl">
          {game} tournaments
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
          {filteredTournies.slice(0, 8).map((tournament) => {
            return <TourneyCard key={tournament.id} tournament={tournament} />;
          })}
        </div>
      </div>
    </>
  );
}
