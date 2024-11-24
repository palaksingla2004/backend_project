// // import React, { useEffect, useState } from "react";
// // import axios from "axios";

// // const Products = () => {
// //   const [products, setProducts] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchProducts = async () => {
// //       try {
// //         const response = await axios.get(`${process.env.REACT_APP_API_URL}/allproducts`);
// //         setProducts(response.data);
// //       } catch (error) {
// //         setError("Failed to fetch products. Please try again later.");
// //         console.error("Error fetching products:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchProducts();
// //   }, []);

// //   if (loading) {
// //     return <p>Loading products...</p>;
// //   }

// //   if (error) {
// //     return <p className="error-message">{error}</p>;
// //   }

// //   return (
// //     <div>
// //       <h1>Products</h1>
// //       <div className="product-grid">
// //         {products.map((product) => (
// //           <div key={product.id} className="product-card">
// //             <img
// //               src={`${process.env.REACT_APP_API_URL}/images/${product.image || "placeholder.png"}`}
// //               alt={product.name || "Product"}
// //             />
// //             <h2>{product.name}</h2>
// //             <p>{product.description}</p>
// //             <p>₹{product.new_price}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Products;
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Products = () => {
//   const [products, setProducts] = useState([]); // Stores product data
//   const [loading, setLoading] = useState(true); // Tracks loading state
//   const [error, setError] = useState(null); // Tracks error state

//   // Fetch products from the backend
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         // Use the backend URL from environment variables or hardcode if needed
//         const backendUrl = process.env.REACT_APP_API_URL || "http://localhost:4000";
//         const response = await axios.get(`${backendUrl}/allproducts`);
//         setProducts(response.data); // Update the product state
//       } catch (err) {
//         setError("Failed to fetch products. Please try again later."); // Set error message
//         console.error("Error fetching products:", err);
//       } finally {
//         setLoading(false); // Set loading state to false
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Display a loading state
//   if (loading) {
//     return <p>Loading products...</p>;
//   }

//   // Display an error message if an error occurred
//   if (error) {
//     return <p className="error-message">{error}</p>;
//   }

//   // Render the product grid
//   return (
//     <div>
//       <h1>Products</h1>
//       <div className="product-grid">
//         {products.map((product) => (
//           <div key={product.id} className="product-card">
//             {/* Dynamically load product images */}
//             <img
//               src={
//                 product.image
//                   ? `${process.env.REACT_APP_API_URL || "http://localhost:4000"}/images/${product.image}`
//                   : `${process.env.REACT_APP_API_URL || "http://localhost:4000"}/images/placeholder.png`
//               }
//               alt={product.name || "Product"}
//               onError={(e) => {
//                 e.target.src = `${process.env.REACT_APP_API_URL || "http://localhost:4000"}/images/placeholder.png`;
//               }}
//             />
//             <h2>{product.name}</h2>
//             <p>{product.description}</p>
//             <p>₹{product.new_price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // export default Products;
// import React from "react";
// // import ProductDisplay from "./ProductDisplay";
// import ProductDisplay from '../Components/ProductDisplay'; // Adjust path based on actual location

// // Importing static product data and images
// import product1Image from "../Assets/product13.jpg";
// import product2Image from "../Assets/product24.jpg";

// const staticProducts = [
//   {
//     id: 1,
//     name: "Stylish T-Shirt",
//     description: "A cool and trendy t-shirt for all occasions.",
//     old_price: 999,
//     new_price: 499,
//     image: product1Image,
//   },
//   {
//     id: 2,
//     name: "Elegant Shirt",
//     description: "An elegant and stylish shirt for formal events.",
//     old_price: 1499,
//     new_price: 899,
//     image: product2Image,
//   },
// ];

// const Products = () => {
//   return (
//     <div className="products-container">
//       <h1>Products</h1>
//       <div className="product-grid">
//         {staticProducts.map((product) => (
//           <ProductDisplay key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import ProductDisplay from '../Components/ProductDisplay'; // Adjust based on actual location
import product1 from '../Components/Assets/Dress.jpeg'; // Adjust based on actual location
import product2 from '../Components/Assets/Headbands.jpeg'; // Adjust based on actual location

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const backendUrl = process.env.REACT_APP_API_URL || 'http://localhost:4000';
        const response = await axios.get(`${backendUrl}/allproducts`);
        setProducts(response.data);
      } catch (err) {
        setError('Failed to fetch products. Please try again later.');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div>
      <h1>Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={
                product.image
                  ? `${process.env.REACT_APP_API_URL || 'http://localhost:4000'}/images/${product.image}`
                  : product1 // Replace with a placeholder if needed
              }
              alt={product.name || 'Product'}
              onError={(e) => {
                e.target.src = product2; // Fallback to a default image
              }}
            />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>₹{product.new_price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
