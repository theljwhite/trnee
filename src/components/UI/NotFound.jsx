import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="my-12 lg:mt-28 lg:ml-16 flex-1 block">
      <div className="flex min-h-screen flex-col">
        <div className="text-center pb-4">
          <h1 className="text-center text-[10rem] font-bold inline-block tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-400">
            Page not found.
          </h1>
          <div className="flex my-10 justify-center items-center">
            <Link to="/">
              <img
                className="w-[300px] h-[300px] hover:animate-bounce"
                src="https://cdn.pixabay.com/photo/2014/03/25/15/26/cup-296861_1280.png"
              />
            </Link>
          </div>
          <h1 className="text-2xl text-center text-white font-bold">
            With that and 50 cents, you could get a cup of coffee.
          </h1>
        </div>
      </div>
    </main>
  );
}
