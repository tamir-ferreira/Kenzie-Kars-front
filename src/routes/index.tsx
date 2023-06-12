import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Product } from "../pages/Product";
import { Profile } from "../pages/Profile";

export const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
