import { React, useState, useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import axios from "axios";

export const Shorty = () => {
  const [create, setCreate] = useState("");
  const [orgUrlValue, setOrgUrlValue] = useState("");
  const [shortUrlValue, setShortUrlValue] = useState("");

  const CreateUrl = async () => {
    const result = await axios.post("http://localhost:8000/url", {
      original_url: orgUrlValue,
      short_url: shortUrlValue,
    });
    setCreate(result);
  };

  useEffect(() => {
    CreateUrl();
  }, []);

  const [shortenedLink, setShortenedLink] = useState("");
  const [userInput, setUserInput] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios(
        `https://api.shrtco.de/v2/shorten?url=${userInput}`
      );
      setShortenedLink(response.data.result.full_short_link);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="homeInput">
        <div className="inputBox">
          <input
            id="homeInput"
            type="text"
            placeholder="https://www.web-page.com"
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
              setOrgUrlValue(e.target.value);
            }}
          />
          <button
            className="button"
            onClick={() => {
              fetchData();
            }}
          >
            Submit URL
          </button>
        </div>

        <div className="inputBox">
          <input
            id="homeInput"
            placeholder="Shortend url will appear here ..."
            value={shortenedLink}
            onChange={(e) => {
              setShortUrlValue(e.target.value);
            }}
          />
          <CopyToClipboard text={shortenedLink}>
            <button className="button">Copy URL</button>
          </CopyToClipboard>
          <button
            style={{
              width: "6%",
              borderRadius: "10px",
              backgroundColor: "white",
              borderWidth: "0",
              marginTop: "2%",
            }}
          >
            <h3 onClick={CreateUrl} className="word">
              Save
            </h3>
          </button>
        </div>
      </div>
    </div>
  );
};
