import { Link } from "react-router-dom";
import "./Style.css";
import img from "../img.png";
import logo from "../logo.png";
import { useState, useEffect } from "react";
import axios from "axios";
import CopyToClipboard from "react-copy-to-clipboard";

import Menu from "../components/Menu";
import LinkItem from "../components/LinkItem";
import api from "../services/api";
import { saveLink } from "../services/storeLinks";

export const Home = () => {
  const [link, setLink] = useState("");
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  async function handleShortLink() {
    try {
      const response = await api.post("/shorten", { long_url: link });
      setData(response.data);
      setShowModal(true);
      saveLink("@shortLink", response.data);
      setLink("");
    } catch {
      alert("it's not URL! you should past your link");
      setLink("https://");
    }
  }

  return (
    <div className="home">
      <div className="homeNavbar">
        <img src={logo} style={{ marginLeft: "4.5%" }} />
        <div style={{ width: "20%", display: "flex" }}>
          <button className="homeLogin" id="box_color">
            <h1 className="word" style={{ color: "white" }}>
              <Link style={{ color: "white" }} id="link" to="/Login">
                Login
              </Link>
            </h1>
          </button>

          <h1 className="word" style={{ color: "rgb(81, 179, 139)" }}>
            <Link style={{ color: "rgb(81, 179, 139)" }} id="link" to="/links">
              See your links
            </Link>
          </h1>
        </div>
      </div>
      <img src={img} className="logo" />
      <div className="homeSearchBox">
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <input
            className="homeSearchInput"
            placeholder="https://www.web-page.com"
            value={link}
            onChange={(e) => {
              setLink(e.target.value);
            }}
          ></input>
          <button
            onClick={handleShortLink}
            id="box_color"
            style={{ width: "8%", height: "4.5vh", marginLeft: "2%" }}
          >
            <h1 className="word" style={{ color: "white" }}>
              Shorten
            </h1>
          </button>
        </div>
      </div>

      {showModal && (
        <LinkItem closeModal={() => setShowModal(false)} content={data} />
      )}
    </div>
  );
};
