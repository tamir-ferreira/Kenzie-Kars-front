import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Product } from "../pages/Product";
import { Login } from "../pages/Login";
import { Profile } from "../pages/Profile";
import { Register } from "../pages/Register";
//import { ProtectedRoutes } from "./ProtectRoute";

export const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
      <Route path="/profile" element={<Profile />} />
      {/* <Route element={<ProtectedRoutes />}>
      </Route> */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
