import "./menu.css";
import { BsYoutube, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <Link to="/links" className="menu-item">
        <h2 style={{ color: "rgb(81, 179, 139)" }}>see your links</h2>
      </Link>
    </div>
  );
}
