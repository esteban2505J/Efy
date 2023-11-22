import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav2 from "./components/tienda/nav2";
import CardProduct2 from "./components/products/CardProduct2";
import "../src/assets/scss/astro-ecommerce.scss";
import "./App.css";
import Products from "./Pages/Products";
import DetailProduct from "./Pages/DetailProduct";
import AboutUs from "./Pages/AboutUs";
import Blog from "./Pages/Blog";
import ShoppingCart from "./Pages/ShoppingCart";
import { AuthProvider } from "./context/AuthContext";
import ProfileUser from "./Pages/ProfileUser";
import ForgotPassword from "./Pages/ForgotPassword";
import { CartProvider } from "./context/CartContext";
import Succes from "./Pages/Succes";
import MyOrders from "./Pages/MyOrders";
import FavoriteItems from "./Pages/FavoriteItems";
import Pqrs from "./Pages/Pqrs";
import Returns from "./Pages/Returns";

function App() {
  return (
    <>
      <CartProvider>
        <AuthProvider>
          <BrowserRouter>
            <main>
              <Nav2 />
              <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/product" element={<Products />} />
                <Route path="/product/:id" element={<DetailProduct />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/shoppingcart" element={<ShoppingCart />} />
                <Route path="/profileUser" element={<ProfileUser />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
                <Route path="/succes" element={<Succes />} />
                <Route path="/myOrders" element={<MyOrders />} />
                <Route path="/favorites" element={<FavoriteItems />} />
                <Route path="/pqrs" element={<Pqrs />} />
                <Route path="/returns" element={<Returns />} />
              </Routes>
            </main>
          </BrowserRouter>
        </AuthProvider>
      </CartProvider>
    </>
  );
}

export default App;
