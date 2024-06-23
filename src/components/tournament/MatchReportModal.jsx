import { useState } from "react";
import { NUMBERS_ONLY_REGEX } from "../../constants/regularExpressions";
import ModalWrapper from "../UI/ModalWrapper";
import StyledInput from "../UI/StyledInput";
import { CloseX, DescriptionIcon } from "../UI/Icons";
import { toastError } from "../UI/Toast/Toast";

export default function MatchReportModal({ round, setIsOpen }) {
  const [scoreOne, setScoreOne] = useState(0);
  const [scoreTwo, setScoreTwo] = useState(0);

  const participantOne = round.match.participants[0].username;
  const participantTwo = round.match.participants[1].username;

  const handleMatchUpdate = () => {
    //TODO
  };

  const validateScores = () => {
    if (!scoreOne && !scoreTwo) toastError("Must update at least one score");
    if (scoreOne && !NUMBERS_ONLY_REGEX.test(scoreOne)) {
      toastError(
        `Invalid entry for ${participantOne}. Scores must be numeric.`
      );
    }
    if (scoreTwo && !NUMBERS_ONLY_REGEX.test(scoreTwo)) {
      toastError(
        `Invalid entry for ${participantTwo}. Scores must be numeric.`
      );
    }
  };

  return (
    <ModalWrapper modalBg="bg-zinc-800" setIsOpen={setIsOpen}>
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
          Enter at least one of the participant&apos;s scores to update the
          match. If both scores are entered, the participant with the higher
          score will advance in the tournament.
        </p>
        <div className="border mt-4 border-zinc-600"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 mt-6 gap-6 mx-12">
        <div className="col-span-full">
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Enter a new score for &quot;{participantOne}
            &quot;
          </label>
          <StyledInput
            onChange={(e) => setScoreOne(Number(e.target.value))}
            placeholder={`${participantOne} score`}
            icon={<DescriptionIcon size={18} color="#FFF" />}
          />
        </div>
        <div className="col-span-full">
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Enter a new score for &quot;{participantTwo}
            &quot;
          </label>
          <StyledInput
            onChange={(e) => setScoreTwo(Number(e.target.value))}
            placeholder={`${participantTwo} score`}
            icon={<DescriptionIcon size={18} color="#FFF" />}
          />
        </div>
      </div>
    </ModalWrapper>
  );
}
