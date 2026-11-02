import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const channelUrl = "https://whatsapp.com/channel/0029Vb8pKiQ4yltLgvh0aO0J";

function WhatsAppChannelToggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="whatsapp-channel-widget">
      {isOpen && (
        <div className="whatsapp-channel-panel" id="whatsapp-channel-panel">
          <div className="whatsapp-channel-panel-heading">
            <span className="whatsapp-channel-icon" aria-hidden="true">
              <FaWhatsapp size={18} />
            </span>
            <div>
              <strong>Amentis 7 Global</strong>
              <span>Verified WhatsApp channel</span>
            </div>
            <button
              className="whatsapp-channel-close"
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close WhatsApp channel panel"
            >
              <X size={17} />
            </button>
          </div>
          <p>Follow our channel for recruitment updates and opportunities.</p>
          <a href={channelUrl} target="_blank" rel="noreferrer">
            Follow verified channel <ArrowUpRight size={16} />
          </a>
        </div>
      )}
      <button
        className="whatsapp-channel-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="whatsapp-channel-panel"
        aria-label={isOpen ? "Close WhatsApp channel details" : "Open WhatsApp channel details"}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X size={21} /> : <FaWhatsapp size={21} />}
        <span>{isOpen ? "Close" : "WhatsApp"}</span>
      </button>
    </div>
  );
}

export default WhatsAppChannelToggle;
