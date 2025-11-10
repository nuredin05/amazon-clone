import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './Pages/landing/Landing'
import Auth from './Pages/auth/Auth'
import Protect from './Pages/auth/Auth'
import Payment from './Pages/payment/Payment'
import Orders from './Pages/orders/Orders'
import Results from './Pages/results/Results'
import Cart from './Pages/Cart/Cart'
import ProductDetails from './Pages/productDetails/ProductDetails'
import SignUp from './Pages/auth/signUp'

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
            path="/Payment"
            element={
              <Protect msg={"you must login in to pay"} redirect={"/payment"}>
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              </Protect>
            }
          />
          <Route
            path="/Orders"
            element={
              <Protect
                msg={"you must login in to access your orders"}
                redirect={"/orders"}
              >
                <Orders />
              </Protect>
            }
          />
          <Route path="Category/:categoryName" element={<Results />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Products/:productId" element={<ProductDetails />} />
          <Route path="/Signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
};
