import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import CreateEditProduct from "./components/CreateEditProduct";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-product" element={<CreateEditProduct />} />
        <Route path="/produits" element={<Products />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
