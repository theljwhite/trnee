import { useState } from "react";
import { copyTextToClipboard } from "../../utils/copyText";
import { toastSuccess } from "./Toast/Toast";
import { EyeTransform, ClipboardOne } from "./Icons";

export default function StyledCopyBox({
  copyBoxLabel,
  dataToCopy,
  isSecret,
  withToast,
}) {
  const [isHidden, setIsHidden] = useState(isSecret);

  const copyText = () => {
    if (withToast) {
      copyTextToClipboard(String(dataToCopy));
      toastSuccess(`Copied '${copyBoxLabel}'`);
    } else copyTextToClipboard(String(dataToCopy));
  };

  return (
    <div className="ms-1 flex flex-1 flex-col overflow-hidden">
      <div className="flex w-full flex-col gap-2 overflow-hidden rounded-md bg-zinc-800 p-4">
        <div className="flex w-full justify-between">
          <div className="flex">
            <p className="overflow-hidden truncate text-sm font-semibold capitalize leading-5 text-zinc-400">
              {copyBoxLabel}
            </p>
          </div>
          <div className="ml-auto flex gap-1">
            {isSecret && (
              <button
                onClick={() => setIsHidden(!isHidden)}
                className="relative inline-flex h-auto appearance-none items-center justify-center truncate bg-transparent p-0  align-middle leading-[1.2] text-white outline-none"
              >
                <span className="inline-block text-zinc-400 h-5 w-5 shrink-0 leading-[1em]">
                  <EyeTransform
                    size={20}
                    color="currentColor"
                    line={isHidden}
                  />
                </span>
              </button>
            )}
            <button
              onClick={copyText}
              className="relative inline-flex h-auto appearance-none items-center justify-center truncate bg-transparent p-0 align-middle leading-[1.2] text-white outline-none"
            >
              <span className="inline-block h-5 w-5 shrink-0 text-zinc-400 leading-[1em]">
                <ClipboardOne size={20} color="currentColor" />
              </span>
            </button>
          </div>
        </div>
        <div className="relative flex">
          <pre
            className={`${
              isHidden
                ? "text-transparent [text-shadow:white_0px_0px_6px]"
                : "text-white"
            } whitespace-prewrap m-0 p-0 text-sm font-normal leading-5`}
          >
            {dataToCopy}
          </pre>
        </div>
      </div>
    </div>
  );
}
