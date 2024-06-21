import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { api } from "../../utils/api";
import StyledInput from "../UI/StyledInput";
import { UserIcon, ShieldIconOne, EmailIcon } from "../UI/Icons";
import { toastError } from "../UI/Toast/Toast";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const existingEmail = await api.users.getUserByEmail(email);
    const existingUsername = await api.users.getUserByUsername(username);

    if (existingEmail) {
      toastError("An account with that email already exists.");
      return;
    }

    if (existingUsername) {
      toastError("An account with that username already exists.");
      return;
    }

    localStorage.setItem(
      "trnee_user",
      JSON.stringify({ username, email, password })
    );

    navigate("/");
  };

  return (
    <main className="my-12 lg:mt-16 lg:ml-16">
      <div className="py-8 min-w-[1600px] px-10 mx-auto">
        <div className="relative mx-auto block w-96 rounded-lg border border-zinc-700 p-6 shadow-lg bg-zinc-800">
          <form className="grid grid-cols-1 gap-4">
            <div className="text-center pb-2 text-white">
              <h1 className="text-2xl font-bold">Create an account</h1>
              <span className="text-zinc-400 text-base">
                Please enter the fields below.
              </span>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1">
                Username
              </label>
              <StyledInput
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                stateVar={username}
                icon={<UserIcon size={18} color="#FFF" />}
                isDark
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1">
                Email
              </label>
              <StyledInput
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                stateVar={email}
                icon={<EmailIcon size={18} color="#FFF" />}
                isDark
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1">
                Password
              </label>
              <StyledInput
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                stateVar={password}
                icon={<ShieldIconOne size={18} color="#FFF" />}
                isDark
              />
            </div>
            <div className="flex flex-col my-2 gap-2">
              <button
                type="submit"
                onClick={handleRegister}
                className="flex items-center text-white justify-center bg-indigo-600 px-4 py-2 rounded-lg cursor-pointer"
              >
                <span className="hidden xl:inline">Register and login</span>
              </button>
            </div>
          </form>
          <Link
            to="/login"
            className="absolute left-0 right-0 -bottom-12 text-center text-white"
          >
            Already have an account?
          </Link>
        </div>
      </div>
    </main>
  );
}
