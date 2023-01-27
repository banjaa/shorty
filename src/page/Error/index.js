import "./error.css";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div className="container-error">
      <h1 style={{ color: "red" }}>Error</h1>
      <Link style={{ color: "rgb(81, 179, 139)" }} to="/">
        Go back to home
      </Link>
    </div>
  );
};
