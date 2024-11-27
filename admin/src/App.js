import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Admin from "./Pages/Admin";
import LoginSignup from "./Components/loginsignup/loginsignup";

export const backend_url = 'http://localhost:4000';
export const currency = '₹';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          {/* Admin route */}
          <Route path="/admin" element={<Admin />} />
          
          {/* Login1 route */}
          <Route path="/login1" element={<LoginSignup />} />
          
          {/* Default route */}
          <Route path="/" element={<Admin />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

