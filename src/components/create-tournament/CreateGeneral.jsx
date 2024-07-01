import { useCreateTourneyContext } from "./CreateTourneyContext";
import { allGameNames } from "../../constants/gameConstants";
import StyledInput from "../UI/StyledInput";
import StyledTextArea from "../UI/StyledTextArea";
import StyledSelect from "../UI/StyledSelect";
import { GameControllerIcon, DescriptionIcon, LabelIcon } from "../UI/Icons";

export default function CreateGeneral() {
  const { state, dispatch } = useCreateTourneyContext();

  return (
    <div className="bg-zinc-900 rounded-lg p-5 shadow-lg min-w-[680px]">
      <div className="mb-4 pb-4 border-b border-zinc-800 text-2xl text-white font-bold">
        General Details
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 mb-6">
        <div className="col-span-full lg:col-span-3">
          <label className="block text-sm font-medium text-zinc-400 mb-1">
            Tournament Name
          </label>
          <StyledInput
            stateVar={state.name}
            onChange={(e) =>
              dispatch({ type: "name_update", payload: e.target.value })
            }
            icon={<LabelIcon size={18} color="#FFF" />}
            placeholder="Tournament name"
            isDark
          />
        </div>
        <div className="col-span-full">
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Description
          </label>
          <StyledTextArea
            stateVar={state.description}
            onChange={(e) =>
              dispatch({ type: "desc_update", payload: e.target.value })
            }
            icon={<DescriptionIcon size={18} color="#FFF" />}
            placeholder="Enter brief tournament description"
            isDark
          />
        </div>
        <div className="col-span-full">
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Game
          </label>
          <StyledSelect
            onChange={(e) =>
              dispatch({ type: "game_update", payload: e.target.value })
            }
            defaultValue={state.game ?? "Select a game"}
            defaultValueTitle={
              state.game ?? "Select a game for your tournament"
            }
            options={["None", ...allGameNames]}
            icon={<GameControllerIcon size={18} color="#FFF" />}
            isDark
          />
        </div>
      </div>
    </div>
  );
}
