import { useEffect } from "react";
import { useCreateTourneyContext } from "./CreateTourneyContext";
import StyledTextArea from "../UI/StyledTextArea";
import { UsersIcon } from "../UI/Icons";
import StyledCopyBox from "../UI/StyledCopyBox";

//TODO - consider also the logic for manual team entry and team custom signup
//TODO - add validation to participants manual entry string at some point

export default function CreateParticipants() {
  const { state, dispatch } = useCreateTourneyContext();
  const { participantsList, hasCustomSignup } = state;

  useEffect(() => {
    if (state.hasCustomSignup && !state.signupKey && !state.signupUrl) {
      const signupUuid = window.crypto.randomUUID();
      const signupUrlUuid = window.crypto.randomUUID();
      dispatch({
        type: "signup_details_update",
        payload: {
          key: signupUuid,
          url: `http://trn.ee/join?invite=${signupUrlUuid}`,
        },
      });
    }
  }, []);

  const onParticipantEntryChange = (e) => {
    const { value } = e.target;
    dispatch({
      type: "participant_list_update",
      payload: value,
    });
  };

  return (
    <div className="bg-zinc-900 rounded-lg p-5 shadow-lg max-w-[680px]">
      <div className="mb-4 pb-4 border-b border-zinc-800">
        <span className="text-2xl text-white font-bold">
          Participant settings
        </span>
        <p className="block text-sm font-medium text-zinc-400 mt-2 mb-1">
          {hasCustomSignup ? (
            <span>
              Participants will be able to join your tournament at the below URL
              if they enter the correct signup key. Please make sure to save the
              signup key in a safe location - however, you can always change it
              later.
            </span>
          ) : (
            <span>
              Enter a list of participants with their desired seed and their
              username or name. Separate participants with a line break. Ex:
              &quot;1 johny 2 davis 3 skimbo&quot; One line would look like
              &quot;1 johny&quot; and the next line would be &quot;2 davis&quot;
            </span>
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 mb-6">
        {hasCustomSignup ? (
          <>
            <div className="col-span-full">
              <label className="block text-sm font-medium text-zinc-400 mb-1">
                Join Tournament URL
              </label>
              <StyledCopyBox
                dataToCopy={state.signupUrl}
                copyBoxLabel="Tournament Invitation URL"
                isSecret={false}
                withToast
              />
            </div>
            <div className="col-span-full">
              <label className="block text-sm font-medium text-zinc-400 mb-1">
                Your Tournament Sign Up Key
              </label>
              <StyledCopyBox
                dataToCopy={state.signupKey}
                copyBoxLabel="User signup key"
                isSecret
                withToast
              />
            </div>
          </>
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
              height="300"
              isDark
            />
          </div>
        )}
      </div>
    </div>
  );
}
