import "./link-item.css";
import { FiX, FiClipboard } from "react-icons/fi";

export default function LinkItem({ closeModal, content }) {
  async function copyLink() {
    await navigator.clipboard.writeText(content.link);
    alert("URL is copied");
  }

  return (
    <div className="modal-container">
      <div className="modal-header">
        <h2>Shortened link</h2>
        <button
          style={{ borderWidth: "0", backgroundColor: "white" }}
          onClick={closeModal}
        >
          <FiX size={20} color="#000" />
        </button>
      </div>

      <span>{content.long_url}</span>

      <button className="modal-link" onClick={copyLink}>
        {content.link}
        <FiClipboard size={20} color="#FFF" />
      </button>
    </div>
  );
}
