import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Team from "./pages/Team";
import ContactUs from "./pages/ContactUs";
import ProductData1 from "./ProductData/ProductData1";
import ProductData2 from "./ProductData/ProductData2";
import ProductData3 from "./ProductData/ProductData3";
import ProductData4 from "./ProductData/ProductData4";
import ProductData5 from "./ProductData/ProductData5";
import ProductData6 from "./ProductData/ProductData6";
import ProductData7 from "./ProductData/ProductData7";
import ProductData8 from "./ProductData/productData8";
import ProductData9 from "./ProductData/ProductData9";
import ProductData10 from "./ProductData/ProductData10";
import ProductData11 from "./ProductData/ProductData11";

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* products data routes  */}
        <Route path="/productData1" element={<ProductData1 />} />
        <Route path="/ProductData2" element={<ProductData2 />} />
        <Route path="/ProductData3" element={<ProductData3 />} />
        <Route path="/ProductData4" element={<ProductData4 />} />
        <Route path="/ProductData5" element={<ProductData5 />} />
        <Route path="/ProductData6" element={<ProductData6 />} />
        <Route path="/ProductData7" element={<ProductData7 />} />
        <Route path="/ProductData8" element={<ProductData8 />} />
        <Route path="/ProductData9" element={<ProductData9 />} />
        <Route path="/ProductData10" element={<ProductData10 />} />
        <Route path="/ProductData11" element={<ProductData11 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
