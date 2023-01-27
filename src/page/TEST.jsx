import React from "react";
import bogino from "../assets/bogino.svg";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const navigate = useNavigate();

  const checkUser = () => {
    const user = localStorage.getItem("user");
    if (user) navigate("/");
  };

  useEffect(() => {
    checkUser();
  }, []);
  const [wrongm, setWrongm] = useState(false);
  const [tokenn, setTokenn] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const [token, setToken] = useState();

  const dataRetriever = async () => {
    const hariu = axios
      .post("http://localhost:8000/login", {
        email: emailValue,
        password: passValue,
      })
      .then((response) => {
        if (
          response?.data == "incorrect password or email" ||
          response?.data == " You don't have  account, create user new account "
        ) {
          setWrongm(true);
        } else {
          const token = response?.data[1];
          localStorage.setItem("token", token);
          localStorage.setItem("user", response?.data[0]);
          window.location.href = "/";
        }
      });
    setTokenn(token);
    console.log(hariu, tokenn);
    // const result = await axios.get('http://localhost:8000/user/')
    // .then(response => {
    //     response?.data?.map(function(el){
    //         if(emailValue == el.email && passValue == el.password){
    //             localStorage.setItem('user', el._id)
    //             window.location.href = '/';
    //         }else{
    //             setWrongm(true)
    //         }
    //     });
    //     const id = localStorage.setItem("user")
    // })
    // .catch(err => {
    //     // Handle errors
    //     console.error(err);
    // });
  };

  // const [check, setCheck] = useState(false)
  // console.log(check);

  // const trueBolgodog = () => {
  //     setCheck(true)
  // }

  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <Link to="/">
        <img src={bogino} alt="" />
      </Link>
      <div
        className="text-emerald-600 text-4xl mt-8 font-semibold"
        style={{ fontFamily: "inherit" }}
      >
        Нэвтрэх
      </div>
      <div>
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

        <div className="ml-2 mt-8">Цахим хаяг</div>
        <input
          onChange={(e) => setEmailValue(e.target.value)}
          type="mail"
          placeholder="name@mail.domain"
          className="p-4 w-96 mt-1 block px-1 py-2 bg-white border border-slate-300 rounded-2xl text-sm shadow-sm placeholder-zinc-500 text-sm"
        />
        <div className="ml-2 mt-4">Нууц үг</div>
        <input
          onChange={(e) => setPassValue(e.target.value)}
          type="password"
          placeholder="password"
          className="p-4 w-96 mt-1 block px-1 py-2 bg-white border border-slate-300 rounded-2xl text-sm shadow-sm placeholder-zinc-500 text-sm"
        />

        <div className="justify-between flex mt-4">
          <div className="text-emerald-500 font-semibold flex items-center">
            <input
              type="checkbox"
              className="mr-2 accent-emerald-300"
              name="намайг сана"
              id=""
            />
            Намайг сана
          </div>
          <Link to="/forgot">
            <div className=" font-semibold">Нууц үгээ мартсан</div>
          </Link>
        </div>
        <button
          onClick={dataRetriever}
          className="mt-8 text-2xl font-semibold text-white rounded-full w-full bg-emerald-600 p-2 px-12"
        >
          Нэвтрэх
        </button>
      </div>
      <Link to="/signup">
        <div className="mt-8 text-emerald-600 font-semibold">
          Шинэ хэрэглэгч бол энд дарна уу?
        </div>
      </Link>
    </div>
  );
};
