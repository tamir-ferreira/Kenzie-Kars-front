import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Product } from "../pages/Product";

export const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
