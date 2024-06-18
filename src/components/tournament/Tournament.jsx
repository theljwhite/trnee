import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../utils/api";
import {
  doBracketRoundTransforms,
  assignLinePathByRoundNumber,
} from "../../utils/bracketPosition";
import { generateMatches } from "../../utils/bracketLogic";
import TournamentHeader from "./TournamentHeader";
import Bracket from "./Bracket";
import { TourneyBracketIconOne } from "../UI/Icons";

export default function Tournament() {
  const [tournament, setTournament] = useState({});
  const [participants, setParticipants] = useState([]);
  const [lines, setLines] = useState([]);
  const [rounds, setRounds] = useState([]);

  let { tourneyId } = useParams();

  useEffect(() => {
    getAndSetTournament(tourneyId);
  }, []);

  const getAndSetTournament = async () => {
    const [tourney] = await api.tournaments.getTournamentById(tourneyId);
    const participants = await api.tournaments.getTournamentParticipantsFull(
      tourneyId
    );
    let matches = [];

    if (tourney.status === "pending") {
      matches = generateMatches(tourney.format, participants);
    }

    if (tourney.status === "ongoing" || tourney.status === "completed") {
      //TODO - logic to fetch and generate bracket from matches
    }

    const lineTransforms = assignLinePathByRoundNumber(participants.length);
    const roundTransforms = doBracketRoundTransforms(participants.length);

    const roundsWithMatchData = roundTransforms.map((transform, index) => ({
      transform,
      match: matches[index] ?? [],
    }));

    setTournament(tourney);
    setParticipants(participants);
    setLines(lineTransforms);
    setRounds(roundsWithMatchData);
  };

  return (
    <>
      <TournamentHeader tournament={tournament} />
      {participants.length < 2 ? (
        <div className="hover:scale-105 hover:opacity-90 flex cursor-pointer flex-col items-center justify-center bg-zinc-800 p-4 rounded-lg shadow">
          <div className="text-4xl text-indigo-500">
            <TourneyBracketIconOne color="#FFF" size={100} />
          </div>
          <span className="text-2xl font-semibold mt-2 text-white">
            Waiting for more participants...
          </span>
          <div className="text-lg text-center mt-2 text-white">
            Bracket preview will be displayed when at least 2 participants are
            registered for this trnee.
          </div>
        </div>
      ) : (
        <Bracket tournament={tournament} lines={lines} rounds={rounds} />
      )}
    </>
  );
}
