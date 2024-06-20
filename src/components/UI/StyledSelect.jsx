import { SPACE_BETWEEN_CAPITALS_REPLACE } from "../../constants/regularExpressions";

export default function StyledSelect({
  onChange,
  defaultValue,
  defaultValueTitle,
  options,
  icon,
  isDark,
}) {
  const selectBg = isDark ? "bg-zinc-800" : "bg-zinc-900";
  const selectBorder = isDark ? "border-zinc-700" : "border-zinc-800";

  return (
    <div className="relative">
      <div
        className={`${selectBg} ${selectBorder} flex w-full overflow-hidden border-2 rounded-lg`}
      >
        <div className="mt-auto mb-auto w-12 bg-transparent py-1.5 text-center text-lg leading-7">
          {icon && (
            <span className="align-[-0.125em] inline-block">{icon}</span>
          )}
        </div>
        <select
          onChange={onChange}
          className={`py-2 pr-2 w-full block ${selectBg} text-white outline-none`}
        >
          <option className="hidden" defaultValue={defaultValue}>
            {defaultValueTitle}
          </option>
          {options.map((option, index) => {
            return (
              <option className="capitalize" value={option} key={index}>
                {SPACE_BETWEEN_CAPITALS_REPLACE(option)}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
