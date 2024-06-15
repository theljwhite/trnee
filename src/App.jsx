import { useState } from "react";
// import "./App.css";
import "./index.css"; 
import Navbar from "./components/UI/Navbar";
import Sidebar from "./components/UI/Sidebar";
import { TourneyBracketIconOne, TrophyStarIcon } from "./components/UI/Icons";
import HomeHero from "./components/UI/HomeHero";
import { Route, Routes } from "react-router-dom";
import Authorized from "./views/Authorized";
import ApplicationViews from "./views/ApplicationViews";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

function App() {
  return (
    // <div className="flex min-h-screen flex-col">
    //   <main className="my-12 lg:mt-16 lg:ml-16 flex-1 block">
    //     <Sidebar />
    //     <Navbar />
    //     <div id="mobile-top" />
    //     <div id="mobile-bottom" />
    //     <HomeHero />
    //   </main>

    //   <div className="hidden lg:block w-full bg-black bg-opacity-50 mt-16"></div>
    // </div>
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="*"
          element={
            // <Authorized>

            <ApplicationViews />

            // </Authorized>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
