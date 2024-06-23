import { useState } from "react";
import SingleElimBracket from "./SingleElimBracket";
import MatchModal from "./MatchModal";
import MatchReportModal from "./MatchReportModal";

export default function Bracket({ tournament, lines, rounds }) {
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
          setIsOpen={setIsMatchDetailsOpen}
          tournament={tournament}
          openReportModal={openReportModal}
        />
      )}
      {isMatchReportOpen && (
        <MatchReportModal
          round={activeRound}
          setIsOpen={setIsMatchReportOpen}
        />
      )}
      <div className="h-full w-full bg-zinc-900">
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
      </div>
    </>
  );
}
