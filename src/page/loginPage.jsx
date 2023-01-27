import { Link, useNavigate } from "react-router-dom";
import "./Style.css";
import img from "../img.png";
import { axios } from "axios";
import { useState, useEffect } from "react";

export const Login = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const navigate = useNavigate();
  const [wrongm, setWrongm] = useState(false);
  const [tokenn, setTokenn] = useState("");

  // const loginUser = async () => {
  //   try {
  //     const res = await axios({
  //       url: "http://localhost:8000/login",
  //       method: "POST",
  //       data: {
  //         email: email,
  //         password: pw,
  //       },
  //       headers: {
  //         authorization: `Bearer ${token}`,
  //       },
  //     });
  //     if (res) {
  //       navigate("/");
  //     }
  //     console.log(res);
  //     setToken(res?.data?.token);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const checkUser = () => {
    const user = localStorage.getItem("user");
    if (user) navigate("/");
  };

  useEffect(() => {
    checkUser();
  }, []);

  const dataRetriever = async () => {
    const res = await axios
      .post("http://localhost:8000/login", {
        data: {
          email: emailValue,
          password: passValue,
        },
        headers: {
          authorization: `Bearer ${tokenn}`,
        },
      })
      .then((response) => {
        console.log(response?.data);
        if (
          response?.data == "Invalid password or email" ||
          response?.data == " You don't have any user account, please sign up "
        ) {
          setWrongm(true);
        } else {
          const token = response?.data[1];
          localStorage.setItem("token", token);
          localStorage.setItem("user", response?.data[0]);
          window.location.href = "/";
        }
      });
    console.log(res);
    setTokenn(res?.data?.token);
    console.log(tokenn);
  };

  return (
    <div className="login">
      {wrongm ? (
        <div
          class="flex mt-8 p-4 mb-4 text-red-700 bg-red-100 rounded-lg dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <svg
            aria-hidden="true"
            class="flex-shrink-0 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Info</span>
          <div class="ml-3 text-sm font-medium">WRONG EMAIL OR PASSWORD</div>
        </div>
      ) : null}
      <div className="loginNavbar">
        <h1 className="word" id="color" style={{ marginRight: "4%" }}>
          How to use it?
        </h1>
      </div>
      <img src={img} style={{ width: "10%", marginTop: "2%" }} />
      <h1
        id="color"
        className="word"
        style={{ fontSize: "400%", marginTop: "5%" }}
      >
        Log in
      </h1>

      <div className="loginRegister">
        <div className="loginInput">
          <h2 style={{ marginBottom: "3%", marginLeft: "5%" }} className="word">
            Email
          </h2>
          <input
            placeholder="your email"
            id="loginInput"
            onChange={(e) => {
              setEmailValue(e.target.value);
            }}
          ></input>
        </div>
        <div className="loginInput">
          <h2 style={{ marginBottom: "3%", marginLeft: "5%" }} className="word">
            Password
          </h2>
          <input
            type="password"
            placeholder="password"
            id="loginInput"
            onChange={(e) => {
              setPassValue(e.target.value);
            }}
          ></input>
        </div>

        <div
          id="input"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "18%",
          }}
        >
          <div style={{ display: "flex" }}>
            <input type={"checkbox"}></input>
            <h3 style={{ marginLeft: "20%" }}>save</h3>
          </div>
          <h3>
            <Link id="link" style={{ color: "black" }} to="/RefreshPassword">
              forgot password
            </Link>
          </h3>
        </div>
        <div
          id="input"
          style={{
            width: "22%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "2%",
          }}
        >
          <button
            onClick={dataRetriever}
            id="box_color"
            style={{ width: "100%", height: "4.5vh" }}
          >
            <h1 style={{ color: "white" }}>Enter</h1>
          </button>

          <h3 style={{ marginTop: "3%" }} id="color">
            <Link
              style={{ color: "rgb(81, 179, 139)" }}
              id="link"
              to="/CreateAcount"
            >
              Create new account?
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

// import React, { createContext, useContext, useEffect, useState } from "react";

// export const AuthContext = createContext({});

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const uid = localStorage.getItem("uid");
//     if (token) setAuthenticated(true);
//   }, []);

//   return (
//     <AuthContext.Provider value={{ isAuthenticated }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuthContext = () => useContext(AuthContext);
