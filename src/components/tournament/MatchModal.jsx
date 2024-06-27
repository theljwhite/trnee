import { useSession } from "../../auth/useSession";
import ModalWrapper from "../UI/ModalWrapper";
import { CloseX } from "../UI/Icons";

//a little messy, but works for prototype purposes
//otherwise could handle the showing/hiding match reporting stuff on an auth/db/serverside level

export default function MatchModal({
  round,
  isOpen,
  setIsOpen,
  tournament,
  openReportModal,
}) {
  const { state: session } = useSession();

  const pOne = round?.match?.participants?.find(
    (participant) => participant?.id === round.match.participantOneId
  );
  const pTwo = round?.match?.participants?.find(
    (participant) => participant?.id === round.match.participantTwoId
  );

  const isActiveMatch = !!round.match.matchNumber;
  const userIsCreator = session.user.id === tournament.creatorId;

  const hasBothParticipants =
    !!round?.match?.participants?.[0] && !!round?.match?.participants?.[1];

  const showCreatorMatchReporting =
    userIsCreator &&
    !tournament.isParticipantUpdateAllowed &&
    isActiveMatch &&
    hasBothParticipants &&
    round.match.status !== "completed";

  const showParticipantMatchReporting =
    (round.participantOneId === session.user.id ||
      round.participantTwoId === session.user.id) &&
    tournament.isParticipantUpdateAllowed &&
    isActiveMatch &&
    hasBothParticipants &&
    round.match.status !== "completed";

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
          Match details
        </h1>
        <div className="border mt-4 border-zinc-600"></div>
      </div>
      <div className="p-6 relative flex flex-row gap-2">
        <div className="w-1/2 rounded-lg h-40 bg-zinc-900 flex items-center justify-center">
          <div className="flex flex-col gap-2">
            <div
              style={{
                background: "url('/anonUser.png')",
                backgroundSize: "cover",
              }}
              className="w-20 h-20 rounded-full"
            />
            <span className="text-zinc-300 text-sm font-bold text-center">
              {pOne?.username ?? "TBD"}
            </span>
          </div>
        </div>

        <span className="mt-20 mx-2 text-white font-bold text-md">vs</span>

        <div className="w-1/2 rounded-lg h-40 bg-zinc-900 flex items-center justify-center">
          <div className="flex flex-col gap-2">
            <div
              style={{
                background: "url('/anonUser.png')",
                backgroundSize: "cover",
              }}
              className="w-20 h-20 rounded-full"
            />
            <span className="text-zinc-300 text-sm font-bold text-center">
              {pTwo?.username ?? "TBD"}
            </span>
          </div>
        </div>
      </div>

      <div className="relative">
        {isActiveMatch && (
          <div className="w-full flex justify-center items-center">
            <table className="bg-zinc-900 text-zinc-300 w-1/4">
              <tbody className="table-row align-middle">
                <tr className="table-row">
                  <td className="table-cell px-1.5 pb-1 border border-zinc-800">
                    <div className="inline-block w-48 truncate align-middle">
                      {pOne ? pOne?.username : "TBD"}
                    </div>
                  </td>
                  <td className="table-cell border w-10 border-zinc-800 pb-1 px-3">
                    <span className="align-middle text-center">
                      {round.match.participantOneScore}
                    </span>
                  </td>
                </tr>

                <tr className="table-row">
                  <td className="table-cell px-1.5 pb-1 border border-zinc-800">
                    <div className="inline-block w-28 truncate align-middle">
                      {pTwo ? pTwo?.username : "TBD"}
                    </div>
                  </td>
                  <td className="table-cell border w-10 border-zinc-800 pb-1 px-3">
                    <span className="align-middle text-center">
                      {round.match.participantTwoScore}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {(showCreatorMatchReporting || showParticipantMatchReporting) && (
          <div className="mt-12 mx-8 flex justify-between">
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center text-zinc-800 justify-center bg-zinc-400 px-8 py-2 rounded-lg cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={openReportModal}
              className="flex items-center text-white justify-center bg-indigo-600 px-8 py-2 rounded-lg cursor-pointer"
            >
              Report Score
            </button>
          </div>
        )}
      </div>
    </ModalWrapper>
  );
}
