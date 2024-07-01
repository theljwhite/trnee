import { SuccessCircleOne } from "../Icons";

export default function SuccessToast({ message }) {
  return (
    <div className="flex items-center gap-4 pl-4">
      <img src="/successCircle.png" className="w-10 h-10" />
      <div className="flex flex-col">
        <p className="text-[16px] font-bold">Success</p>
        <p className="text-[12px]">{message}</p>
      </div>
    </div>
  );
}
