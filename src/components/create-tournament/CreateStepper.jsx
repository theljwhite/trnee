import { useState } from "react";
import { useCreateTourneyContext } from "./CreateTourneyContext";
import { validateStep } from "../../utils/createTourneyValidation";
import CreateGeneral from "./CreateGeneral";
import CreateSettings from "./CreateSettings";
import CreateParticipants from "./CreateParticipants";
import { DescriptionIcon, TwoGearsIcon, UsersIcon } from "../UI/Icons";

//wrapped this component in a context w/ a reducer in case
//that I decide to expand on this at a later date with more state,
//more steps can more easily be added.

const creationSteps = [
  {
    name: "General",
    icon: <DescriptionIcon size={18} color="#FFF" />,
    content: <CreateGeneral />,
  },
  {
    name: "Settings",
    icon: <TwoGearsIcon size={18} color="#FFF" />,
    content: <CreateSettings />,
  },
  {
    name: "Participants",
    icon: <UsersIcon size={18} color="#FFF" />,
    content: <CreateParticipants />,
  },
];

export default function CreateStepper() {
  const { state } = useCreateTourneyContext();
  const [currStep, setCurrStep] = useState(0);
  const [furthestStep, setFurthestStep] = useState(0);

  const handleStepClick = (index) => {
    if (index < currStep) {
      setCurrStep(index);
      return;
    }

    for (
      let stepToValidate = currStep;
      stepToValidate <= index;
      stepToValidate++
    ) {
      const errorMessage = validateStep(stepToValidate, state);
      if (errorMessage) {
        setCurrStep(stepToValidate);
        return;
      }

      setCurrStep(index);
      if (index > furthestStep) {
        setFurthestStep(index);
      }
    }
  };

  return (
    <>
      <h1 className="text-white capitalize text-lg lg:text-3xl leading-8 lg:leading-9 font-bold">
        Create TRNEE
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 mt-6">
        <div className="col-span-1">
          <div className="grid grid-cols-1 gap-2">
            {creationSteps.map((step, index) => {
              return (
                <button
                  onClick={() => handleStepClick(index)}
                  key={index}
                  className={`${
                    index === currStep ? "bg-zinc-700" : "bg-zinc-800"
                  } flex text-white items-center text-left px-4 py-2 rounded-lg`}
                >
                  <span className="w-10 h-[1em] inline-block align-[-0.125em]">
                    {step.icon}
                  </span>
                  {step.name}
                </button>
              );
            })}
            <div className="border-t border-zinc-700 my-2"></div>
            {currStep === creationSteps.length - 1 ? (
              <button className="flex text-white items-center text-left px-4 py-2 rounded-lg bg-indigo-600">
                Create
              </button>
            ) : (
              <button
                onClick={() => handleStepClick(currStep + 1)}
                className="flex text-white  items-center text-left px-4 py-2 rounded-lg bg-indigo-600"
              >
                Next
              </button>
            )}
          </div>
        </div>
        <div className="col-span-1 xl:col-span-3">
          {creationSteps[currStep].content}
        </div>
      </div>
    </>
  );
}
