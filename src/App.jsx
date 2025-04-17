import { lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// lazy loading components
const Header = lazy(() => import("./components/Header"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Footer = lazy(() => import("./components/Footer"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Cart = lazy(() => import("./pages/Cart"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Products = lazy(() => import("./pages/Products"));
const _404_ = lazy(() => import("./pages/_404_"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="ecommerce-app/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products/categories/:cat_name" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<_404_ />} />
        </Routes>
        {/* <Offers /> */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
