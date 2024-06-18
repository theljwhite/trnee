import CreateGeneral from "./CreateGeneral";
import CreateSettings from "./CreateSettings";
import CreateParticipants from "./CreateParticipants";
import { DescriptionIcon, TwoGearsIcon, UsersIcon } from "../UI/Icons";

export default function CreateStepper() {
  const steps = [
    {
      name: "General",
      icon: <DescriptionIcon size={18} color="#FFF" />,
      step: <CreateGeneral />,
    },
    {
      name: "Settings",
      icon: <TwoGearsIcon size={18} color="#FFF" />,
      step: <CreateSettings />,
    },
    {
      name: "Participants",
      icon: <UsersIcon size={18} color="#FFF" />,
      step: <CreateParticipants />,
    },
  ];

  return (
    <>
      <h1 className="text-white capitalize text-lg lg:text-3xl leading-8 lg:leading-9 font-bold">
        Create TRNEE
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 mt-6">
        <div className="col-span-1">
          <div className="grid grid-cols-1 gap-2">
            {steps.map((step, index) => {
              return (
                <button
                  key={index}
                  className="flex text-white items-center text-left px-4 py-2 rounded-lg bg-zinc-700"
                >
                  <span className="w-10 h-[1em] inline-block align-[-0.125em]">
                    {step.icon}
                  </span>
                  {step.name}
                </button>
              );
            })}
            <div className="border-t border-zinc-700 my-2"></div>
            <button className="flex text-white items-center text-left px-4 py-2 rounded-lg bg-indigo-600">
              Create
            </button>
          </div>
        </div>
        <div className="col-span-1 xl:col-span-3">
          {/* <CreateGeneral /> */}
          {/* <CreateSettings /> */}
          <CreateParticipants hasCustomSignup={false} />
        </div>
      </div>
    </>
  );
}
