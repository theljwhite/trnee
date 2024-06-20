import { Navigate, useLocation } from "react-router-dom";

export default function Authorized({ children }) {
  const location = useLocation();
  if (localStorage.getItem("trnee_user")) return children;
  else return <Navigate to={`/login`} state={{ from: location }} replace />;
}
