import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav2 from "./components/tienda/nav2";
import CardProduct2 from "./components/products/CardProduct2";
import "../src/assets/scss/astro-ecommerce.scss";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          <Nav2></Nav2>
          <section className="m-5">
            <CardProduct2 />
          </section>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
