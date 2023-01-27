import { Link } from "react-router-dom";
import "./Style.css";
import img from "../img.png";
export const RefreshPassword = () => {
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
        style={{ fontSize: "400%", marginTop: "5%" }}
      >
        Refresh password
      </h1>
      <h3
        className="word"
        style={{
          width: "15%",
          textAlign: "center",
          marginTop: "1.5%",
        }}
      >
        we'll send you a refresh password to your email.
      </h3>
      <div className="loginRegister">
        <div className="loginInput">
          <h2 style={{ marginBottom: "3%", marginLeft: "5%" }} className="word">
            Email
          </h2>
          <input placeholder="your email" id="loginInput"></input>
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
          <button id="box_color" style={{ width: "100%", height: "4.5vh" }}>
            <h1 style={{ color: "white" }}>Send</h1>
          </button>
        </div>
      </div>
    </div>
  );
};
