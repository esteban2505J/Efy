import { HashRouter, Routes, Route } from "react-router-dom";

import Nav2 from "./components/tienda/nav2";
import "./App.css";
import "react-quill/dist/quill.snow.css";
import Products from "./Pages/Products";
import DetailProduct from "./Pages/Information/DetailProduct";
import AboutUs from "./Pages/Information/AboutUs";
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
import Footer from "./components/tienda/footer";
import { ProductProvider } from "./context/ProductContext";
import CreateProduct from "./Pages/Admin/products/CreateProduct";
import AdministrativePanel from "./Pages/Admin/panel/AdministrativePanel";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <ProductProvider>
        <CartProvider>
          <AuthProvider>
            <HashRouter>
              <main>
                <Nav2 />

                <body>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product" element={<Products />} />
                    <Route path="/product/:id" element={<DetailProduct />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/shoppingcart" element={<ShoppingCart />} />
                    <Route path="/profileUser" element={<ProfileUser />} />
                    <Route
                      path="/forgotpassword"
                      element={<ForgotPassword />}
                    />
                    <Route path="/succes" element={<Succes />} />
                    <Route path="/myOrders" element={<MyOrders />} />
                    <Route path="/favorites" element={<FavoriteItems />} />
                    <Route path="/pqrs" element={<Pqrs />} />
                    <Route path="/returns" element={<Returns />} />
                    <Route
                      path="/admin/createProduct"
                      element={<CreateProduct />}
                    ></Route>
                    <Route
                      path="/admin/administrativePanel"
                      element={<AdministrativePanel />}
                    />
                  </Routes>
                </body>
                <Footer className="footer" />
              </main>
            </HashRouter>
          </AuthProvider>
        </CartProvider>
      </ProductProvider>
    </>
  );
}

export default App;
