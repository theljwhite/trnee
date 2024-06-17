import { Outlet } from "react-router-dom";

export default function TournamentLayout() {
  return (
    <div className="py-8 min-w-[1600px] px-10 mx-auto">
      <Outlet />
    </div>
  );
}
