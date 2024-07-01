import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="hidden lg:block w-full bg-black sticky left-0 bottom-0 bg-opacity-50 mt-16">
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 py-2 items-center">
          <div className="my-auto">
            <div className="font-semibold text-white">© TRN.EE 2024</div>
          </div>
          <div>
            <div className="flex justify-center items-center">
              <Link
                to="/tos"
                className="my-auto pl-4 text-sm text-white hover:text-indigo-400"
              >
                Terms of Service
              </Link>
              <Link
                to="/contact"
                className="my-auto pl-4 text-sm text-white hover:text-indigo-400"
              >
                Contact Us
              </Link>
              <Link
                to="/discord"
                className="my-auto pl-4 text-sm text-white hover:text-indigo-400"
              >
                Discord
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
