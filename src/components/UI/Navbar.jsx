import { Link } from "react-router-dom";
import { useSession } from "../../auth/useSession";
import { useNavigate } from "react-router-dom";
import { SignInIcon } from "./Icons";

export default function Navbar() {
  const { state, dispatch } = useSession();
  const navigate = useNavigate();

  const handleSignout = () => {
    localStorage.removeItem("trnee_user");
    dispatch({ type: "logout" });
    navigate("/login", { replace: true });
  };

  return (
    <div className="hidden lg:block bg-zinc-800/60 h-16 pl-16 z-40  fixed top-0 left-0 right-0 px-4 filter backdrop-blur-md shadow">
      <div className="flex justify-between items-center px-4 h-full">
        <div className="ml-auto">
          <div className="flex space-x-4 items-center">
            <div className="flex flex-col items-center text-right">
              <div />
              {state && state.user ? (
                <div className="flex space-x-4 items-center">
                  <div className="flex flex-col items-center text-right">
                    <div className="text-lg font-bold text-white">
                      {state.user.username}
                    </div>
                    <button
                      onClick={handleSignout}
                      className="flex ml-auto text-sm font-bold -mt-1.5 text-blue-500"
                    >
                      Sign Out
                    </button>
                  </div>
                  <img
                    src={state.user.avatar ?? "/anonUser.png"}
                    className="my-auto w-12 h-12 rounded-lg bg-zinc-700 border p-0.5 border-zinc-800 hover:border-zinc-900 transition ease-in-out duration-300"
                  />
                </div>
              ) : (
                <Link
                  to="/login"
                  className="cursor-pointer bg-indigo-600 medium font-semibold uppercase py-2 px-4 rounded-lg text-white"
                >
                  <span className="align-[-0.125em] inline-block mr-2 mt-1">
                    <SignInIcon size={15} />
                  </span>
                  Sign in
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
