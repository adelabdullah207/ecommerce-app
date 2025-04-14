import { lazy, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Header = lazy(() => import("./components/Header"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Footer = lazy(() => import("./components/Footer"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Offers = lazy(() => import("./pages/Offers"));
const Cart = lazy(() => import("./pages/Cart"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Products = lazy(() => import("./pages/Products"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products/categories/:cat_name" element={<Products />} />

          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        {/* <Offers /> */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
