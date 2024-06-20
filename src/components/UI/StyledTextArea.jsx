export default function StyledTextArea({
  stateVar,
  onChange,
  icon,
  placeholder,
  isDark,
  height,
}) {
  const inputBg = isDark ? "bg-zinc-800" : "bg-zinc-900";
  const inputBorder = isDark ? "border-zinc-700" : "border-zinc-800";

  return (
    <div className="relative">
      <div
        className={`flex w-full ${inputBorder} ${inputBg} overflow-hidden rounded-lg border-2`}
      >
        <div
          className={`${inputBg} my-auto mt-[0px] w-12 py-1.5 text-center text-lg`}
        >
          <span className="align-[-0.125em] inline-block">{icon}</span>
        </div>
        <textarea
          spellCheck="false"
          autoCorrect="off"
          autoComplete="off"
          placeholder={placeholder}
          className={`${inputBg} ${
            height ? `h-${height}` : ""
          } block w-full pt-2 pb-2 pr-2 text-white`}
          value={stateVar}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
