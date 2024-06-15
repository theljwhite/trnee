export default function Navbar() {
  return (
    <div className="hidden lg:block bg-zinc-800/60 h-16 pl-16 z-40  fixed top-0 left-0 right-0 px-4 filter backdrop-blur-md shadow">
      <div className="flex justify-between items-center px-4 h-full">
        <div className="ml-auto">
          <div className="flex space-x-4 items-center">
            <div className="flex flex-col items-center text-right">
              <div />
              <a className="cursor-pointer bg-indigo-600 medium font-semibold uppercase p-2 rounded-lg text-white">
                {/* SVG HERE */}
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
