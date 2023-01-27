import "./Style.css";
import img from "../img.png";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const CreateAcount = () => {
  const [signIn, setSignin] = useState("");
  const [userValue, setUserValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const [passValue2, setPassValue2] = useState("");

  const SendData = async () => {
    console.log("AAA");
    if (passValue === passValue2) {
      const result = await axios.post("http://localhost:8000/user", {
        username: userValue,
        email: emailValue,
        password: passValue,
      });
      setSignin(result);
    }
  };

  useEffect(() => {
    SendData();
  }, []);

  return (
    <div className="login">
      <div className="loginNavbar">
        <h1 className="word" id="color" style={{ marginRight: "4%" }}>
          How to use it?
        </h1>
      </div>
      <img src={img} style={{ width: "10%", marginTop: "2%" }} />
      <h1
        id="color"
        className="word"
        style={{ fontSize: "400%", marginTop: "2%" }}
      >
        Create account
      </h1>

      <div className="loginRegister">
        <div className="loginInput">
          <h2 style={{ marginBottom: "3%", marginLeft: "5%" }} className="word">
            Username
          </h2>
          <input
            onChange={(e) => setUserValue(e.target.value)}
            placeholder="your name ..."
            id="loginInput"
          ></input>
        </div>
        <div className="loginInput">
          <h2 style={{ marginBottom: "3%", marginLeft: "5%" }} className="word">
            Email
          </h2>
          <input
            onChange={(e) => setEmailValue(e.target.value)}
            placeholder="your email ..."
            id="loginInput"
          ></input>
        </div>
        <div className="loginInput">
          <h2 style={{ marginBottom: "3%", marginLeft: "5%" }} className="word">
            Password
          </h2>
          <input
            onChange={(e) => setPassValue(e.target.value)}
            type="password"
            placeholder="your password ..."
            id="loginInput"
          ></input>
        </div>
        <div className="loginInput">
          <h2 style={{ marginBottom: "3%", marginLeft: "5%" }} className="word">
            Verify
          </h2>
          <input
            onChange={(e) => setPassValue2(e.target.value)}
            type="password"
            placeholder="verify your password ..."
            id="loginInput"
          ></input>
        </div>
        <div
          id="input"
          style={{
            width: "22%",
            marginTop: "2%",
          }}
        >
          <Link to="/">
            <button
              onClick={SendData}
              id="box_color"
              style={{ width: "100%", height: "4.5vh" }}
            >
              <h1 style={{ color: "white" }}>Sign up</h1>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
