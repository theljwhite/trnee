import { useSession } from "../../auth/useSession";
import ModalWrapper from "../UI/ModalWrapper";
import { CloseX } from "../UI/Icons";

//TODO add optional game stats to this

export default function MatchModal({ round, setIsOpen }) {
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
              {round.match.matchNumber
                ? round.match.participants[0].username
                : "TBD"}
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
              {round.match.matchNumber
                ? round.match.participants[1].username
                : "TBD"}
            </span>
          </div>
        </div>
      </div>

      {round.match.matchNumber && (
        <div className="w-full flex justify-center items-center">
          <table className="bg-zinc-900 text-zinc-300 w-1/4">
            <tbody className="table-row align-middle">
              <tr className="table-row">
                <td className="table-cell px-1.5 pb-1 border border-zinc-800">
                  <div className="inline-block w-48 truncate align-middle">
                    {round.match.participants[0].username}
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
                    {round.match.participants[1].username}
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
    </ModalWrapper>
  );
}
