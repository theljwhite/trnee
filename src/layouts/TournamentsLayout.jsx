import { Outlet } from "react-router-dom";

export default function TournamentsLayout() {
  return (
    <div className="py-8 max-w-screen-lg mx-auto px-6">
      <Outlet />
    </div>
  );
}
