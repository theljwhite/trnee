import { UsersIcon } from "../UI/Icons";
import StyledTextArea from "../UI/StyledTextArea";

export default function CreateParticipants({ hasCustomSignup }) {
  return (
    <div className="bg-zinc-900 rounded-lg p-5 shadow-lg min-w-[680px]">
      <div className="mb-4 pb-4 border-b border-zinc-800">
        <span className="text-2xl text-white font-bold">
          {hasCustomSignup ? "Add participants" : "Participant settings"}
        </span>
        <p className="block text-sm font-medium text-zinc-400 mt-2 mb-1">
          {hasCustomSignup
            ? "Copy details below in order for users to join your tournament"
            : "Provide a list of participants with their respective seeds for your tourmanet"}
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
            <span className="block text-sm font-normal text-zinc-400 my-1">
              Separate participants and their seeds by commas. Ex: "1 johny, 2
              jasmine, 3 bob"
            </span>
            {/* TODO make a date picker */}
            <StyledTextArea
              stateVar=""
              onChange={() => console.log("TODO")}
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
