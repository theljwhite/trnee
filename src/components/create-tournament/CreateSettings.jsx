import StyledSelect from "../UI/StyledSelect";
import { useCreateTourneyContext } from "./CreateTourneyContext";
import {
  TourneyBracketIconOne,
  DateIcon,
  UsersIcon,
  SubmitIcon,
  TwoGearsIcon,
} from "../UI/Icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//TODO - if manual entry, hide option for match reporting
//TODO - can make the select options state, but for now it works fine
//and still saves prior response

export default function CreateSettings() {
  const { state, dispatch } = useCreateTourneyContext();

  const formatOptions = [
    "SingleElimination",
    "DoubleElimination",
    "RoundRobin",
    "Swiss",
    "Leaderboard",
  ];
  const participantsOptions = [
    "Provide a list of participants",
    "Allow participants to signup after tournament creation",
  ];

  const matchReportOptions = [
    "Allow participants to report match scores",
    "Only tournament creator can report match scores",
  ];

  const tourneyTypeOptions = ["Player based", "Team based"];

  const tourneyTypeDefault =
    state.isTeamBased === null
      ? "Select a tournament type"
      : state.isTeamBased
      ? "Team Based"
      : !state.isTeamBased && "Player Based";

  const participantDefault =
    state.hasCustomSignup === null
      ? "Select a participants option"
      : state.hasCustomSignup
      ? participantsOptions[1]
      : !state.hasCustomSignup && participantsOptions[0];

  const participantUpdateDefault =
    state.isParticipantUpdateAllowed === null
      ? "Select a Match Reporting Option"
      : state.isParticipantUpdateAllowed
      ? matchReportOptions[0]
      : !state.isParticipantUpdateAllowed && matchReportOptions[1];

  return (
    <div className="bg-zinc-900 rounded-lg p-5 shadow-lg min-w-[680px]">
      <div className="mb-4 pb-4 border-b border-zinc-800">
        <span className="text-2xl text-white font-bold">
          Tournament Settings
        </span>
        <p className="block text-sm font-medium text-zinc-400 mt-2 mb-1">
          Settings such as bracket format, start date, player or team based, and
          more.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 mb-6">
        <div className="col-span-full">
          <label className="block text-sm font-medium text-zinc-400 mb-1">
            Start date
          </label>
          <div className="relative bg-zinc-800">
            <label className="cursor-pointer">
              <div className="flex w-full border-zinc-700 overflow-hidden rounded-lg border-2">
                <div className="bg-zinc-800 my-auto border-none w-12 py-1.5 text-center text-[1.125rem] leading-7">
                  <span className="align-[-0.125em] inline-block">
                    <DateIcon size={18} color="#FFF" />
                  </span>
                </div>
                <DatePicker
                  className="bg-zinc-800 outline-none cursor-pointer block w-full pt-2 pb-2 pr-2 text-white appearance-none"
                  selected={state.startTime}
                  onChange={(date) =>
                    dispatch({ type: "start_date_update", payload: date })
                  }
                  showPreviousMonths={false}
                  showTimeSelect
                  showTimeInput
                  timeIntervals={15}
                  timeFormat="HH:mm"
                  dateFormat="MM/dd/yyyy HH:mm:ss"
                />
              </div>
            </label>
          </div>
        </div>
        <div className="col-span-full">
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Tournament format
          </label>
          <StyledSelect
            onChange={(e) =>
              dispatch({ type: "format_update", payload: e.target.value })
            }
            defaultValue={state.format ?? "Select a tournament format"}
            defaultValueTitle={state.format ?? "Select a tournament format"}
            options={formatOptions}
            icon={<TourneyBracketIconOne size={18} color="#FFF" />}
            isDark
          />
        </div>
        <div className="col-span-full">
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Tournament type
          </label>
          <StyledSelect
            onChange={(e) =>
              dispatch({ type: "type_update", payload: e.target.value })
            }
            defaultValueTitle={tourneyTypeDefault}
            defaultValue={tourneyTypeDefault}
            options={tourneyTypeOptions}
            icon={<TwoGearsIcon size={18} color="#FFF" />}
            isDark
          />
        </div>
        <div className="col-span-full">
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Tournament participants
          </label>
          <StyledSelect
            onChange={(e) =>
              dispatch({ type: "participant_update", payload: e.target.value })
            }
            defaultValue={participantDefault}
            defaultValueTitle={participantDefault}
            options={participantsOptions}
            icon={<UsersIcon size={18} color="#FFF" />}
            isDark
          />
        </div>
        <div className="col-span-full">
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Match reporting
          </label>
          <StyledSelect
            onChange={(e) =>
              dispatch({ type: "match_report_update", payload: e.target.value })
            }
            defaultValue={participantUpdateDefault}
            defaultValueTitle={participantUpdateDefault}
            options={matchReportOptions}
            icon={<SubmitIcon size={18} color="#FFF" />}
            isDark
          />
        </div>
      </div>
    </div>
  );
}
