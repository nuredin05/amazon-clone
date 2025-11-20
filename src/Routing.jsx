import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Payment from "./pages/Payment/Payment";
import Orders from "./pages/Orders/Orders";
import Cart from "./pages/Cart/Cart";
import Results from "./pages/Results/Results";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Auth from "./pages/Auth/Auth";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Protect from "./components/ProtectedRoute/Protect";
const stripePromise = loadStripe(
  "pk_test_51SRcEJB6YkWVNF7Tcuupeqa6QUsewNDjNyU8uUnA0JZsaJovEJmWiwztjumMsZv5521waBhXHR2sRsOC7Uid1LIc00Nvp0wlqu"
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
        </Routes>
      </Router>
    </div>
  );
};
