import React, { useContext, useState } from "react";
import Layout from "../../Component/Layout/Layout";
import { Link, useLocation, useNavigate } from "react-router-dom";
import classes from "./Signup.module.css";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Component/DataProvider/DataProvider";
import { Type } from '../../Utility/action.type'
import { ClipLoader } from "react-spinners";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [{ user }, dispatch] = useContext(DataContext);
  const [isLoading, setIsLoading] = useState({
    signIn: false,
    signUp: false,
  });

  const navigate=useNavigate()
  const navStateData=useLocation()

  const authHandler = (e) => {
    e.preventDefault();
    if (e.target.name == "signin") {
      setIsLoading({ ...isLoading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setIsLoading({ ...isLoading, signIn: false });
          navigate(navStateData?.state?.redirect || "/")
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading({ ...isLoading, signIn: false });
          navigate(navStateData?.state?.redirect || "/")

        });
    } else {
      setIsLoading({ ...isLoading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setIsLoading({ ...isLoading, signUp: false });
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading({ ...isLoading, signUp: false });
        });
    }
  };
  return (
    <Layout>
      <section className={classes.login}>
        {/* logo */}
        <Link to={"/"}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png"
            alt=""
          />
        </Link>
        {/* form */}
        <div className={classes.login_container}>
          <h1>Sign In</h1>
          {
            navStateData?.state?.msg &&(
              <small style={{
                padding:"5px",
                textAlign:"center",
                color:"red",
                fontWeight:"bold"

              }}>
                {navStateData?.state?.msg}
              </small>
            )
          }
          <form action="">
            <div>
              <label htmlFor="email">Email</label>
              <input
                value={email}
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className={classes.sign_btn}
              type="submit"
              onClick={authHandler}
              name="signin"
            >
              {isLoading.signIn ? (
                <ClipLoader color="#000" size={15} />
              ) : (
                "Sign In"
              )}
            </button>
          </form>
          {/* Agreement */}
          <p>
            By continuing, you agree to Amazon's Fake Clone Conditions of Use
            and Privacy Notice.
          </p>
          <button
            className={classes.login_create}
            type="submit"
            onClick={authHandler}
            name="signup"
          >
            {isLoading.signUp ? (
              <ClipLoader color="#000" size={15} />
            ) : (
              "Create your Amazon Account"
            )}
          </button>
          {error && (
            <small style={{ padding: "50px", color: "red" }}>{error}</small>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Auth;
