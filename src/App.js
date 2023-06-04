import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ProductDetail from "./components/ProductDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CreateEditProduct from "./components/CreateEditProduct";
import { products } from "./data";
import { useState, useEffect } from "react";

function App() {
  const [productsList, setProductsList] = useState([]);

  
  useEffect(() => {
    const getProducts = async () => {
      const productsFromServer = await fetchProducts();
      if (Array.isArray(productsFromServer)) {
        setProductsList(productsFromServer);
      }
    }
    getProducts()
  }, []);

  ///////////////////////////////////////////////////////////

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();
    return data;
  };
  ////////////////////////////////////////////////////////////

  const fetchProduct = async (id) => {
    const res = await fetch(`http://localhost:5000/products/${id}`);
    const data = await res.json();
    return data;
  };

  ///////////////////////////////////////////////////////////

  const deleteItem = async (id) => {
    await fetch(`http://localhost:5000/products/${id}`, { method: "DELETE" });
    setProductsList(productsList.filter((item) => item.id !== id));
  };

  //////////////////////////////////////////////////////////////

  const createItem = async (data) => {
    const res = await fetch(`http://localhost:5000/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const newItem = await res.json();

    setProductsList([newItem, ...productsList]);
  };

  ///////////////////////////////////////////////////////////////////

  const editItem = async (item) => {
    const id = item.id;
    const res = await fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    const editedItem = await res.json();
    ////////////////////////////////////////////////////////////////

    setProductsList(
      productsList.map((product) => (product.id === id ? editedItem : product))
    );
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
          element={
            <CreateEditProduct
              fetchProduct={fetchProduct}
              editItem={editItem}
            />
          }
        />
        <Route
          path="/produits"
          element={
            <Products productsList={productsList} deleteItem={deleteItem} />
          }
        />
        <Route
          path="/products-detaile/:id"
          element={<ProductDetail fetchProduct={fetchProduct} />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
