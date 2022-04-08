import { useState, useEffect } from "react";
import "./Footer.css";

const Footer = () => {
  const [message, setMessage] = useState<string>("");
  const messageFooterApi =
    "https://comments-manager-server.herokuapp.com/footer";

  const getMessageFooter = async () => {
    const response = await fetch(messageFooterApi);
    const data = await response.json();
    setMessage(data.version);
    return data;
  };

  useEffect(() => {
    getMessageFooter();
  }, []);

  return (
    <footer className="footer">
      <p>
        <strong>{message}</strong>
      </p>
    </footer>
  );
};

export default Footer;
