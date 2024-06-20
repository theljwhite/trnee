import { SuccessCircleOne } from "../Icons";

export default function SuccessToast({ message }) {
  return (
    <div className="flex items-center gap-4 pl-4">
      <SuccessCircleOne size={40} color="#047857" />
      <div className="flex flex-col">
        <p className="text-[16px] font-bold uppercase">Success!</p>
        <p className="text-[12px]">{message}</p>
      </div>
    </div>
  );
}
