import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard";
import EditEmployee from "./pages/Employee/EditEmployee";
import ProtectedRoutes from "./services/ProtectedRoutes";

const AppRouter: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoutes />}>
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
          <Route
            path="/employee"
            element={<EditEmployee />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
