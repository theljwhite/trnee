import { Route, Routes } from "react-router-dom";
import Authorized from "./views/Authorized";
import ApplicationViews from "./views/ApplicationViews";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

function App() {
  return (
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
