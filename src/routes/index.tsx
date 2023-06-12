import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Product } from "../pages/Product";
import { Login } from "../pages/Login/Login";

export const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
