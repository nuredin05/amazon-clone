import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Landing from "./Pages/Landing/Landing";
// import Auth from './Pages/Auth/Auth';
// import Protect from "./Pages/Auth/Auth";
// import Payment from './pages/Payment/Payment';
// import Orders from './pages/orders/Orders';
// import Results from './pages/Results/Results';
// import Cart from "./Pages/Cart/Cart";
// import ProductDetails from './pages/ProductDetails/ProductDetails';
// import SignUp from './Pages/Auth/signUp'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";   // ✅ lowercase 'pages'
import Auth from "./pages/Auth/Auth";
import Protect from "./pages/Auth/Auth";      // ✅ Protect should be its own file, not Auth
import Payment from "./pages/Payment/Payment";
import Orders from "./pages/Orders/Orders";      // ✅ uppercase 'Orders'
import Results from "./pages/Results/Results";
import Cart from "./pages/Cart/Cart";            // ✅ lowercase 'pages'
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import SignUp from "./pages/Auth/SignUp";        // ✅ uppercase 'SignUp'

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


const stripePromise = loadStripe(
  "pk_test_51QN9BGA9PEMJhTAamC1DiYw2eFh5jDnRMWXAiDkFSfrdTN81ssFRXuCvgbh3L0IC2oHJhonnSNZe93D4THUR7Y1a00r5iMXhkZ"
);
export const Routing = () => {
   return (
    <div>
      <Router future={{ v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/payment"
            element={
              <Protect msg={"you must login in to pay"} redirect={"/payment"}>
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              </Protect>
            }
          />
          <Route
            path="/orders"
            element={
              <Protect
                msg={"you must login in to access your orders"}
                redirect={"/orders"}
              >
                <Orders />
              </Protect>
            }
          />
          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
};
