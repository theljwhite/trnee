import { useState, useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "../components/UI/Navbar";
import Sidebar from "../components/UI/Sidebar";
import HomeHero from "../components/UI/HomeHero";
import TournamentsLayout from "../layouts/TournamentsLayout";
import TournamentList from "../components/Tournaments/TournamentList";

export default function ApplicationViews() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localTrneeUser = localStorage.getItem("trnee_user");
    const trneeUser = JSON.parse(localTrneeUser);
    setCurrentUser(trneeUser);
  }, []);

  return (
    <>
      <Routes>
        <Route
          // path="/"
          element={
            <main className="my-12 lg:mt-16 lg:ml-16 flex-1 block">
              <div className="flex min-h-screen flex-col">
                <Sidebar />
                <Navbar />
                <Outlet />
              </div>
            </main>
          }
        >
          <Route
            path="/"
            index
            element={
              <>
                <div id="mobile-top" />
                <div id="mobile-bottom" />
                <HomeHero />
              </>
            }
          />
          <Route path="/create" element={<span>CREATE TOURNEY</span>} />

          <Route path="tournaments" element={<TournamentsLayout />}>
            <Route index element={<TournamentList />} />
            <Route path=":game" element={<span>GAME</span>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
