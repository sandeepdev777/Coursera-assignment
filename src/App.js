import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Checkout } from "./pages/checkout/checkout";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { LandingPage } from "./pages/landing-page/page";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Routes>
          <Route path="/" element={<LandingPage />} />
            <Route path="/shop" element={<div><Navbar /><Shop /></div>} />
            <Route path="/cart" element={<div><Navbar /><Cart /></div>} />
            <Route path="/checkout" element={<div><Navbar /><Checkout /></div>} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
