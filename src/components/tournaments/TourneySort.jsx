import { useState, useEffect } from "react";
import { allGameNames, tourneyStatuses } from "../../constants/gameConstants";
import StyledInput from "../UI/StyledInput";
import StyledSelect from "../UI/StyledSelect";
import { SearchIcon, GameControllerIcon, StatusIconOne } from "../UI/Icons";

export default function TourneySort({ tournaments, setFilteredTournies }) {
  const [selectedGame, setSelectedGame] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const gameOptions = ["All", ...allGameNames];
  const statusOptions = ["All", ...tourneyStatuses];

  useEffect(() => {
    applyTourneyFilters();
  }, [searchQuery, selectedGame, selectedStatus]);

  const applyTourneyFilters = () => {
    let tempTournies = tournaments;

    if (searchQuery) {
      tempTournies = tempTournies.filter((tourney) =>
        tourney.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedGame !== "All") {
      tempTournies = tempTournies.filter(
        (tourney) => tourney.game.toLowerCase() === selectedGame.toLowerCase()
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
              onChange={(e) => setSelectedGame(e.target.value)}
              defaultValue="All"
              defaultValueTitle="Filter Game"
              options={gameOptions}
              icon={<GameControllerIcon color="#FFF" size={18} />}
            />
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
  );
}
