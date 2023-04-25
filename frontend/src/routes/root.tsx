import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import CartPage from '../pages/CartPage'

function Root() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/cart" element={<CartPage />}/>
    </Routes>
  );
}

export default Root;