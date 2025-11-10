import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './Pages/landing/Landing';
import Payment from "./pages/payment/Payment";
import Orders from "./pages/orders/Orders";
import Cart from "./pages/cart/Cart";
import SignUp from "./pages/auth/signUp";
import Results from "./pages/results/Results";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Auth from "./pages/auth/Auth";
import Protect from "./Component/protectedRoute/Protect";

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
          <Route path="category/:categoryName" element={<Results />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
};
