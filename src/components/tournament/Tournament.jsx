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
      <Bracket tournament={tournament} lines={lines} rounds={rounds} />
    </>
  );
}
