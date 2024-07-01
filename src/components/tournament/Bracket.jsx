import { useState } from "react";
import SingleElimBracket from "./SingleElimBracket";
import MatchModal from "./MatchModal";
import MatchReportModal from "./MatchReportModal";
import MatchHistoryTable from "./MatchHistoryTable";
import TournamentDetails from "./TournamentDetails";

export default function Bracket({
  tournament,
  lines,
  rounds,
  setDidTourneyUpdate,
  completedMatches,
}) {
  const [activeRound, setActiveRound] = useState({});
  const [isMatchDetailsOpen, setIsMatchDetailsOpen] = useState(false);
  const [isMatchReportOpen, setIsMatchReportOpen] = useState(false);

  const openMatchModal = (round) => {
    setActiveRound(round);
    setIsMatchDetailsOpen(true);
  };

  const openReportModal = () => {
    setIsMatchDetailsOpen(false);
    setIsMatchReportOpen(true);
  };

  return (
    <>
      {isMatchDetailsOpen && (
        <MatchModal
          round={activeRound}
          isOpen={isMatchDetailsOpen}
          setIsOpen={setIsMatchDetailsOpen}
          tournament={tournament}
          openReportModal={openReportModal}
        />
      )}
      {isMatchReportOpen && (
        <MatchReportModal
          round={activeRound}
          tournament={tournament}
          isOpen={isMatchReportOpen}
          setIsOpen={setIsMatchReportOpen}
          setDidTourneyUpdate={setDidTourneyUpdate}
        />
      )}
      <div className="h-full w-full bg-zinc-900">
        <div className="relative">
          {tournament.format === "SingleElimination" ? (
            <SingleElimBracket
              lines={lines}
              rounds={rounds}
              openMatchModal={openMatchModal}
            />
          ) : tournament.format === "DoubleElimination" ? (
            <span>TODO DoubleElim</span>
          ) : tournament.format === "RoundRobin" ? (
            <span>TODO RoundRobin</span>
          ) : (
            <span>TODO Swiss</span>
          )}
          <TournamentDetails tournament={tournament} rounds={rounds} />
          <MatchHistoryTable completedMatches={completedMatches} />
        </div>
      </div>
    </>
  );
}
