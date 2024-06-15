export default function StyledInput({ stateVar, onChange, icon, placeholder }) {
  return (
    <div className="relative">
      <div className="flex w-full border-zinc-800 overflow-hidden rounded-lg border-2">
        <div className="my-auto border-none w-12 bg-zinc-900 py-1.5 text-center text-[1.125rem] leading-7">
          <span className="align-[-0.125em] inline-block">{icon}</span>
        </div>
        <input
          placeholder={placeholder}
          className="block w-full pt-[.5rem] pb-[.5rem] pr-[.5rem] bg-zinc-900 text-white"
          value={stateVar}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
