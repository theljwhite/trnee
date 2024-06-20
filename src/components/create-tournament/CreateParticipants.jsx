import { useState } from "react";
import { useCreateTourneyContext } from "./CreateTourneyContext";
import { SEED_USER_ENTRY_REGEX } from "../../constants/regularExpressions";
import StyledTextArea from "../UI/StyledTextArea";
import { UsersIcon } from "../UI/Icons";

//TODO - signup key for custom signup
//TODO - consider also the logic for manual team entry and team custom signup

export default function CreateParticipants() {
  const { state, dispatch } = useCreateTourneyContext();
  const { participantsList, hasCustomSignup } = state;

  const onParticipantEntryChange = (e) => {
    const { value } = e.target;
    dispatch({
      type: "participant_list_update",
      payload: value,
    });
    //TODO - validate correct entry format
  };

  return (
    <div className="bg-zinc-900 rounded-lg p-5 shadow-lg min-w-[680px]">
      <div className="mb-4 pb-4 border-b border-zinc-800">
        <span className="text-2xl text-white font-bold">
          {hasCustomSignup ? "Add participants" : "Participant settings"}
        </span>
        <p className="block text-sm font-medium text-zinc-400 mt-2 mb-1">
          {hasCustomSignup ? (
            <span>hasCustomsignup</span>
          ) : (
            <span>
              Manage participants for your tournament. Enter a list of
              participants with their desired seed and their username or name.
              Separate participants with a line break. Ex: "1 johny 2 davis 3
              skimbo" One line would look like "1 johny" and the next line would
              be "2 davis"
            </span>
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 mb-6">
        {hasCustomSignup ? (
          <div className="col-span-full">TODO: CUSTOM SIGNUP</div>
        ) : (
          <div className="col-span-full">
            <label className="block text-sm font-medium text-zinc-400 mb-1">
              Enter a list of participants
            </label>
            <StyledTextArea
              stateVar={participantsList}
              onChange={(e) => onParticipantEntryChange(e)}
              placeholder="Enter a list of participants"
              icon={<UsersIcon size={18} color="#FFF" />}
              height="96"
              isDark
            />
          </div>
        )}
      </div>
    </div>
  );
}
