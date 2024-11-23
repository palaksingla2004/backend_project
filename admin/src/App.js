import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Admin from "./Pages/Admin";
import Product from "./Pages/Product"; 
import React, { useState } from 'react';
import ListProduct from './Components/ListProduct';
import AddProduct from './Components/AddProduct';
export const backend_url = 'http://localhost:4000';
export const currency = '₹';


function App() {
  const [allProducts, setAllProducts] = useState([]);
  
  const fetchInfo = () => {
    fetch(`${backend_url}/allproducts`)
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  };

  return (
    <div>
      <AddProduct fetchInfo={fetchInfo} />
      <ListProduct allProducts={allProducts} fetchInfo={fetchInfo} />
    </div>
  );
}

export default App;
