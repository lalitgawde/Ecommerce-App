import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ProductsDetails from "./Pages/ProductDetails/ProductDetails";
import Cart from "./Pages/Cart/Cart";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import ShoppingCategory from "./Pages/ShoppingCategory/ShoppingCategory";
import Logout from "./Pages/Logout/Logout";
import DashBoard from "./AdminPages/DashBoard/DashBoard";
import AdminLogin from "./AdminPages/AdminLogin/AdminLogin";
import UserPage from "./User/UserPage";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/product/:id" element={<ProductsDetails />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/logout" element={<Logout />} />
    {/* <Route path="/user" element={<ProtectedRoute />}> */}
    <Route path="/user" element={<UserPage />} />
    {/* </Route> */}
    <Route path="/shopping-category/:category" element={<ShoppingCategory />} />
  </Routes>
);

const AdminRoutes = (
  <Routes>
    <Route path="/admin/login" element={<AdminLogin />} />
    <Route path="/admin/logout" element={<Logout />} />
    <Route element={<ProtectedRoute />}>
      <Route path="/admin/dashboard" element={<DashBoard />} />
    </Route>
  </Routes>
);

export { AppRoutes, AdminRoutes };
