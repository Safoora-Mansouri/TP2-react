import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CreateEditProduct from "./components/CreateEditProduct";
import { products } from "./data";
import { useState } from "react";

function App() {
  const [productsList, setProductsList] = useState(products);

  const deleteItem = (id) => {
    const newProductList = productsList.filter((item) => item.id !== id);
    setProductsList(newProductList);
  };
  const createItem = (item) => {
    setProductsList([ item,...productsList]);
  };

  const editItem = (item) => {
    const newProductList = productsList.map((prd) => {
      if (prd.id == item.id) {
        return item;
      }
      return prd;
    });
    setProductsList(newProductList);
    console.log(newProductList);
  };
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/add-product"
          element={<CreateEditProduct createItem={createItem} />}
        />
        <Route
          path="/add-product/:id"
          element={<CreateEditProduct editItem={editItem} />}
        />
        <Route
          path="/produits"
          element={
            <Products productsList={productsList} deleteItem={deleteItem} />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
