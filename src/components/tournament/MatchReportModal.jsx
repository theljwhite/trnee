import { useState } from "react";
import { useSession } from "../../auth/useSession";
import { api } from "../../utils/api";
import { NUMBERS_ONLY_REGEX } from "../../constants/regularExpressions";
import ModalWrapper from "../UI/ModalWrapper";
import StyledInput from "../UI/StyledInput";
import { CloseX, DescriptionIcon } from "../UI/Icons";
import { toastSuccess, toastError } from "../UI/Toast/Toast";

//clean up the validation here at some point

export default function MatchReportModal({
  round,
  tournament,
  isOpen,
  setIsOpen,
  setDidTourneyUpdate,
}) {
  const [scoreOne, setScoreOne] = useState(0);
  const [scoreTwo, setScoreTwo] = useState(0);
  const [userScore, setUserScore] = useState(0);

  const { state: session } = useSession();
  const userIsCreator = session.user.id === tournament.creatorId;

  const participantOne = round.match.participants[0].username;
  const participantTwo = round.match.participants[1].username;

  const handleMatchUpdate = async () => {
    if (!isScoresValidated()) return;

    if (userIsCreator) {
      const { updatedMatch, nextMatch } =
        await api.matches.updateMatchFromCreator(
          round.match,
          scoreOne,
          scoreTwo
        );

      if (scoreOne && scoreTwo) {
        toastSuccess(
          `Match #${updatedMatch.matchNumber} was updated and winner was moved to round ${nextMatch.roundNumber}.`
        );
        setDidTourneyUpdate(true);
      }

      if ((!scoreOne && scoreTwo) || (!scoreTwo && scoreOne)) {
        toastSuccess(
          `Match #${updatedMatch.matchNumber} was updated - once other score is reported, winner will be moved to round ${nextMatch.roundNumber}`
        );
        setDidTourneyUpdate(true);
      }
      setIsOpen(false);
    } else {
      //TODO - add logic for if a participant updated the match when allowed
    }
  };

  const isScoresValidated = () => {
    if (userIsCreator) {
      if (!scoreOne && !scoreTwo) {
        toastError("Must update at least one score");
        return false;
      }
      if (scoreOne && !NUMBERS_ONLY_REGEX.test(scoreOne)) {
        toastError(
          `Invalid entry for ${participantOne}. Scores must be numeric.`
        );
        return false;
      }
      if (scoreTwo && !NUMBERS_ONLY_REGEX.test(scoreTwo)) {
        toastError(
          `Invalid entry for ${participantTwo}. Scores must be numeric.`
        );
        return false;
      }
      return true;
    } else {
      if (!userScore) {
        toastError("Score didn't change.");
        return false;
      }
      if (!NUMBERS_ONLY_REGEX.test(userScore)) {
        toastError("Score must be numeric.");
        return false;
      }
      return true;
    }
  };

  return (
    <ModalWrapper modalBg="bg-zinc-800" isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 bottom-0 text-zinc-600 hover:text-white"
        >
          <CloseX size={20} />
        </button>
      </div>
      <div className="mx-8 relative">
        <h1 className="text-white capitalize text-lg leading-8 font-bold">
          Report Match
        </h1>
        <p className="block text-sm font-medium text-zinc-400 my-2">
          {userIsCreator
            ? "Enter at least one of the participant's scores to update the match. If both scores are entered, the participant with the higher score will advance in the tournament."
            : "Enter your score to update the match. Once both users enter their scores, the higher score will advance in the tournament."}
        </p>
        <div className="border mt-4 border-zinc-600"></div>
      </div>

      <div className="grid grid-cols-1 mt-6 gap-6 mx-12">
        {userIsCreator ? (
          <>
            <div className="col-span-full">
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Enter a new score for &quot;{participantOne}&quot;
              </label>
              <StyledInput
                stateVar={scoreOne}
                onChange={(e) => setScoreOne(e.target.value)}
                placeholder={`${participantOne} score`}
                icon={<DescriptionIcon size={18} color="#FFF" />}
                type="number"
              />
            </div>
            <div className="col-span-full">
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Enter a new score for &quot;{participantTwo}&quot;
              </label>
              <StyledInput
                stateVar={scoreTwo}
                onChange={(e) => setScoreTwo(e.target.value)}
                placeholder={`${participantTwo} score`}
                icon={<DescriptionIcon size={18} color="#FFF" />}
                type="number"
              />
            </div>
          </>
        ) : (
          <div className="col-span-full">
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Enter your updated score
            </label>
            <StyledInput
              stateVar={userScore}
              onChange={(e) => setUserScore(e.target.value)}
              placeholder="Your score"
              icon={<DescriptionIcon size={18} color="#FFF" />}
              type="number"
            />
          </div>
        )}
        <div className="mt-4 flex justify-between w-full">
          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center text-zinc-900 justify-center bg-zinc-400 px-8 py-2 rounded-lg cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleMatchUpdate}
            className="flex items-center text-white justify-center bg-indigo-600 px-8 py-2 rounded-lg cursor-pointer"
          >
            Submit Score
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
}
