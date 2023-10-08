import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav2 from "./components/tienda/nav2";
import CardProduct2 from "./components/products/CardProduct2";
import "../src/assets/scss/astro-ecommerce.scss";
import "./App.css";
import Products from "./Pages/Products";
import DetailProduct from "./Pages/DetailProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          <Nav2 />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:id" element={<Products />} />
            <Route path="/product" element={<DetailProduct />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
