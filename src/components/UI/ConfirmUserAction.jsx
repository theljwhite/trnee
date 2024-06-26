import ModalWrapper from "./ModalWrapper";
import { CloseX } from "./Icons";

export default function ConfirmUserAction({
  setIsOpen,
  action,
  modalTitle,
  message,
  children,
  actionBtnDisabled,
}) {
  return (
    <ModalWrapper modalBg="bg-zinc-800" setIsOpen={setIsOpen}>
      <div className="px-6 w-full rounded-2xl relative">
        <button
          onClick={() => setIsOpen(false)}
          type="button"
          className="focus:outline-none text-2xl text-white text-opacity-70 hover:text-opacity-40 absolute top-2 right-4 transition"
        >
          <CloseX size={16} />
        </button>
        <div className="overflow-y-auto">
          <h1 className="text-white font-bold text-lg">{modalTitle}</h1>
          <p className="mt-4 text-white text-md opacity-70">{message}</p>
          <div className="my-4">{children}</div>
        </div>
        <div className="flex justify-between w-full">
          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center text-zinc-900 justify-center bg-zinc-400 px-8 py-2 rounded-lg cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={action}
            disabled={actionBtnDisabled}
            className="flex items-center text-white justify-center bg-indigo-600 px-8 py-2 rounded-lg cursor-pointer disabled:bg-stone-400 disabled:text-stone-500"
          >
            {modalTitle}
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
}
