import { useLocation } from "react-router-dom";
import Layout from "./Layout/Layout/Layout.jsx";
import { UserContextProvider } from "./Context/UserContextProvider.jsx";
import { AppRoutes } from "./Route.jsx";
import { AdminRoutes } from "./Route.jsx";
import AdminLayout from "./Layout/AdminLayout/AdminLayout.jsx";
import { ProductContextProvider } from "./Context/ProductContextProvider.jsx";
import { CartProvider } from "./Context/CartContextProvider.jsx";

function App() {
  const location = useLocation();
  console.log(location);

  return (
    <UserContextProvider>
      <ProductContextProvider>
        <CartProvider>
          {location.pathname.includes("/admin") ? (
            <AdminLayout>{AdminRoutes}</AdminLayout>
          ) : (
            <Layout>{AppRoutes}</Layout>
          )}
        </CartProvider>
      </ProductContextProvider>
    </UserContextProvider>
  );
}

export default App;
