import { Routes, Route, Outlet } from "react-router-dom";
import { CreateTourneyProvider } from "../components/create-tournament/CreateTourneyContext";
import Authorized from "../auth/Authorized";
import Navbar from "../components/UI/Navbar";
import Sidebar from "../components/UI/Sidebar";
import HomeHero from "../components/UI/HomeHero";
import TournamentsLayout from "../layouts/TournamentsLayout";
import TournamentLayout from "../layouts/TournamentLayout";
import TournamentList from "../components/Tournaments/TournamentList";
import GameTourneyList from "../components/tournaments/GameTourneyList";
import Tournament from "../components/tournament/Tournament";
import CreateStepper from "../components/create-tournament/CreateStepper";
import NotFound from "../components/UI/NotFound";
import Dashboard from "../components/user-dashboard/Dashboard";
import UserTourneyEditor from "../components/user-dashboard/UserTourneyEditor";

export default function ApplicationViews() {
  return (
    <>
      <Routes>
        <Route
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
          <Route path="/create" element={<TournamentsLayout />}>
            <Route
              index
              element={
                <Authorized>
                  <CreateTourneyProvider>
                    <CreateStepper />
                  </CreateTourneyProvider>
                </Authorized>
              }
            />
          </Route>

          <Route path="tournaments" element={<TournamentsLayout />}>
            <Route index element={<TournamentList />} />
            <Route path=":game" element={<GameTourneyList />} />
          </Route>

          <Route path="trnee" element={<TournamentLayout />}>
            <Route path=":tourneyId" element={<Tournament />} />
          </Route>

          <Route path="dashboard" element={<TournamentsLayout />}>
            <Route
              index
              element={
                <Authorized>
                  <Dashboard />
                </Authorized>
              }
            />
            <Route path="trnee">
              <Route
                path=":tourneyId"
                element={
                  <Authorized>
                    <UserTourneyEditor />
                  </Authorized>
                }
              />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
