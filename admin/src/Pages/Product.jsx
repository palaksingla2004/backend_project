// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import ProductDisplay from '../Components/ProductDisplay'; // Adjust based on actual location
// import product1 from '../Components/Assets/product_1.png'; // Adjust based on actual location
// import product2 from '../Components/Assets/product_2.png'; // Adjust based on actual location

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const backendUrl = process.env.REACT_APP_API_URL || 'http://localhost:4000';
//         const response = await axios.get(`${backendUrl}/allproducts`);
//         setProducts(response.data);
//       } catch (err) {
//         setError('Failed to fetch products. Please try again later.');
//         console.error('Error fetching products:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) return <p>Loading products...</p>;
//   if (error) return <p className="error-message">{error}</p>;

//   return (
//     <div>
//       <h1>Products</h1>
//       <div className="product-grid">
//         {products.map((product) => (
//           <div key={product.id} className="product-card">
//             <img
//               src={
//                 product.image
//                   ? `${process.env.REACT_APP_API_URL || 'http://localhost:4000'}/images/${product.image}`
//                   : product13 // Replace with a placeholder if needed
//               }
//               alt={product.name || 'Product'}
//               onError={(e) => {
//                 e.target.src = product24; // Fallback to a default image
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

