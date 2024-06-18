import StyledSelect from "../UI/StyledSelect";
import {
  TourneyBracketIconOne,
  DateIcon,
  UsersIcon,
  SubmitIcon,
  TwoGearsIcon,
} from "../UI/Icons";

export default function CreateSettings() {
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
          {/* TODO make a date picker */}
          <StyledSelect
            defaultValue="Select a start date"
            defaultValueTitle="Select a start date"
            options={["None"]}
            icon={<DateIcon size={18} color="#FFF" />}
            isDark
          />
        </div>
        <div className="col-span-full">
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Tournament format
          </label>
          <StyledSelect
            defaultValue="Select a tournament format"
            defaultValueTitle="Select a tournament format"
            options={[
              "SingleElimination",
              "DoubleElimination",
              "RoundRobin",
              "Swiss",
              "Leaderboard",
            ]}
            icon={<TourneyBracketIconOne size={18} color="#FFF" />}
            isDark
          />
        </div>
        <div className="col-span-full">
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Tournament type
          </label>
          <StyledSelect
            defaultValue="Select a tournament type"
            defaultValueTitle="Select a tournament type"
            options={["Player based", "Team based"]}
            icon={<UsersIcon size={18} color="#FFF" />}
            isDark
          />
        </div>
        <div className="col-span-full">
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Tournament participants
          </label>
          <StyledSelect
            defaultValue="Select a participants option"
            defaultValueTitle="Select a participants option"
            options={[
              "Provide a list of participants",
              "Allow participants to signup after tournament creation",
            ]}
            icon={<TwoGearsIcon size={18} color="#FFF" />}
            isDark
          />
        </div>
        <div className="col-span-full">
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Match reporting
          </label>
          <StyledSelect
            defaultValue="Select a Match Reporting option"
            defaultValueTitle="Select a Match Reporting option"
            options={[
              "Allow participants to report match scores",
              "Only tournament creator can report match scores",
            ]}
            icon={<SubmitIcon size={18} color="#FFF" />}
            isDark
          />
        </div>
      </div>
    </div>
  );
}
