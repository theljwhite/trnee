import SingleElimBracket from "./SingleElimBracket";

export default function Bracket({ tournament, lines, rounds }) {
  return (
    <div className="h-full w-full bg-zinc-900">
      {tournament.format === "SingleElimination" ? (
        <SingleElimBracket lines={lines} rounds={rounds} />
      ) : tournament.format === "DoubleElimination" ? (
        <span>TODO DoubleElim</span>
      ) : tournament.format === "RoundRobin" ? (
        <span>TODO RoundRobin</span>
      ) : (
        <span>TODO Swiss</span>
      )}
    </div>
  );
}
