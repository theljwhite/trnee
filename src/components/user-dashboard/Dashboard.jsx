import { Link } from "react-router-dom";
import { useSession } from "../../auth/useSession";
import UserTournaments from "./UserTournaments";
import { AddIconPlus } from "../UI/Icons";

export default function Dashboard() {
  const { state: session } = useSession();

  return (
    <>
      <div className="rounded-lg flex flex-col justify-center h-32 p-4 lg:p-6 mb-6 bg-gradient-to-r from-zinc-800 to-zinc-900 shadow">
        <div className="grid grid-cols-1 lg:grid-cols-8">
          <div className="col-span-1 lg:col-span-7">
            <h1 className="text-white text-lg lg:text-4xl leading-8 lg:leading-9 font-bold">
              {session?.user?.username ? `${session.user.username}'s` : "Your"}{" "}
              TRNEEs
            </h1>
            <p className="text-white mt-2 opacity-70">
              Create, host, and manage your own customized tournaments.
            </p>
          </div>
          <div className="my-auto col-span-1">
            <Link
              to="/create"
              className="flex text-white items-center text-left px-4 py-2 rounded-lg bg-indigo-600"
            >
              <span className="mr-2">
                <AddIconPlus size={16} color="#FFF" />
              </span>
              Create
            </Link>
          </div>
        </div>
      </div>
      <UserTournaments />
    </>
  );
}
