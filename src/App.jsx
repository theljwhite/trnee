import { Route, Routes } from "react-router-dom";
import ApplicationViews from "./views/ApplicationViews";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { AuthProvider } from "./auth/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<ApplicationViews />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
