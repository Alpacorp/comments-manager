import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const container: any = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);

reportWebVitals();
