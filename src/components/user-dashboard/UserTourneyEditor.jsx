import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSession } from "../../auth/useSession";
import { api } from "../../utils/api";
import UserTourneyDescriptor from "./UserTourneyDescriptor";
import StyledInput from "../UI/StyledInput";
import StyledTextArea from "../UI/StyledTextArea";
import DatePicker from "react-datepicker";
import ConfirmUserAction from "../UI/ConfirmUserAction";
import { LabelIcon, DescriptionIcon, DateIcon } from "../UI/Icons";
import { toastSuccess, toastError } from "../UI/Toast/Toast";

export default function UserTourneyEditor() {
  const [tournament, setTournament] = useState({});
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newStartDate, setNewStartDate] = useState(null);

  const [actionStatus, setActionStatus] = useState("Idle");
  const [actionDisabled, setActionDisabled] = useState(false);
  const [confirmEntry, setConfirmEntry] = useState("");

  const { state: session } = useSession();
  const navigate = useNavigate();
  let { tourneyId } = useParams();

  useEffect(() => {
    getTournament();
  }, [tourneyId]);

  const getTournament = async () => {
    const [tournament] = await api.tournaments.getTournamentById(tourneyId);
    setTournament(tournament);
  };

  const handleSettingsUpdate = async (e) => {
    e.preventDefault();
    const updateData = { newName, newDescription, newStartDate };
    const tourneyUpdate = await api.tournaments.updateTournamentSettings(
      updateData,
      tourneyId
    );

    if (!tourneyUpdate) {
      toastError(
        "Tournament must not be started yet to update these settings."
      );
      return;
    }

    if (tourneyUpdate) {
      toastSuccess(`Updated your tournament, ${tournament.name}`);
    }
  };

  const handleDeleteTournament = async () => {
    const deleteErrorMessage = await api.tournaments.deleteTournament(
      session.user.id,
      tournament.id
    );
    if (deleteErrorMessage) {
      toastError(deleteErrorMessage);
      return;
    }

    toastSuccess("Tournament deleted.");
    setActionStatus("Idle");

    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };

  const handleResetTournament = async () => {
    //TODO
  };

  const onConfirmChange = (e) => {
    setConfirmEntry(e.target.value);
    validateConfirm(e.target.value);
  };

  const validateConfirm = (entry) => {
    if (entry.toLowerCase() !== tournament.name.toLowerCase()) {
      setActionDisabled(true);
      return false;
    }
    setActionDisabled(false);
    return true;
  };

  return (
    <>
      {(actionStatus === "Delete" || actionStatus === "Reset") && (
        <ConfirmUserAction
          setIsOpen={setActionStatus}
          action={
            actionStatus === "Delete"
              ? handleDeleteTournament
              : handleResetTournament
          }
          actionBtnDisabled={actionDisabled}
          modalTitle={`${actionStatus} tournament`}
          message={`Are you sure you want to ${actionStatus.toLowerCase()} this tournament? Action cannot be undone.`}
        >
          <div>
            <div className="text-white">
              Please enter{" "}
              <span className="text-teal-500 font-semibold">
                {tournament.name}{" "}
              </span>
              to {actionStatus} this tournament.
            </div>
            <div className="my-4">
              <StyledInput
                onChange={(e) => onConfirmChange(e)}
                stateVar={confirmEntry}
                placeholder="Tournament name"
                icon={<LabelIcon color="#FFF" size={18} />}
                type="text"
              />
            </div>
          </div>
        </ConfirmUserAction>
      )}
      <UserTourneyDescriptor tournament={tournament} />
      <div className="mt-10">
        <h1 className="text-white text-xl leading-6 lg:leading-7 font-bold lg:text-3xl">
          Settings
        </h1>
      </div>
      <div className="mt-6">
        <form onSubmit={handleSettingsUpdate}>
          <div className="grid grid-cols-1 gap-4 my-4">
            <StyledInput
              stateVar={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder={tournament.name ?? "Edit tournament name"}
              icon={<LabelIcon size={18} color="#FFF" />}
            />
            <StyledTextArea
              stateVar={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder={
                tournament.description ?? "Edit tournament description"
              }
              icon={<DescriptionIcon size={18} color="#FFF" />}
            />
            <div className="col-span-full">
              <label className="block text-sm font-medium text-zinc-400 mb-1">
                Start date
              </label>
              <div className="relative bg-zinc-900">
                <label className="cursor-pointer">
                  <div className="flex w-full border-zinc-800 overflow-hidden rounded-lg border-2">
                    <div className="bg-zinc-900 my-auto border-none w-12 py-1.5 text-center text-[1.125rem] leading-7">
                      <span className="align-[-0.125em] inline-block">
                        <DateIcon size={18} color="#FFF" />
                      </span>
                    </div>
                    <DatePicker
                      className="bg-zinc-900 outline-none cursor-pointer block w-full pt-2 pb-2 pr-2 text-white appearance-none"
                      selected={newStartDate}
                      onChange={(date) => setNewStartDate(date)}
                      showPreviousMonths={false}
                      showTimeSelect
                      showTimeInput
                      timeIntervals={60}
                      timeFormat="HH:mm"
                      dateFormat="MM/dd/yyyy HH:mm:ss"
                      placeholderText="Edit start date"
                    />
                  </div>
                </label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 flex text-white items-center text-left px-4 py-2 rounded-lg bg-zinc-800"
          >
            Update
          </button>
        </form>
      </div>
      <div className="mt-10">
        <h2 className="text-white text-xl leading-6 lg:leading-7 font-bold lg:text-3xl">
          Danger Zone
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          <div className="bg-zinc-800 rounded-lg p-4">
            <h3 className="text-white text-xl leading-6 lg:leading-7 font-bold lg:text-2xl">
              Delete TRNEE
            </h3>
            <p className="text-white">
              Delete this tournament. This action cannot be undone.
            </p>
            <button
              onClick={() => setActionStatus("Delete")}
              className="mt-4 flex text-white items-center text-left px-4 py-2 rounded-lg bg-indigo-600"
            >
              Delete tournament
            </button>
          </div>
          <div className="bg-zinc-800 rounded-lg p-4">
            <h3 className="text-white text-xl leading-6 lg:leading-7 font-bold lg:text-2xl">
              Reset TRNEE
            </h3>
            <p className="text-white">Reset bracket to the first round.</p>
            <button
              onClick={() => setActionStatus("Reset")}
              className="mt-4 flex text-white items-center text-left px-4 py-2 rounded-lg bg-indigo-600"
            >
              Reset tournament
            </button>
          </div>
          <div className="bg-zinc-800 rounded-lg p-4">
            <h3 className="text-white text-xl leading-6 lg:leading-7 font-bold lg:text-2xl">
              Manage participants
            </h3>
            <p className="text-white">Add, remove, and manage participants.</p>
            <button
              onClick={() =>
                navigate(`/dashboard/trnee/${tournament.id}/participants`)
              }
              className="mt-4 flex text-white items-center text-left px-4 py-2 rounded-lg bg-indigo-600"
            >
              Manage participants
            </button>
          </div>
          <div className="bg-zinc-800 rounded-lg p-4">
            <h3 className="text-white text-xl leading-6 lg:leading-7 font-bold lg:text-2xl">
              Custom signup settings
            </h3>
            <p className="text-white">Manage signup URL and key.</p>
            <button
              onClick={() =>
                navigate(`/dashboard/trnee/${tournament.id}/signup`)
              }
              className="mt-4 flex text-white items-center text-left px-4 py-2 rounded-lg bg-indigo-600"
            >
              Manage settings
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
